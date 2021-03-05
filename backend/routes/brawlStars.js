const express = require("express");
const router = express.Router();
const brawlStarsAPI = "https://api.brawlstars.com/v1";
const TOKEN = process.env.BRAWL_STARS_TOKEN;
const { fetchFrom } = require("../utils/routesUtils");
//    /api/v1/brawl_stars/
router.get("/", (req, res) => {
  res.json({ msg: "Brawl stars route" });
});

router.get("/brawler/:id", async (req, res) => {
  const id = req.params.id;
  const brawler = await getBrawlerById(id);
  res.json(brawler);
});

async function getBrawlerById(id) {
  if (id.startsWith("#") || id.startsWith("%23")) {
    id = id.replace("#", "%23")
  } else {
    id = "%23" + id
  }  const url = `${brawlStarsAPI}/brawlers/${id}`;
  return await fetchFrom(url, TOKEN);
}

module.exports = router;
