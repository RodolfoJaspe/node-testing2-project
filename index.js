require("dotenv").config()

const port = process.env.port

const server = require("./api/server")

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})