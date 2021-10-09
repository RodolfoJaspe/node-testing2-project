const router = require("express").Router()
const Players = require("./model")

router.get("/", (req,res) => {
    Players.findAll()
        .then(players => {
            res.status(200).json(players)
        })
        .catch(err => {
            res.status(500).json({message:err})
        })
})

router.delete("/:player_id", async (req,res) => {
    const deletedPlayer = await Players.deletePlayer(req.params.player_id)
    res.status(200).json(deletedPlayer)
})

module.exports = router