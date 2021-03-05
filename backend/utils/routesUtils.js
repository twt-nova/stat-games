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
module.exports = {
  fetchFrom,
};
