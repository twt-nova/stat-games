const hypixelAPI = "https://api.hypixel.net/";
const KEY = process.env.HYPIXEL_KEY;
const {
  fetchFrom,
  getLimitQuery,
  ensureUUID,
  fetchFromWithParams,
} = require("../utils/routesUtils");

const { formatBedwars } = require("../utils/hypixelUtilsBedwars");
const { formatSkyWars } = require("../utils/hypixelUtilsSkywars");

moduel.exports.getPlayerByUUID = async (uuid) => {
  uuid = await ensureUUID(uuid);
  const url = `${hypixelAPI}/player`;
  return await fetchFromWithParams(url, { key: KEY, uuid: uuid });
};
