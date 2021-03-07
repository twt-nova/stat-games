const express = require("express");
const router = express.Router();
const hypixelAPI = "https://api.hypixel.net";
const KEY = process.env.HYPIXEL_KEY;
const {
  fetchFrom,
  getLimitQuery,
  ensureUUID,
  fetchFromWithParams,
} = require("../utils/routesUtils");

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

router.get("/player/:name/bedwars/", async (req, res) => {
  const name = req.params.name;
  const uuid = await ensureUUID(name);
  let player = await getPlayerByUUID(uuid);
  res.json(player.player.stats.Bedwars);
});

router.get("/player/:name/skywars/", async (req, res) => {
  const name = req.params.name;
  const uuid = await ensureUUID(name);
  let player = await getPlayerByUUID(uuid);
  res.json(player.player.stats.SkyWars);
});

async function getPlayerByUUID(uuid) {
  const url = `${hypixelAPI}/player`;
  return await fetchFromWithParams(url, { key: KEY, uuid: uuid });
}

module.exports = router;
