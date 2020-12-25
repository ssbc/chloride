if(process.env.CHLORIDE_JS) {
  module.exports = require('./browser')
} else {
  try {
    module.exports = require('./bindings')
  } catch (err) {
    console.error('error loading sodium bindings:', err.message)
    console.error('falling back to javascript version.')
    module.exports = require('./browser')
  }
}
