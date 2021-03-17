const express = require("express");
const router = express.Router();
const pubg = require("../functions/pubg");
const { trimParameters } = require("../utils/routesUtils");
//  root:/api/v1/pubg

//  get general api info
router.get("/platforms", (req, res) => {
  const result = pubg.getPlatforms();
  res.status(result.status).json(result.data);
});

router.get("/platforms/regions", (req, res) => {
  const result = pubg.getPlatformRegions();
  res.status(result.status).json(result.data);
});

router.get("/gameModes", (req, res) => {
  const result = pubg.getGameModes();
  res.status(result.status).json(result.data);
});

// players

//  get player by name

router.get("/players/name/:name/platform/:platform", async (req, res) => {
  const name = req.params.name;
  const platform = req.params.platform;
  const result = await pubg.getPlayerByName(name, platform || null);
  res.status(result.status).json(result.data);
});

//  get players by their names

router.get("/players/name/list/:names/platform/:platform", async (req, res) => {
  let names = req.params.names;
  const platform = req.params.platform;
  names = trimParameters(names);
  const result = await pubg.getPlayerByName(names, platform || null);
  res.status(result.status).json(result.data);
});

//  get player by id

router.get("/players/:id/platform/:platform", async (req, res) => {
  const playerId = req.params.id;
  const platform = req.params.platform;
  const result = await pubg.getPlayerById(playerId, platform || null);
  res.status(result.status).json(result.data);
});

// get seasons

router.get("/seasons/platform/:platform", async (req, res) => {
  const platform = req.params.platform;
  const result = await pubg.getSeasons(platform);
  res.status(result.status).json(result.data);
});

//  get player season stats

router.get(
  "/players/:playerId/seasons/:seasonsId/platform/:platform",
  async (req, res) => {
    const playerId = req.params.playerId;
    const seasonsId = req.params.seasonsId;
    const platform = req.params.platform;
    const result = await pubg.getPlayerSeasonStats(
      playerId,
      seasonsId,
      platform || null
    );
    res.status(result.status).json(result.data);
  }
);

//  get player ranked stats from the season

router.get(
  "/players/:playerId/seasons/:seasonsId/ranked/platform/:platform",
  async (req, res) => {
    const playerId = req.params.playerId;
    const seasonsId = req.params.seasonsId;
    const platform = req.params.platform;
    const result = await pubg.getPlayerRankedSeasonStats(
      playerId,
      seasonsId,
      platform
    );
    res.status(result.status).json(result.data);
  }
);

//  player ranked stats from the season

router.get(
  "/seasons/:seasonsId/gameMode/:gameMode/players/:playerId/platform/:platform",
  async (req, res) => {
    const playerId = req.params.playerId;
    const gameMode = req.params.gameMode;
    const seasonsId = req.params.seasonsId;
    const platform = req.params.platform;
    const result = await pubg.getPlayerSeasonStatsByGameMode(
      seasonsId,
      gameMode,
      playerId,
      platform
    );
    res.status(result.status).json(result.data);
  }
);

//  lifetime or overall stats

router.get(
  "/players/:playerId/seasons/lifetime/platform/:platform",
  async (req, res) => {
    const playerId = req.params.playerId;
    const platform = req.params.platform;
    const result = await pubg.getPlayerLifeTimeStats(playerId, platform);
    res.status(result.status).json(result.data);
  }
);

//  lifetime or overall stats by gamemode

router.get(
  "/seasons/lifetime/gameMode/:gameMode/players/:playerId/platform/:platform",
  async (req, res) => {
    const gameMode = req.params.gameMode;
    const playerId = req.params.playerId;
    const platform = req.params.platform;

    const result = await pubg.getPlayerLifeTimeStatsByGameMode(
      gameMode,
      playerId,
      platform
    );
    res.status(result.status).json(result.data);
  }
);

//  get player weapon mastery

router.get(
  "/players/:playerId/weapon_mastery/platform/:platform",
  async (req, res) => {
    const playerId = req.params.playerId;
    const platform = req.params.platform;
    const result = await pubg.getPlayerWeaponMastery(playerId, platform);
    res.status(result.status).json(result.data);
  }
);

//  leaderboards by platform region

router.get(
  "/leaderboards/:seasonId/:gameMode/platformRegion/:platformRegion:",
  async (req, res) => {
    const seasonId = req.params.seasonId;
    const gameMode = req.params.gameMode;
    const platformRegion = req.params.platformRegion;
    const result = await pubg.getlLeaderboardsByGameMode(
      gameMode,
      platformRegion
    );
    res.status(result.status).json(result.data);
  }
);

// tournaments

router.get("/tournaments", async (req, res) => {
  const result = await pubg.getTournaments();
  res.status(result.status).json(result.data);
});

router.get("/tournaments/:id", async (req, res) => {
  const id = req.params.id;
  const result = await pubg.getTournamentById(id);
  res.status(result.status).json(result.data);
});

module.exports = router;
