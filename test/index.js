const tape = require("tape");
var JSONB = require("json-buffer");
var tests = JSONB.parse(require("./data.json"));
var expectedApi = require("./api.json");
const sodiumChloride = require("../src/sodium-chloride");

const test = (name) => {
  const sodium = sodiumChloride(require(name));
  tape(name, (assert) => {
    expectedApi.forEach(function (method) {
      assert.equal(typeof sodium[method], "function");
    });

    assert.throws(function () {
      sodium.randombytes(32);
    });

    var b = Buffer.alloc(32);
    assert.equal(sodium.randombytes(b), null);

    var b2 = Buffer.from(b);
    sodium.randombytes(b2);
    assert.notDeepEqual(b, b2);

    var keys = sodium.crypto_sign_keypair();
    assert.ok(Buffer.isBuffer(keys.publicKey));
    assert.ok(Buffer.isBuffer(keys.secretKey));

    var keys2 = sodium.crypto_box_keypair();
    assert.ok(Buffer.isBuffer(keys2.publicKey));
    assert.ok(Buffer.isBuffer(keys2.secretKey));

    //now test the rest of the interface...

    var isArray = Array.isArray;

    function apply(ary) {
      var name = ary[0];
      var fn = sodium["crypto_" + name];
      if (!fn) throw new Error("method: crypto_" + name + " does not exist");

      var ret = fn.apply(
        null,
        ary.slice(1).map(function (e) {
          return isArray(e) ? apply(e) : e;
        })
      );
      return ret;
    }

    tests.forEach(function (op) {
      var op_name = op[0];
      if (op_name === "deepEquals") {
        assert.deepEqual(apply(op[1]), op[2]);
      } else if (op_name === "throws") {
        apply(op[1]);
      } else throw new Error("unknown operation name:" + op_name);
    });

    assert.end();
  });
};

["sodium-native", "sodium-javascript"].map(test);
