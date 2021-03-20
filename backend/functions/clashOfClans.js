const clashOfClansAPI = "https://api.clashofclans.com/v1";
const TOKEN = process.env.CLASH_OF_CLANS_TOKEN;
const {
  fetchFrom,
  sanitazeTag,
  getLimitQuery,
} = require("../routes/utils/routesUtils");
module.exports = {
  // Tag #P8LPUQ2U9
  getPlayerByTag: async function (playerTag) {
    playerTag = sanitazeTag(playerTag);
    const url = `${clashOfClansAPI}/players/${playerTag}`;
    return await fetchFrom(url, TOKEN);
  },

  getClanByTag: async function (clanTag) {
    clanTag = sanitazeTag(clanTag);
    const url = `${clashOfClansAPI}/clans/${clanTag}`;
    return await fetchFrom(url, TOKEN);
  },

  getLocations: async function (limit = 10) {
    const limitQuery = getLimitQuery(limit);
    const url = `${clashOfClansAPI}/locations${limitQuery}`;
    return await fetchFrom(url, TOKEN);
  },

  // locationId 32000006
  getBestClansByLocation: async function (locationId) {
    const url = `${clashOfClansAPI}/locations/${locationId}/rankings/clans?limit=10`;
    return await fetchFrom(url, TOKEN);
  },

  getBestPlayersByLocation: async function (locationId) {
    const url = `${clashOfClansAPI}/locations/${locationId}/rankings/players?limit=30`;
    return await fetchFrom(url, TOKEN);
  },
};
