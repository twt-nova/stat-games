const express = require("express");
const router = express.Router();
const brawlStars = require("../functions/brawlStars");

//  root:/api/v1/brawl_stars/

//brawlers
router.get("/brawler", async (req, res) => {
  const brawler = await brawlStars.getABrawlers();
  res.status(brawler.status).json(brawler.data);
});

router.get("/brawler/:id", async (req, res) => {
  const id = req.params.id;
  const brawler = await brawlStars.getBrawlerById(id);
  res.status(brawler.status).json(brawler.data);
});

//players
router.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await brawlStars.getPlayerByTag(tag);
  res.status(result.status).json(result.data);
});

router.get("/player/:tag/battles", async (req, res) => {
  const tag = req.params.tag;
  const result = await brawlStars.getPlayerBattleLogByTag(tag);
  res.status(result.status).json(result.data);
});

//rankings
router.get("/rankings/:country", async (req, res) => {
  const country = req.params.country;
  const result = await brawlStars.getRankingOf(country);
  res.status(result.status).json(result.data);
});
module.exports = router;
