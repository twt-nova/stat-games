const express = require("express");
const clashRoyale = require("../functions/clashRoyale");
const router = express.Router();

//  root:/api/v1/clash_royale/
router.get("/", async (req, res) => {
  const result = {
    status: 200,
    game: {
      name: "Clash Royale",
      id: "clash_royale",
    },
  };
});

//cards
router.get("/cards/:limit", async (req, res) => {
  const limit = req.params.limit;
  const result = await clashRoyale.getCards(limit);
  res.status(result.status).json(result);
});

// players
//tag: 99C8RR2YG
router.get("/players/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashRoyale.getPlayerByTag(tag);
  res.status(result.status).json(result.data);
});

router.get("/players/:tag/battles", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashRoyale.getPlayerBattleLogByTag(tag);
  res.status(result.status).json(result.data);
});

// clans
router.get("/clan/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashRoyale.getClanByTag(tag);
  res.status(result.status).json(result.data);
});

router.get("/clan/:tag/current_war", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashRoyale.getClanWarByTag(tag);
  res.status(result.status).json(result.data);
});

router.get("/clan/:tag/war_log", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashRoyale.getClanLogByTag(tag);
  res.status(result.status).json(result.data);
});

router.get("/locations", async (req, res) => {
  const result = await clashRoyale.getAllLocations(100);
  res.status(result.status).json(result.data);
});
router.get("/locations/:limit", async (req, res) => {
  const limit = req.params.limit;
  const result = await clashRoyale.getAllLocations(limit);
  res.status(result.status).json(result.data);
});
router.get("/locations/:id", async (req, res) => {
  const id = req.params.id;
  const result = await clashRoyale.getLocationByID(id);
  res.status(result.status).json(result.data);
});
router.get("/locations/:id/players", async (req, res) => {
  const id = req.params.id;
  const result = await clashRoyale.getLocationTopPlayersByID(id);
  res.status(result.status).json(result.data);
});
router.get("/locations/:id/clans", async (req, res) => {
  const id = req.params.id;
  const result = await clashRoyale.getLocationTopClansByID(id);
  res.status(result.status).json(result.data);
});
router.get("/locations/:id/clan_wars", async (req, res) => {
  const id = req.params.id;
  const result = await clashRoyale.getLocationTopClanWarByID(id);
  res.status(result.status).json(result.data);
});

module.exports = router;
