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
  const uuid = await ensureUUID(name);
  let player = await getPlayerByUUID(uuid);
  delete player.player.stats;
  res.json(player.player);
});
router.get("/player/:name/raw", async (req, res) => {
  const name = req.params.name;
  const uuid = await ensureUUID(name);
  let player = await getPlayerByUUID(uuid);
  res.json(player.player);
});

router.get("/player/:name/bedwars/", async (req, res) => {
  const name = req.params.name;
  const uuid = await ensureUUID(name);
  let player = await getPlayerByUUID(uuid);
  let data = formatBedwars(player.player.stats.Bedwars);
  res.json(data);
});

router.get("/player/:name/skywars/", async (req, res) => {
  const name = req.params.name;
  const uuid = await ensureUUID(name);
  let player = await hypixel.getPlayerByUUID(uuid);
  let data = formatSkyWars(player.player.stats.SkyWars);
  res.json(data);
});


module.exports = router;
