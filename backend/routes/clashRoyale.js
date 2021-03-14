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

async function getPlayerBattleLogByTag(tag) {
  if (tag.startsWith("#") || tag.startsWith("%23")) {
    tag = tag.replace("#", "%23");
  } else {
    tag = "%23" + tag;
  }
  const url = `${clashRoyaleAPI}/players/${tag}/battlelog`;
  return await fetchFrom(url, TOKEN);
}

async function getPlayerByTag(tag) {
  if (tag.startsWith("#") || tag.startsWith("%23")) {
    tag = tag.replace("#", "%23");
  } else {
    tag = "%23" + tag;
  }

  const url = `${clashRoyaleAPI}/players/${tag}`;
  return await fetchFrom(url, TOKEN);
}

async function getClanByTag(tag) {
  if (tag.startsWith("#") || tag.startsWith("%23")) {
    tag = tag.replace("#", "%23");
  } else {
    tag = "%23" + tag;
  }
  const url = `${clashRoyaleAPI}/clans/${tag}`;
  return await fetchFrom(url, TOKEN);
}

async function getClanWarByTag(tag) {
  if (tag.startsWith("#") || tag.startsWith("%23")) {
    tag = tag.replace("#", "%23");
  } else {
    tag = "%23" + tag;
  }
  const url = `${clashRoyaleAPI}/clans/${tag}/currentriverrace`;
  return await fetchFrom(url, TOKEN);
}

async function getClanLogByTag(tag) {
  if (tag.startsWith("#") || tag.startsWith("%23")) {
    tag = tag.replace("#", "%23");
  } else {
    tag = "%23" + tag;
  }
  const url = `${clashRoyaleAPI}/clans/${tag}/riverracelog`;
  return await fetchFrom(url, TOKEN);
}

async function getCards() {
  const url = `${clashRoyaleAPI}/cards`;
  return await fetchFrom(url, TOKEN);
}

module.exports = router;
