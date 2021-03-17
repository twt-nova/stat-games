const brawlStarsAPI = "https://api.brawlstars.com/v1";
const TOKEN = process.env.BRAWL_STARS_TOKEN;
const {
  fetchFrom,
  sanitazeTag,
  getLimitQuery,
} = require("../utils/routesUtils");

module.exports = {
  //brawlers
  getABrawlers: async function (limit = 10) {
    const limitQuery = getLimitQuery(limit);
    const url = `${brawlStarsAPI}/brawlers${limitQuery}`;
    return await fetchFrom(url, TOKEN);
  },
  //id: 16000000
  getBrawlerById: async function (id) {
    const url = `${brawlStarsAPI}/brawlers/${id}`;
    return await fetchFrom(url, TOKEN);
  },
  //players
  //tag #228JU0UYC
  getPlayerByTag: async function (playerTag) {
    playerTag = sanitazeTag(playerTag);
    const url = `${brawlStarsAPI}/players/${playerTag}`;
    return await fetchFrom(url, TOKEN);
  },

  getPlayerBattleLogByTag: async function (playerTag) {
    playerTag = sanitazeTag(playerTag);
    const url = `${brawlStarsAPI}/players/${playerTag}/battlelog`;
    return await fetchFrom(url, TOKEN);
  },

  //rankings
  getRankingOf: async function (countryCode) {
    const url = `${brawlStarsAPI}/rankings/${countryCode}/players?limit=30`;
    return await fetchFrom(url, TOKEN);
  },
};
