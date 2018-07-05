const mongoose = require('mongoose')

exports.plugin = {
  pkg: require('./package.json'),
  register: async function (server, options = {}) {
    const connections = {}
    Object.keys(options).forEach(key => {
      const item = options[key]
      const args = typeof item === 'string' ? [item] : item
      const connection = mongoose.createConnection(args[0], args[1])
      connections[key] = connection
    })
    const { Schema } = mongoose
    const { ObjectId } = mongoose.Types
    server.expose('Schema', Schema)
    server.expose('ObjectId', ObjectId)
    server.expose('mongoose', mongoose)
    server.expose('connections', connections)
    server.expose('connection', connections['default'])
  }
}
