const express = require("express");
const clashRoyale = require("../functions/clashRoyale");
const router = express.Router();

//  root:/api/v1/clash_royale/

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

router.get("/players/:tag/cards", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashRoyale.getPlayerCardsByTag(tag);
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

module.exports = router;
