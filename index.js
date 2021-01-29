if(process.env.CHLORIDE_JS) {
  module.exports = require('./browser')
} else {
  try {
    module.exports = require('./bindings')
  } catch (err) {
    console.log('error loading sodium bindings:', err.message)
    console.log('falling back to javascript version.')
    module.exports = require('./browser')
  }
}
