if (process.env.CHLORIDE_JS) {
  module.exports = require('./browser-small')
} else {
  try {
    module.exports = require('./bindings')
  } catch (err) {
    console.warn('error loading sodium bindings:', err.message)
    console.warn('falling back to javascript version.')
    module.exports = require('./browser-small')
  }
}
