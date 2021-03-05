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
    status : "Ok",
    game : "clash_royale"
  });
})

//tag: 99C8RR2YG
router.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await getPlayerByTag(tag);
  res.json(result);
});


async function getPlayerByTag(tag) {
  if (tag.startsWith("#") || tag.startsWith("%23")) {
    tag = tag.replace("#", "%23")
  } else {
    tag = "%23" + tag
  }
  const url = `${clashRoyaleAPI}/players/${dctag}`;
  return await fetchFrom(url, TOKEN);
}

async function getCards() {
  const url = `${clashRoyaleAPI}/cards`;
  return await fetchFrom(url, TOKEN);
}

module.exports = router;
