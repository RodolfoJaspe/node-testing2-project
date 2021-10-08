const db = require("../../data/db-config")

function findAll(){
    return db("players")
}

module.exports = {findAll}