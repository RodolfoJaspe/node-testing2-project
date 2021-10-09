const db = require("../../data/db-config")

function findAll(){
    return db("players")
}

function findById(player_id){
    return db("players").where({player_id}).first()
}

async function createPlayer(player){
    const [id] = await db("players").insert(player)
    return findById(id)
}

async function deletePlayer (player_id){
    const player = await findById(player_id) 
    await db("players").where({player_id}).del()
    return player
}

module.exports = {findAll,createPlayer,findById,deletePlayer}