const express = require("express");
const router = express.Router();
const pubg = require("../functions/pubg");

//  root:/api/v1/pubg

router.get("/platforms", (req, res) => {
  const result = pubg.getPlatforms();
  res.status(result.status).json(result.data);
});
router.get("/gameModes", (req, res) => {
  const result = pubg.getGameModes();
  res.status(result.status).json(result.data);
});

// players
router.get("/players/name/:name", async (req, res) => {
  const name = req.params.name;
  const result = await pubg.getPlayerByName(name);
  res.status(result.status).json(result.data);
});

router.get("/players/name/list/:names", async (req, res) => {
  let names = req.params.names;
  let listOfNames = names.split(",");
  if (listOfNames.length > 10) listOfNames = listOfNames.slice(0, 10);
  names = listOfNames.join(",");
  const result = await pubg.getPlayerByName(names);
  res.status(result.status).json(result.data);
});

router.get("/players/:id", async (req, res) => {
  const playerId = req.params.id;
  const result = await pubg.getPlayerById(playerId);
  res.status(result.status).json(result.data);
});

// seasons
router.get("/seasons/", async (req, res) => {
  const result = await pubg.getSeasons();
  res.status(result.status).json(result.data);
});

router.get("/players/:playerId/seasons/:seasonsId", async (req, res) => {
  const playerId = req.params.playerId;
  const seasonsId = req.params.seasonsId;
  const result = await pubg.getPlayerSeasonStats(playerId, seasonsId);
  res.status(result.status).json(result.data);
});

//  player ranked stats from the season
router.get("/players/:playerId/seasons/:seasonsId/ranked", async (req, res) => {
  const playerId = req.params.playerId;
  const seasonsId = req.params.seasonsId;
  const result = await pubg.getPlayerRankedSeasonStats(playerId, seasonsId);
  res.status(result.status).json(result.data);
});

//  player ranked stats from the season
router.get(
  "/seasons/:seasonsId/gameMode/:gameMode/players/:playerId",
  async (req, res) => {
    const playerId = req.params.playerId;
    const gameMode = req.params.gameMode;
    const seasonsId = req.params.seasonsId;
    const result = await pubg.getPlayerSeasonStatsByGameMode(
      seasonsId,
      gameMode,
      playerId
    );
    res.status(result.status).json(result.data);
  }
);

//lifetime or overall stats
router.get("/players/:playerId/seasons/lifetime", async (req, res) => {
  const playerId = req.params.playerId;
  const result = await pubg.getPlayerLifeTimeStats(playerId);
  res.status(result.status).json(result.data);
});

router.get(
  "/seasons/lifetime/gameMode/:gameMode/players/:playerId",
  async (req, res) => {
    const gameMode = req.params.gameMode;
    const playerId = req.params.playerId;
    const result = await pubg.getPlayerLifeTimeStatsByGameMode(
      gameMode,
      playerId
    );
    res.status(result.status).json(result.data);
  }
);

//weapon mastery
router.get("/players/:playerId/weapon_mastery", async (req, res) => {
  const playerId = req.params.playerId;
  const result = await pubg.getPlayerWeaponMastery(playerId);
  res.status(result.status).json(result.data);
});

router.get("/leaderboards/:seasonId/:gameMode", async (req, res) => {
  const seasonId = req.params.seasonId;
  const gameMode = req.params.gameMode;
  const result = await pubg.getlLeaderboardsByGameMode(gameMode);
  res.status(result.status).json(result.data);
});

module.exports = router;
