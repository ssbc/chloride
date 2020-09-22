# Chloride

Chloride is a Compatibility Layer (Cl) around [Sodium-Native](https://github.com/sodium-friends/sodium-universal).

## About

Chloride descends from Dan J. Bernstein's (djb) [NaCl](http://nacl.cr.yp.to/) library ("Networking And Cryptography Library",
not to be confused with the other NaCl, Google's Native Client). djb wrote NaCl, but did not maintain it, some ideas in the library (in particular the networking part) weren't really fully baked, and the best parts where taken and maintained as [libsodium](http://libsodium.org) (although "Na" represents the element sodium, so they took the wrong part of the acronym).

Chloride is a compatibility layer that gives you bindings to [libsodium](https://npm.im/sodium) when used in Node.js,
and either the [libsodium-wrappers](https://npm.im/libsodium-wrappers) which is libsodium compiled to JavaScript via [emscripten](http://kripken.github.io/emscripten-site/) if performance is important but code size isn't. Or, if you are not doing many crypto operations, it uses [tweetnacl](https://www.npmjs.com/package/tweetnacl), which is a handwritten port, and 1/10 the size of libsodium-wrappers.

## Support

Chloride has been used and tested in a variety of cryptography modules. It's one of the essential SSB modules.

- [private-box](https://github.com/auditdrivencrypto/private-box): write a shortish message to multiple recipients.
- [pull-box-stream](https://github.com/dominictarr/pull-box-stream): encrypt (every byte in) a one-way stream.
- [secret-handshake](https://github.com/dominictarr/secret-handshake): create an authenticated private channel to a public key.

This is probably everything you need, NaCl doesn't have a very large API, so this is probably everything.

## License

MIT
