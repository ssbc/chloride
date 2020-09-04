var isElectron = require('is-electron')

const cl = require('./sodium-chloride')(require('sodium-universal'))
module.exports = cl;

if(isElectron()) {
  //there is a weird problem with electro.
  //where detached signatures do not work, but other
  //signatures do...

  var keys = cl.crypto_sign_keypair()
  var msg = cl.crypto_hash(Buffer.from('test signature'))
  var sig = cl.crypto_sign_detached(msg, keys.secretKey)

  if(!cl.crypto_sign_verify_detached(sig, msg, keys.publicKey)) {
    console.error('detached signatures broken in electron, using workaround')

    var verify = module.exports.crypto_sign_verify_detached
    module.exports.crypto_sign_verify_detached = function (sig, msg, pk) {
      return module.exports.crypto_sign_open(Buffer.concat([sig, msg]), pk)
    }
  }
}
