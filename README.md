# Chloride

Chloride is a Cryptography Library (Cl) for javascript enviroments.

## About

Chloride descends from Dan J. Bernstein's (djb) [NaCl](http://nacl.cr.yp.to/) library ("Networking And Cryptography Library",
not to be confused with the other NaCl, Google's Native Client). djb wrote NaCl, but did not maintain it, some ideas in the library (in particular the networking part) weren't really fully baked, and the best parts where taken and maintained as [libsodium](http://libsodium.org) (although "Na" represents the element sodium, so they took the wrong part of the acronym).

Chloride is a compatibility layer that gives you bindings to [libsodium](https://npm.im/sodium) when used in Node.js,
and either the [libsodium-wrappers](https://npm.im/libsodium-wrappers) which is libsodium compiled to JavaScript via [emscripten](http://kripken.github.io/emscripten-site/) if performance is important but code size isn't.  Or, if you are not doing many crypto operations, it uses [tweetnacl](https://www.npmjs.com/package/tweetnacl), which is a handwritten port, and 1/10 the size of libsodium-wrappers.

## Support

We have wrapped and tested enough functions for our crypto modules to work.

  * [private-box](https://github.com/auditdrivencrypto/private-box): write a shortish message to multiple recipients.
  * [pull-box-stream](https://github.com/dominictarr/pull-box-stream): encrypt (every byte in) a one-way stream.
  * [secret-handshake](https://github.com/dominictarr/secret-handshake): create an authenticated private channel to a public key.

This is probably everything you need, NaCl doesn't have a very large API, so this is probably everything.

## Do I need performance or code size?

NaCl was written with performance in mind, unfortunately a lot of that is lost when you compile it to JavaScript. However, Chloride still has the fastest _JavaScript_ elliptic curve signature that I am aware of (and asymmetric crypto is much slower than symmetric, so this is always the weak point).

If you are only doing a symmetric ciphers (`crypto_box`) or a signature or two, then performance is probably not a problem. If you are verifying _many_ signatures, performance _may_ be a problem. Bear in mind that an asymetric operation (`sign`, `verify`, `scalarmult`, `keygen`) is usually 50 times slower than a symmetric operation, for instance a hash.

See [sodiumperf](https://github.com/dominictarr/sodiumperf) performance comparisons.

To run Chloride in performance mode, load it like this:

```js
const chloride = require('chloride')
```

To run in low size mode:

```js
const chloride = require('chloride/small')
```

This only applies to enviroments that only support JavaScript.  If you are running this on the server and could compile libsodium, then you have the same fast crypto either way.

## License

MIT
