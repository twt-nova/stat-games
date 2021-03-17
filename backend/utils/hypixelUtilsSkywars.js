let modes = [
  {
    name: "Solo Normal",
    id: "solo_normal",
    important: true,
  },
  {
    name: "Solo Insane",
    id: "solo_insane",
    important: true,
  },
  {
    name: "Doubles Normal",
    id: "team_normal",
    important: true,
  },
  {
    name: "Doubles Insane",
    id: "team_insane",
    important: true,
  },
];

// Not wrapping lucky block or mega, too much work

let features = [
  {
    name: "Deaths",
    id: "deaths",
  },
  {
    name: "Final Deaths",
    id: "final_deaths",
  },
  {
    name: "Kills",
    id: "kills",
  },

  {
    name: "Wins",
    id: "wins",
  },
  {
    name: "Losses",
    id: "losses",
  },
];

modes.sort((a, b) => {
  return b.id.length - a.id.length;
});


// not copied from stack overflow, idk what your talking abotu
function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

const formatSkyWars = (data) => {
  let clean = {};

  for (const i in modes) {
    m = modes[i];
    clean[m.id] = { name: m.name, important: m.important };
  }
  clean.overall = { name: "Overall", important: true };

  for (let key in data) {
    let z;
    for (const i in modes) {
      let m = modes[i];
      if (key.endsWith(m.id)) {
        let o;
        for (let a in features) {
          let f = features[a];
          if (key.includes(f.id)) {
            clean[m.id][f.id] = {
              value: data[key],
              name: f.name,
            };
            o = true;
            break;
          }
        }
        z = true;
        break;
      }
    }
    if (!z) {
      clean.overall[key] = data[key];
    }
  }
  return clean;
};

module.exports = {
  formatSkyWars,
};
