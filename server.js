const express = require('express')
const path = require('path')

const server = express()

let rel = (file) => path.join(__dirname, file)

server.use(require('connect-livereload')())
server.use(express.static(rel('.')))
server.use(express.static('dist/public'))

server.get('/', (req, res) => {
  res.sendFile(rel('index.html'))
})

module.exports = server
