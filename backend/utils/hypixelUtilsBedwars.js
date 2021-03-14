let modes = [
  {
    name: "Solo",
    id: "eight_one",
    important: true,
  },
  {
    name: "Doubles",
    id: "eight_two",
    important: true,
  },
  {
    name: "3v3v3v3",
    id: "four_three",
    important: true,
  },
  {
    name: "4v4v4v4",
    id: "four_four",
    important: true,
  },
  {
    name: "4v4",
    id: "two_four",
    important: false,
  },
  {
    name: "Voidless Doubles",
    id: "eight_two_voidless",
    important: false,
  },
  {
    name: "Voidless Fours",
    id: "four_four_voidless",
    important: false,
  },
  {
    name: "Armed Doubles",
    id: "eight_two_armed",
    important: false,
  },
  {
    name: "Armed Fours",
    id: "four_four_armed",
    important: false,
  },
  {
    name: "Rush Doubles",
    id: "eight_two_rush",
    important: false,
  },
  {
    name: "Rush Fours",
    id: "four_four_rush",
    important: false,
  },
  {
    name: "Lucky Block Doubles",
    id: "eight_two_lucky",
    important: false,
  },
  {
    name: "Lucky Block Fours",
    id: "four_four_lucky",
    important: false,
  },
  {
    name: "Castle",
    id: "castle",
    important: false,
  },
  {
    name: "1st 4v4v4v4 Tourney",
    id: "tourney_bedwars4s_1",
    important: false,
  },
  {
    name: "Practice",
    id: "practice",
    important: false,
  },
];

let features = [
  {
    name: "Winstreak",
    id: "winstreak",
  },
  {
    name: "Beds Lost",
    id: "beds_lost",
  },
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
    name: "Final Kills",
    id: "final_kills",
  },
  {
    name: "Wins",
    id: "wins",
  },
  {
    name: "Losses",
    id: "losses",
  },
  {
    name: "Games played",
    id: "games_played",
  },
  {
    name: "Beds Lost",
    id: "beds_lost",
  },
  {
    name: "Beds Broken",
    id: "beds_broken",
  },
  {
    name: "Void Deaths",
    id: "void_deaths",
  },
  {
    name: "Resources Collected",
    id: "resources_collected",
  },
  {
    name: "Iron Collected",
    id: "iron_resources_collected",
  },
  {
    name: "Gold Collected",
    id: "gold_resources_collected",
  },
  {
    name: "Diamonds Collected",
    id: "diamond_resources_collected",
  },
  {
    name: "Emeralds Collected",
    id: "emerald_reasources_collected",
  },
  {
    name: "Items Purchased",
    id: "items_purchased",
  },
];

modes.sort((a, b) => {
  return b.id.length - a.id.length 
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

const formatBedwars = (data) => {
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
      if (key.startsWith(m.id)) {
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
        if (!o && m.id == "practice") {
          for (let f in data[key]) {
            item = data[key][f];
            clean[m.id][f] = {
              value: item,
              name: titleCase(f.replace(m.id, "").split("_").join(" ")),
            };
          }
        }

        z = true;
        break;
      }
    }
    if (!z) {
      clean.overall[key] = data[key]
    }
  }
  return clean;
};

module.exports = {
  formatBedwars,
};
