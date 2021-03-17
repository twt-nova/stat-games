const axios = require("axios");

async function fetchFrom(url, token = "") {
  let result;
  try {
    const config = getDynamicConfig(token);
    const response = await axios.get(url, config);
    result = {
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    const errResponse = err.response;
    result = {
      status: errResponse ? errResponse.status : 404,
      data: err,
    };
    console.error("SERVER_ERROR:", err);
  }
  return result;
}

function getDynamicConfig(token = "") {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  if (token !== "") {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
}

function trimParameters(parameter) {
  if (parameter.includes(",")) {
    let listOfValues = parameter.split(",");
    if (listOfValues.length > 10) listOfValues = listOfValues.slice(0, 10);
    let values = listOfValues.join(",");
    return values;
  }
  return parameter;
}

// ensures a name or uuid is the uuid
async function ensureUUID(name) {
  if (checkUUID(name)) {
    return name;
  }
  const url = "https://api.mojang.com/users/profiles/minecraft/" + name;
  result = await fetchFromWithoutAuth(url);
  return result.id;
}

function sanitazeTag(tag) {
  if (tag.startsWith("#")) tag = tag.replace("#", "%23");
  if (!tag.startsWith("%23")) tag = "%23" + tag;
  return tag;
}

function getLimitQuery(limit) {
  return limit > 0 ? `?limit=${limit}` : "";
}

function checkUUID(uuid) {
  // this regex was copied from internet, yes. 
  const reg = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
  return uuid.match(reg);
}

function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return "?" + ret.join("&");
}

async function fetchFromWithParams(url, params) {
  url = url + encodeQueryData(params);
  let result;
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await axios.get(url, config);
    result = response.data;
  } catch (err) {
    const errResponse = err.response;
    result = {
      status: errResponse ? errResponse.status : 404,
      data: err,
    };
    console.error("SERVER_ERROR:", err);
  }
  return result;
}

module.exports = {
  fetchFrom,
  trimParameters,
  sanitazeTag,
  getLimitQuery,
  checkUUID,
  ensureUUID,
  fetchFromWithParams,
};
