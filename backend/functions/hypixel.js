const hypixelAPI = "https://api.hypixel.net";
const KEY = process.env.HYPIXEL_KEY;
const {
  getLimitQuery,
  ensureUUID,
  fetchFromWithParams,
} = require("../routes/utils/routesUtils");

const { formatBedwars } = require("../routes/utils/hypixelUtilsBedwars");
const { formatSkyWars } = require("../routes/utils/hypixelUtilsSkywars");
const { formatPlayer } = require("../routes/utils/hypixelUtilsPlayer");

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
    return data.success === true ? formatPlayer(data.player) : data;
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
