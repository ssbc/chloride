# Chloride

Chloride is a Cryptography Library (Cl) compatibility layer around [Sodium-Native](https://github.com/sodium-friends/sodium-native) (Node.js) and [Sodium-Javascript](https://github.com/sodium-friends/sodium-javascript) (browser) which provides an API closer to [libsodium.js](https://github.com/jedisct1/libsodium.js).

## About

Chloride descends from Dan J. Bernstein's (djb) [NaCl](http://nacl.cr.yp.to/) library ("Networking And Cryptography Library",
not to be confused with the other NaCl, Google's Native Client). djb wrote NaCl, but did not maintain it, some ideas in the library (in particular the networking part) weren't really fully baked, and the best parts where taken and maintained as [libsodium](http://libsodium.org) (although "Na" represents the element sodium, so they took the wrong part of the acronym).

## Support

We have wrapped and tested enough functions for our crypto modules to work.

  * [private-box](https://github.com/auditdrivencrypto/private-box): write a shortish message to multiple recipients.
  * [pull-box-stream](https://github.com/dominictarr/pull-box-stream): encrypt (every byte in) a one-way stream.
  * [secret-handshake](https://github.com/dominictarr/secret-handshake): create an authenticated private channel to a public key.

This is probably everything you need, NaCl doesn't have a very large API, so this is probably everything.

## License

MIT
