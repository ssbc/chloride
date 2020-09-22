const sodiumChloride = require('./sodium-chloride')

try {
  module.exports = sodiumChloride(require('sodium-native'))
} catch (e) {
  module.exports = sodiumChloride(require('sodium-javascript'))
}
