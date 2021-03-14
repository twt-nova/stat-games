const clashRoyaleAPI = "https://api.clashroyale.com/v1";
const TOKEN = process.env.CLASH_ROYALE_TOKEN;
const {
  fetchFrom,
  sanitazeTag,
  getLimitQuery,
} = require("../utils/routesUtils");

module.exports = {
  getPlayerByTag: async function (playerTag) {
    playerTag = sanitazeTag(playerTag);
    const url = `${clashRoyaleAPI}/players/${playerTag}`;
    return await fetchFrom(url, TOKEN);
  },

  getClanByTag: async function (clanTag) {
    clanTag = sanitazeTag(clanTag);
    const url = `${clashRoyaleAPI}/players/${clanTag}`;
    return await fetchFrom(url, TOKEN);
  },

  getCards: async function (limit = 10) {
    const limitQuery = getLimitQuery(limit);
    const url = `${clashRoyaleAPI}/cards${limitQuery}`;
    return await fetchFrom(url, TOKEN);
  },

  getPlayerBattleLogByTag: async function (playerTag) {
    playerTag = sanitazeTag(playerTag);
    const url = `${clashRoyaleAPI}/players/${playerTag}/battlelog`;
    let result = await fetchFrom(url, TOKEN);
    result.data = this.filterStartingTrophies(result.data);
    return result;
  },

  filterStartingTrophies: function (data) {
    for (const battelog of data) {
      battelog.team = battelog.team.filter((t) => {
        if (t.startingTrophies > 0) return t;
      });
    }
    return data;
  },

  getPlayerCardsByTag: async function (playerTag) {
    playerTag = sanitazeTag(playerTag);
    const url = `${clashRoyaleAPI}/players/${playerTag}/battlelog`;
    return await fetchFrom(url, TOKEN);
  },

  getClanWarByTag: async function (clanTag) {
    clanTag = sanitazeTag(clanTag);
    const url = `${clashRoyaleAPI}/clans/${clanTag}/currentriverrace`;
    return await fetchFrom(url, TOKEN);
  },

  getClanLogByTag: async function (clanTag) {
    clanTag = sanitazeTag(clanTag);
    const url = `${clashRoyaleAPI}/clans/${clanTag}/riverracelog`;
    return await fetchFrom(url, TOKEN);
  },
};
