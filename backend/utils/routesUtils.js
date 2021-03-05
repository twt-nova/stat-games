const axios = require("axios");

async function fetchFrom(url, token) {
  let result;
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    const response = await axios.get(url, config);
    result = response.data;
  } catch (err) {
    result = { error: "Internal server error" };
    console.error(err);
  }
  return result;
}
function sanitazeTag(tag) {
  if (tag.startsWith("#")) tag = tag.replace("#", "%23");
  if (!tag.startsWith("%23")) tag = "%23" + tag;
  return tag;
}

function getLimitQuery(limit) {
  return limit > 0 ? `?limit=${limit}` : "";
}

module.exports = {
  fetchFrom,
  sanitazeTag,
  getLimitQuery,
};
