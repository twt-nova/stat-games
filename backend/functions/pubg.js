const { fetchFrom } = require("../routes/utils/routesUtils");
const {
  platforms,
  platformRegions,
  gameModes,
} = require("./staticData/pubgData");
//const pubgAPI = "https://api.pubg.com/shards/steam";
const pubgAPI = "https://api.pubg.com/shards";
const pubgAPIBase = "https://api.pubg.com";
const TOKEN = process.env.PUBG_TOKEN;
const axios = require("axios").default;

function joinUrl(...params) {
  let resultUrl = params.join("/");
  return resultUrl;
}

function getPlatforms() {
  return {
    status: 200,
    data: platforms,
  };
}
function getGameModes() {
  return {
    status: 200,
    data: gameModes,
  };
}
function getPlatformRegions() {
  return {
    status: 200,
    data: platformRegions,
  };
}

//test name: WackyJacky101
async function getPlayerByName(name, platform = platforms.steam) {
  const url = joinUrl(pubgAPI, platform, `players?filter[playerNames]=${name}`);
  return await fetchFrom(url, TOKEN);
}

// player id: account.c0e530e9b7244b358def282782f893af
async function getPlayerById(playerId, platform = platforms.steam) {
  const url = joinUrl(pubgAPI, platform, "players", playerId);
  return await fetchFrom(url, TOKEN);
}

//sample season id: division.bro.official.pc-2018-09
async function getSeasons(platform = platforms.steam) {
  return await fetchFrom(`${pubgAPI}/${platform}/seasons`, TOKEN);
}

async function getPlayerSeasonStats(
  playerId,
  seasonId,
  platform = platforms.steam
) {
  const url = `${pubgAPI}/${platform}/players/${playerId}/seasons/${seasonId}?filter[gamepad]=false`;
  return await fetchFrom(url, TOKEN);
}

async function getPlayerRankedSeasonStats(
  playerId,
  seasonId,
  platform = platforms.steam
) {
  const url = `${pubgAPI}/${platform}/players/${playerId}/seasons/${seasonId}/ranked`;
  return await fetchFrom(url, TOKEN);
}

// get player(s) season stats by gamemode
async function getPlayerSeasonStatsByGameMode(
  seasonId,
  gameMode,
  playerIds,
  platform = platforms.steam
) {
  const url = `${pubgAPI}/${platform}/seasons/${seasonId}/gameMode/${gameMode}/players?filter[playerIds]=${playerIds}&filter[gamepad]=false`;
  return await fetchFrom(url, TOKEN);
}

// overall season stats
async function getPlayerLifeTimeStats(playerId, platform = platforms.steam) {
  const url = `${pubgAPI}/${platform}/players/${playerId}/seasons/lifetime?filter[gamepad]=false`;
  return await fetchFrom(url, TOKEN);
}

// same as above but filter by gameMode
async function getPlayerLifeTimeStatsByGameMode(
  gameMode,
  playerId,
  platform = platforms.steam
) {
  const url = `${pubgAPI}/${platform}/seasons/lifetime/gameMode/${gameMode}/players??filter[playerIds]=${playerId}&filter[gamepad]=false`;
  return await fetchFrom(url, TOKEN);
}

//  game matches
// test match id: 8a6f3b0e-a3fd-4f46-a1bc-7bf28dea4e13
async function getMatchById(matchId, platform = platforms.steam) {
  const url = `${pubgAPI}/${platform}/matches/${matchId}`;
  return await fetchFrom(url, TOKEN);
}

//  weapon_mastery
async function getPlayerWeaponMastery(playerId, platform = platforms.steam) {
  const url = `${pubgAPI}/${platform}/players/${playerId}/weapon_mastery`;
  return await fetchFrom(url, TOKEN);
}

async function getlLeaderboardsByGameMode(
  seasonId,
  gameMode,
  region = platformRegions.pc.America
) {
  const url = `${pubgAPI}/${region}/leaderboards/${seasonId}/${gameMode}`;
  return await fetchFrom(url, TOKEN);
}

//tournaments
//test id: as-pgist09
async function getTournaments() {
  const url = `${pubgAPIBase}/tournaments`;
  return await fetchFrom(url, TOKEN);
}

async function getTournamentById(id) {
  const url = `${pubgAPIBase}/tournaments/${id}`;
  return await fetchFrom(url, TOKEN);
}

module.exports = {
  getPlatforms,
  getPlatformRegions,
  getGameModes,
  getPlayerByName,
  getPlayerById,
  getSeasons,
  getPlayerSeasonStats,
  getPlayerRankedSeasonStats,
  getPlayerSeasonStatsByGameMode,
  getPlayerLifeTimeStats,
  getPlayerLifeTimeStatsByGameMode,
  getPlayerWeaponMastery,
  getlLeaderboardsByGameMode,
  getTournaments,
  getTournamentById,
};
