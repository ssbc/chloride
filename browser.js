const adapt = (na) => {
  const emptyScalarMult = Buffer.alloc(na.crypto_scalarmult_BYTES)
  const api = require('sodium-chloride')(na)

  // HACK: Sodium-Javascript doesn't throw when crypto_scalarmult fails to
  // derive the shared secret. My original patch fixed this in Sodium-Chloride
  // but that module is unmaintained so we have to fix it somewhere else (or
  // maintain that repository somehow).
  api.crypto_scalarmult = function (sk, pk) {
    const secret = Buffer.alloc(na.crypto_scalarmult_BYTES);
    na.crypto_scalarmult(secret, sk, pk);

    if (na.sodium_memcmp(emptyScalarMult, secret)) {
      throw new Error('failed to derive shared secret')
    }
    return secret
  };

  return api
}

module.exports = adapt(require('sodium-javascript'))
