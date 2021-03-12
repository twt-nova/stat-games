const express = require("express");
const router = express.Router();
const clashOfClans = require("../functions/clashOfClans");

//  root:/api/v1/clash_of_clans/

//players
router.get("/players/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashOfClans.getPlayerByTag(tag);
  res.status(result.status).json(result.data);
});

//clans
router.get("/clans/:tag", async (req, res) => {
  const tag = req.params.tag;
  const result = await clashOfClans.getClanByTag(tag);
  res.status(result.status).json(result.data);
});

//locations
router.get("/locations/:limit", async (req, res) => {
  const limit = req.params.limit;
  const result = await clashOfClans.getLocations(limit);
  res.status(result.status).json(result.data);
});

router.get("/locations/:locationId/rankings/clans", async (req, res) => {
  const locationId = req.params.locationId;
  const result = await clashOfClans.getBestClansByLocation(locationId);
  res.status(result.status).json(result.data);
});

router.get("/locations/:locationId/rankings/players", async (req, res) => {
  const locationId = req.params.locationId;
  const result = await clashOfClans.getBestPlayersByLocation(locationId);
  res.status(result.status).json(result.data);
});

module.exports = router;
