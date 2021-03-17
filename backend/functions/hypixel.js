const hypixelAPI = "https://api.hypixel.net";
const KEY = process.env.HYPIXEL_KEY;
const {
  getLimitQuery,
  ensureUUID,
  fetchFromWithParams,
} = require("../utils/routesUtils");

const { formatBedwars } = require("../utils/hypixelUtilsBedwars");
const { formatSkyWars } = require("../utils/hypixelUtilsSkywars");
const { formatPlayer } = require("../utils/hypixelUtilsPlayer");

module.exports = {
  getPlayerByUUID: async function (uuid) {
    uuid = await ensureUUID(uuid);
    const url = `${hypixelAPI}/player`;
    const data = await fetchFromWithParams(url, { key: KEY, uuid: uuid });
    return data.success ? data.player : data;
  },
  getPlayerCleanByUUID: async function(uuid) {
    uuid = await ensureUUID(uuid);
    const url = `${hypixelAPI}/player`;
    const data = await fetchFromWithParams(url, { key: KEY, uuid: uuid });
    return data.success ? formatPlayer(data.player) : data;
  },
  getBedwarsByUUID: async function (uuid) {
    uuid = await ensureUUID(uuid);
    const url = `${hypixelAPI}/player`;
    const data = await fetchFromWithParams(url, { key: KEY, uuid: uuid });
    return data.success ? formatBedwars(data.player.stats.Bedwars) : data;
  },
  getSkyWarsByUUID: async function (uuid) {
    uuid = await ensureUUID(uuid);
    const url = `${hypixelAPI}/player`;
    const data = await fetchFromWithParams(url, { key: KEY, uuid: uuid });
    return formatSkyWars(data.player.stats.SkyWars);
  },
};
