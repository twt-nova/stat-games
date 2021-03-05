const express = require("express");
const router = express.Router();
const clashOfClansAPI = "https://api.clashofclans.com/v1";
const TOKEN = process.env.CLASH_OF_CLANS_TOKEN;
const { fetchFrom } = require("../utils/routesUtils");

//    /api/v1/clash_of_clans/
router.get("/", (req, res) => {
  res.json({ msg: "Just testing Clash of clans" });
});

// P8LPUQ2U9
router.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await getPlayerByTag(tag);
  res.json(result);
});

async function getPlayerByTag(tag) {
  const url = `${clashOfClansAPI}/players/%${tag}`;
  return await fetchFrom(url, TOKEN);
}

module.exports = router;
