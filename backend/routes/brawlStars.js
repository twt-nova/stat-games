const express = require("express");
const router = express.Router();
const brawlStarsAPI = "https://api.brawlstars.com/v1";
const TOKEN = process.env.BRAWL_STARS_TOKEN;
const {
  fetchFrom,
  sanitazeTag,
  getLimitQuery,
} = require("../utils/routesUtils");

// root: /api/v1/brawl_stars/

router.get("/", (req, res) => {
  res.json({ msg: "Brawl stars route" });
});

//brawlers
router.get("/brawler", async (req, res) => {
  const brawler = await getABrawlers();
  res.json(brawler);
});

router.get("/brawler/:id", async (req, res) => {
  const id = req.params.id;
  const brawler = await getBrawlerById(id);
  res.json(brawler);
});

//players
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

//rankings
router.get("/rankings/:country", async (req, res) => {
  const country = req.params.country;
  const brawler = await getRankingOf(country);
  res.json(brawler);
});

//functions
async function getABrawlers(limit = 10) {
  const limitQuery = getLimitQuery(limit);
  const url = `${brawlStarsAPI}/brawlers${limitQuery}`;
  return await fetchFrom(url, TOKEN);
}

// id: 16000000
async function getBrawlerById(id) {
  const url = `${brawlStarsAPI}/brawlers/${id}`;
  return await fetchFrom(url, TOKEN);
}

//tag #228JU0UYC
async function getPlayerByTag(playerTag) {
  playerTag = sanitazeTag(playerTag);
  const url = `${brawlStarsAPI}/players/${playerTag}`;
  return await fetchFrom(url, TOKEN);
}

async function getPlayerBattleLogByTag(playerTag) {
  playerTag = sanitazeTag(playerTag);
  const url = `${brawlStarsAPI}/players/${playerTag}/battlelog`;
  return await fetchFrom(url, TOKEN);
}

//https://api.brawlstars.com/v1/rankings/AL/players?limit=10
async function getRankingOf(countryCode) {
  const url = `${brawlStarsAPI}/rankings/${countryCode}/players?limit=10`;
  return await fetchFrom(url, TOKEN);
}

module.exports = router;
