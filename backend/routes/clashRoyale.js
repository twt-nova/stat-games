const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const clashRoyaleAPI = "https://api.clashroyale.com/v1";
const TOKEN = process.env.CLASH_ROYALE_TOKEN;
const { fetchFrom } = require("../utils/routesUtils");

//      /api/v1/clash_royale/
router.get("/cards", async (req, res) => {
  const result = await getCards();
  res.json(result);
});

router.get("/", async (req, res) => {
  res.json({
    status: "Ok",
    game: "clash_royale",
  });
});

//tag: 99C8RR2YG
// players
//tag: 99C8RR2YG
router.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag;
  console.log(tag);
  const result = await getPlayerByTag(tag);
  res.json(result);
});

router.get("/player/:tag/battles", async (req, res) => {
  const tag = req.params.tag;
  const result = await getPlayerBattleLogByTag(tag);
  res.json(result);
});

// clans
router.get("/clan/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await getClanByTag(tag);
  res.json(result);
});

router.get("/clan/:tag/current_war", async (req, res) => {
  const tag = req.params.tag;
  const result = await getClanWarByTag(tag);
  res.json(result);
});

router.get("/clan/:tag/war_log", async (req, res) => {
  const tag = req.params.tag;
  const result = await getClanLogByTag(tag);
  res.json(result);
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
