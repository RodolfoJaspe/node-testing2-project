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

module.exports = router