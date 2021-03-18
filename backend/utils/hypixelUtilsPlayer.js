const ranks = {
  "VIP": "&a[VIP]",
  "VIP_PLUS": "&a[VIP&6+&a]",
  "MVP": "&b[MVP]",
  "MVP_PLUS": "&b[MVP&COLOR+&b]",
  "SUPERSTAR": "&PPC[MVP&COLOR++&PPC]",
  "HELPER": "&1[HELPER]",
  "YOUTUBER": "&c[&fYOUTUBE&c]",
  "MOD": "&2[MOD]",
  "ADMIN": "&c[ADMIN]",
}

const rankColors = {
  RED: "c",
  GOLD: "6",
  GREEN: "a",
  YELLOW: "e",
  LIGHT_PURPLE: "d",
  WHITE: "f",
  BLUE: "9",
  DARK_GREEN: "2",
  DARK_RED: "4",
  CYAN: "3",
  DARK_PURPLE: "5",
  DARK_GREY: "8",
  BLACK: "0"
}

const plusplusColors = {
  GOLD: "6",
  AQUA: "b"
}

module.exports.formatPlayer = (data) => {
  let clean = {};
  clean.uuid = data.uuid;
  clean.firstLogin = new Date(data.firstLogin * 1000).toISOString();
  clean.lastLogin = new Date(data.lastLogin * 1000).toISOString();
  clean.displayName = data.displayname;
  let networkExp = data.networkExp;

  clean.networkLevel = (Math.sqrt((2 * networkExp) + 30625) / 50) - 2.5

  clean.networkExp = networkExp;

  clean.achievementPoints = data.achievementPoints;
  clean.karma = data.karma;
  clean.mcVersion = data.mcVersionRp;

  clean.packageRank = data.packageRank;
  clean.newPackageRank = data.newPackageRank;
  clean.monthlyPackageRank = data.monthlyPackageRank;
  clean.rankPlusColor = data.rankPlusColor;
  clean.monthlyRankColor = data.monthlyRankColor;
  clean.rank = data.rank;
  cleanrank = "";
  cleancolor = "";
  if (clean.packageRank) {
    cleanrank = clean.packageRank
  }
  if (clean.newPackageRank) {
    cleanrank = clean.newPackageRank
  }
  if (clean.monthlyPackageRank && clean.monthlyPackageRank != "NONE") {
    cleanrank = clean.monthlyPackageRank
  }
  let cleanpluspluscolor;
  if (clean.rankPlusColor || clean.monthlyRankColor) {
    cleancolor = clean.rankPlusColor 
    cleancolor = rankColors[cleancolor] || rankColors.RED
    cleanpluspluscolor = plusplusColors[clean.monthlyRankColor] || plusplusColors["default"]
  }
  if (clean.rank) {
    cleanrank = clean.rank
  }
  clean.fullrank = cleanrank
  let r = ranks[cleanrank] || "&7"
  clean.prefix = r.replace("COLOR", cleancolor).split("PPC").join(cleanpluspluscolor);;



  clean.oldNames = [];
  data.knownAliases.forEach((alias) => {
    if (alias != clean.displayName) {
      clean.oldNames.push(alias);
    }
  });
  clean.achievements = {};

  data.achievementsOneTime.forEach((achievement) => {
    let gameMode = achievement.split("_")[0];
    let achievementName = achievement.split("_");
    achievementName.shift();
    achievementName = achievementName.join("_");
    if (!clean.achievements[gameMode]) {
      clean.achievements[gameMode] = [];
    }
    clean.achievements[gameMode].push(achievementName);
  });
  clean.info = {};
  for (let key in data.achievements) {
    let value = data.achievements[key]
    let gameMode = key.split("_")[0];
    let achievementName = key.split("_");
    achievementName.shift();
    achievementName = achievementName.join("_");
    if (!clean.info[gameMode]) {
      clean.info[gameMode] = {};
    }
    clean.info[gameMode][achievementName] = value;
  }
  clean.stats = {};
  let wb = data.stats.Bedwars.wins_bedwars || 0
  let wd = data.stats.Duels.wins || 0
  let ws = data.stats.SkyWars.wins || 0
  let wt = data.stats.TNTGames.wins || 0
  let whg = data.stats.HungerGames.wins || 0
  let wMCGO = data.stats.MCGO.wins || 0
  let wmm = data.stats.MurderMystery.wins || 0
  let wuhc = data.stats.UHC.wins || 0
  let ww3 = data.stats.Walls3.wins || 0
  clean.totalWins =  [wb, wd, ws, wt, whg, wMCGO, wmm, wuhc, ww3].reduce((a, b) => a + b, 0)
  let lb = data.stats.Bedwars.losses_bedwars || 0
  let ld = data.stats.Duels.losses || 0
  let ls = data.stats.SkyWars.losses || 0
  let lt = data.stats.TNTGames.losses || 0
  let lhg = data.stats.HungerGames.losses || 0
  let lMCGO = data.stats.MCGO.losses || 0
  let lmm = data.stats.MurderMystery.losses || 0
  let luhc = data.stats.UHC.losses || 0
  let lw3 = data.stats.Walls3.losses || 0
  clean.totalLosses =  [lb, ld, ls, lt, lhg, lMCGO, lmm, luhc, lw3].reduce((a, b) => a + b, 0)
  return clean;
};
