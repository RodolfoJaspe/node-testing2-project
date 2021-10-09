const express = require("express")
const server = express()
const playersRouter = require("./players/router")

server.use(express.json())
server.use("/players", playersRouter)

module.exports = server