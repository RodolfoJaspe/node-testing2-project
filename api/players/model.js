const db = require("../../data/db-config")

function findAll(){
    return db("players")
}

async function createPlayer(player){
    const [id] = await db("players").insert(player)

    return findAll()
}

module.exports = {findAll,createPlayer}