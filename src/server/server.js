const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const server = express()

let rel = (file) => path.join(__dirname, '../../', file)

server.use(favicon(rel('./favicon.ico')))
server.use(express.static(rel('./dist/')))
server.use(express.static(rel('./dist/static/')))

let port = 3000

if (process.argv.length > 2 && process.argv[2] === '--port') {
  port = parseInt(process.argv[3])
}

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})