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
    result = {
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    if (err.response) {
      const response = err.response;
      result = {
        status: response.status,
        data: response.data,
      };
    } else {
      //send generic message
      result = {
        status: 400,
        data: {
          title: "Internal server error",
          error: err,
        },
      };
    }
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
