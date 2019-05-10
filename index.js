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
    const { Schema, Types } = mongoose
    server.expose('mongoose', mongoose)
    server.expose('Types', Types)
    server.expose('Schema', Schema)
    // TODO delete expose of ObjectId
    server.expose('ObjectId', mongoose.Types.ObjectId)
    server.expose('ObjectIdType', Schema.Types.ObjectId)
    server.expose('translateId', mongoose.Types.ObjectId)
    server.expose('connections', connections)
    server.expose('connection', connections['default'])
  }
}
