const express = require("express");
const router = express.Router();
const clashOfClansAPI = "https://api.clashofclans.com/v1";
const TOKEN = process.env.CLASH_OF_CLANS_TOKEN;
const {
  fetchFrom,
  sanitazeTag,
  getLimitQuery,
} = require("../utils/routesUtils");

//  root:   /api/v1/clash_of_clans/
router.get("/", (req, res) => {
  res.json({ msg: "Just testing Clash of clans" });
});

//players
router.get("/players/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await getPlayerByTag(tag);
  res.json(result);
});

//clans
router.get("/clans/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await getClanByTag(tag);
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

//functions
// Tag #P8LPUQ2U9
async function getPlayerByTag(playerTag) {
  playerTag = sanitazeTag(playerTag);
  const url = `${clashOfClansAPI}/players/${playerTag}`;
  return await fetchFrom(url, TOKEN);
}

async function getClanByTag(clanTag) {
  clanTag = sanitazeTag(clanTag);
  const url = `${clashOfClansAPI}/clans/${clanTag}`;
  return await fetchFrom(url, TOKEN);
}

async function getLocations(limit = 10) {
  const limitQuery = getLimitQuery(limit);
  const url = `${clashOfClansAPI}/locations${limitQuery}`;
  return await fetchFrom(url, TOKEN);
}

// locationId 32000006
async function getBestClansByLocation(locationId) {
  const url = `${clashOfClansAPI}/locations/${locationId}/rankings/clans?limit=10`;
  return await fetchFrom(url, TOKEN);
}

async function getBestPlayersByLocation(locationId) {
  const url = `${clashOfClansAPI}/locations/${locationId}/rankings/players?limit=10`;
  return await fetchFrom(url, TOKEN);
}

async function getClanByTag(clanTag) {
  clanTag = sanitazeTag(clanTag);
  const url = `${clashOfClansAPI}/clans/${clanTag}`;
  return await fetchFrom(url, TOKEN);
}

async function getLocations(limit = 10) {
  const limitQuery = getLimitQuery(limit);
  const url = `${clashOfClansAPI}/locations${limitQuery}`;
  return await fetchFrom(url, TOKEN);
}

// locationId 32000006
async function getBestClansByLocation(locationId) {
  const url = `${clashOfClansAPI}/locations/${locationId}/rankings/clans?limit=10`;
  return await fetchFrom(url, TOKEN);
}

async function getBestPlayersByLocation(locationId) {
  const url = `${clashOfClansAPI}/locations/${locationId}/rankings/players?limit=10`;
  return await fetchFrom(url, TOKEN);
}



module.exports = router;
