                      const express = require("express");
                      const router = express.Router();
                      const clashRoyaleAPI = "https://api.clashroyale.com/v1";
                      const TOKEN = process.env.CLASH_ROYALE_TOKEN;
const {
  fetchFrom,
  sanitazeTag,
  getLimitQuery,
} = require("../utils/routesUtils");

//  root:   /api/v1/clash_royale/
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

// players
//tag: 99C8RR2YG
router.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await getPlayerByTag(tag);
  res.json(result);
});

router.get("/player/:tag/battles", async (req, res) => {
  const tag = req.params.tag;
  const result = await getPlayerBattleLogByTag(tag);
  res.json(result);
});

router.get("/player/:tag/cards", async (req, res) => {
  const tag = req.params.tag;
  const result = await getPlayerCardsByTag(tag);
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


//locations
router.get("/locations/:limit", async (req, res) => {
  const limit = req.params.limit;
  const result = await getLocations(limit);
  res.json(result);
});

router.get("/locations/:locationId/rankings/clans", async (req, res) => {
  const locationId = req.params.locationId;
  const result = await getBestClansByLocation(locationId);
  res.json(result);
});

router.get("/locations/:locationId/rankings/players", async (req, res) => {
  const locationId = req.params.locationId;
  const result = await getBestPlayersByLocation(locationId);
  res.json(result);
});

async function getLocations(limit = 10) {
  const limitQuery = getLimitQuery(limit);
  const url = `${clashRoyaleAPI}/locations${limitQuery}`;
  return await fetchFrom(url, TOKEN);
}

// locationId 32000006
async function getBestClansByLocation(locationId) {
  const url = `${clashRoyaleAPI}/locations/${locationId}/rankings/clans?limit=10`;
  return await fetchFrom(url, TOKEN);
}

async function getBestPlayersByLocation(locationId) {
  const url = `${clashRoyaleAPI}/locations/${locationId}/rankings/players?limit=10`;
  return await fetchFrom(url, TOKEN);
}


async function getCards(limit = 10) {
  const limitQuery = getLimitQuery(limit);
  const url = `${clashRoyaleAPI}/cards${limitQuery}`;
  return await fetchFrom(url, TOKEN);
}

async function getPlayerBattleLogByTag(playerTag) {
  playerTag = sanitazeTag(playerTag);
  const url = `${clashRoyaleAPI}/players/${playerTag}/battlelog`;
  return await fetchFrom(url, TOKEN);
}

async function getPlayerCardsByTag(playerTag) {
  playerTag = sanitazeTag(playerTag);
  const url = `${clashRoyaleAPI}/players/${playerTag}/battlelog`;
  return await fetchFrom(url, TOKEN);
}

async function getPlayerByTag(playerTag) {
  playerTag = sanitazeTag(playerTag);
  const url = `${clashRoyaleAPI}/players/${playerTag}`;
  return await fetchFrom(url, TOKEN);
}

async function getClanByTag(clanTag) {
  clanTag = sanitazeTag(clanTag);
  const url = `${clashRoyaleAPI}/players/${clanTag}`;
  return await fetchFrom(url, TOKEN);
}

async function getClanWarByTag(clanTag) {
  clanTag = sanitazeTag(clanTag);
  const url = `${clashRoyaleAPI}/clans/${clanTag}/currentriverrace`;
  return await fetchFrom(url, TOKEN);
}

async function getClanLogByTag(clanTag) {
  clanTag = sanitazeTag(clanTag);
  const url = `${clashRoyaleAPI}/clans/${clanTag}/riverracelog`;
  return await fetchFrom(url, TOKEN);
}

module.exports = router;
