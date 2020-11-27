const express = require("express");
const fs = require('fs');
const router = express.Router();

const pokedex = fs.readFileSync('pokedex-20201127.json');
const users = JSON.parse(pokedex);

router.get("/pokemons", (req, res) => {
  return res.json(users);
});

router.get("/pokemons/:id", (req, res) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.json(user);
});


router.post('/items', (req, res) => {
  users.push({
      name: req.body.name,
      id: ++id
    });
    return res.json({ message: "Created" });
})


router.delete("/items/:id", (req, res) => {
  const itemindex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(itemindex, 1);
  return res.json({ message: "Deleted" });
})

module.exports = router;