# Chloride

Chloride is a Compatibility Layer (Cl) around [Sodium-Native](https://github.com/sodium-friends/sodium-universal).

## About

- Chloride decends from Dan J. Bernstein's [NaCl](http://nacl.cr.yp.to/) library ("Networking And Cryptography Library",
not to be confused with the other NaCl, google's Native Client).
- DJB wrote nacl, but did not maintain it, some ideas in the library (in particular the networking part).
- The best parts where taken and maintained as [libsodium](http://libsodium.org) (although "Na" represents the element sodium, so they took the wrong part of the acronym).
- Dominic Tarr wrote Chloride as a compatibility layer between various NaCl implementations.
- In 2020 the project standardized on [Sodium-Universal](https://github.com/sodium-friends/sodium-universal) for consistency.

## Support

Chloride has been used and tested in a variety of cryptography modules. It's one of the essential SSB modules.

  * [private-box](https://github.com/auditdrivencrypto/private-box) write a shortish message to multiple recipients.
  * [pull-box-stream](https://github.com/dominictarr/pull-box-stream) encrypt (every byte in) a one-way stream.
  * [secret-handshake](https://github.com/dominictarr/secret-handshake) create an authenticated private channel to a public key.

## License

MIT
