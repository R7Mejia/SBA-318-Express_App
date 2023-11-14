const express = require('express');
const router = express.Router();

const players = require('../data/players')

//getting all the players
router.get("/", (req, res) => {
  res.json(players);
});

//accessing one player /using a route parameter
router.get("/:number", (req, res, next) => {
    const player = players.find((p)=> p.number == req.params.number)
    if (player) res.json(player);
    else next("Ay caramba, player not found!!!")
})

//********Create a new user and push it through using POSTMAN
router.post("/", (req, res) => {
  const newUser = {
    number: req.body.number,
    name: req.body.name,
    position: req.body.position,
    team: req.body.team,
    country: req.body.country,
    img: req.body.img,
  };

  players.push(newUser);
  res.json(newUser);
});

//Delete
router.delete("/:number", (req, res, next) => {
  const player = players.find((p, i) => {
    if (p.number == req.params.number) {
      players.splice(i, 13);//dinamically deleted using POSTMAN
      return true;
    }
  });
  if (player) res.json(players);
  else next()
})

module.exports = router;