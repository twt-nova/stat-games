const express = require("express");
const router = express.Router();

const hypixel = require("../functions/hypixel");

router.get("/", (req, res) => {
  res.json({
    status: "Ok",
    game: "Hypixel",
  });
});

router.get("/player/:name/", async (req, res) => {
  const name = req.params.name;
  let player = await hypixel.getPlayerCleanByUUID(name);
  if (!player.displayName) {
    res.status(404).send(player)
  }
  res.json(player);
});

router.get("/player/:name/raw", async (req, res) => {
  const name = req.params.name;
  let player = await hypixel.getPlayerByUUID(name);
  if (!player.displayname) {
    res.status(404).send(player)
  }
  res.json(player);
});

router.get("/player/:name/bedwars/", async (req, res) => {
  const name = req.params.name;
  let data = await hypixel.getBedwarsByUUID(name);
  if (!data.overall.wins_bedwars) {
    res.status(404).send(data)
  }
  res.json(data);
});

router.get("/player/:name/skywars/", async (req, res) => {
  const name = req.params.name;
  let data = await hypixel.getSkyWarsByUUID(name);
  if (!data.overall.solo_normal.kills) {
    res.status(404).send(data)
  }
  res.json(data);
});

router.get("/player/:name/guild/", async (req, res) => {
  const name = req.params.name;
  let data = await hypixel.getGuildByUUID(name);
  if (!data.name) {
    res.status(404).send(data)
  }
  res.json(data);
});


module.exports = router;
