
if(process.env.CHLORIDE_JS)
  return module.exports = require('./browser')

try {
  var r = require //fool browserify
  module.exports = r('./bindings')
} catch (err) {
  console.error(err.message)
  module.exports = require('./browser')
}
