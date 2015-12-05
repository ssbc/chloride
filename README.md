# chloride

Chloride is a Cryptography Library (Cl) for javascript enviroments.

## about

Chloride decends from Dan J. Bernstein's [NaCl](http://nacl.cr.yp.to/) library ("Networking And Cryptography Library",
not to be confused with the other NaCl, google's Native Client)
djb wrote nacl, but did not maintain it, some ideas in the library (in particular the networking part)
wasn't really fully baked, and the best parts where taken and maintained as [libsodium](http://libsodium.org)
(although "Na" represents the element sodium, so they took the wrong part of the acronym)

Currently, chloride is a compatibility layer between the node bindings to [libsodium](https://npm.im/sodium), and [libsodium-wrappers](https://npm.im/libsodium-wrappers) which is libsodium compiled to javascript via [emscripten](http://kripken.github.io/emscripten-site/)

## support

I have wrapped and tested enough functions for my crypto modules to work.

  * [private-box](https://github.com/auditdrivencrypto/private-box) write a shortish message to multiple recipients.
  * [pull-box-stream](https://github.com/dominictarr/pull-box-stream) encrypt (every byte in) a one-way stream.
  * [secret-handshake](https://github.com/dominictarr/secret-handshake) create an authenticated private channel to a public key.

This is probably everything you need, nacl doesn't have a very large api, so this is probably everything.

## performance

nacl was written with performance in mind, unfortunately a lot of that is lost when you compile it to javascript.
However, chloride still has the fastest _javascript_ elliptic curve signature that I am aware of.
(and asymmetric crypto is much slower than symmetric, so this is always the weak point)

See [sodiumperf](https://github.com/dominictarr/sodiumperf) performance comparisons.

## License

MIT
