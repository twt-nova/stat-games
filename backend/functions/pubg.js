const { fetchFrom } = require("../utils/routesUtils");
//CHANGE LATER
const pubgAPI = "https://api.pubg.com/shards/steam";
const TOKEN = process.env.PUBG_TOKEN;
const axios = require("axios").default;

const platforms = {
  steam: "steam",
  playstation: "psn",
  xbox: "xbox",
};

// game modes: solo, solo-fpp, duo, duo-fpp, squad, squad-fpp
const gameModes = {
  solo: "solo",
  solo_fpp: "solo-fpp",
  duo: "duo",
  duo_fpp: "duo-fpp",
  squad: "squad",
  squad_fpp: "squad-fpp",
};

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

//test name: WackyJacky101
async function getPlayerByName(name) {
  const url = `${pubgAPI}/players?filter[playerNames]=${name}`;
  return await fetchFrom(url, TOKEN);
}

// player id: account.c0e530e9b7244b358def282782f893af
async function getPlayerById(playerId) {
  const url = `${pubgAPI}/players/${playerId}`;
  return await fetchFrom(url, TOKEN);
}

//sample season id: division.bro.official.pc-2018-09
async function getSeasons() {
  return await fetchFrom(`${pubgAPI}/seasons`, TOKEN);
}

async function getPlayerSeasonStats(playerId, seasonId, gamepadFilter = false) {
  const url = `${pubgAPI}/players/${playerId}/seasons/${seasonId}?filter[gamepad]=${gamepadFilter}`;
  return await fetchFrom(url, TOKEN);
}

async function getPlayerRankedSeasonStats(playerId, seasonId) {
  const url = `${pubgAPI}/players/${playerId}/seasons/${seasonId}/ranked`;
  return await fetchFrom(url, TOKEN);
}

// get player(s) season stats by gamemode
async function getPlayerSeasonStatsByGameMode(seasonId, gameMode, playerIds) {
  const url = `${pubgAPI}/seasons/${seasonId}/gameMode/${gameMode}/players?filter[playerIds]=${playerIds}&filter[gamepad]=false`;
  return await fetchFrom(url, TOKEN);
}

// overall season stats
async function getPlayerLifeTimeStats(playerId, gamepadFilter = false) {
  const url = `${pubgAPI}/players/${playerId}/seasons/lifetime?filter[gamepad]=${gamepadFilter}`;
  return await fetchFrom(url, TOKEN);
}

// same as above but filter by gameMode
async function getPlayerLifeTimeStatsByGameMode(gameMode, playerId) {
  const url = `${pubgAPI}/seasons/lifetime/gameMode/${gameMode}/players??filter[playerIds]=${playerId}&filter[gamepad]=false`;
  return await fetchFrom(url, TOKEN);
}

//  game matches
async function getMatchById(matchId) {
  const url = `${pubgAPI}/matches/${matchId}`;
  return await fetchFrom(url, TOKEN);
}

//  weapon_mastery
async function getPlayerWeaponMastery(playerId) {
  const url = `${pubgAPI}/players/${playerId}/weapon_mastery`;
  return await fetchFrom(url, TOKEN);
}

async function getlLeaderboardsByGameMode(seasonId, gameMode) {
  const url = `${pubgAPI}/leaderboards/${seasonId}/${gameMode}`;
  return await fetchFrom(url, TOKEN);
}

async function getTournamentsMathces(tournamentId) {
  const url = `${pubgAPI}/tournaments/${tournamentId}`;
  await fetchFrom(url, TOKEN);
}

module.exports = {
  getPlatforms,
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
};
