const express = require('express');
const router = express.Router();

const players = require('../data/players')

//getting all the players
router.get("/", (req, res) => {
  //const players = require("../data/players");
  res.json(players);
});

//accessing one player
router.get("/:number", (req, res, next) => {
    const player = players.find((p)=> p.number == req.params.number)
    if (player) res.json(player);
    else next("Ay caramba, player not found!!!")
})


module.exports = router;