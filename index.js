
if(process.env.CHLORIDE_JS)
  return module.exports = require('./browser')

try {
  var r = require //fool browserify
  module.exports = r('./bindings')
} catch (err) {
  console.error('error loading sodium bindings:', err.message)
  console.error('falling back to javascript version.')
  module.exports = require('./browser')
}
