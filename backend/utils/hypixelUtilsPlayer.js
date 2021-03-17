const ranks = {
  "VIP": "&a[VIP]",
  "VIP_PLUS": "&a[VIP&6+&a]",
  "MVP": "&b[MVP]",
  "MVP_PLUS": "&b[MVP&COLOR+&b]",
  "MVP_PLUS_PLUS": "&6[MVP&COLOR++&6]",
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
  if (clean.rankPlusColor || clean.monthlyRankColor) {
    cleancolor = clean.monthlyRankColor || clean.rankPlusColor
    cleancolor = rankColors[cleancolor] || rankColors.RED
  }
  if (clean.rank) {
    cleanrank = clean.rank
  }
  clean.fullrank = cleanrank
  let r = ranks[cleanrank] || "&7"
  clean.prefix =  r.replace("COLOR", cleancolor);



  clean.oldNames = [];
  data.knownAliases.forEach((alias) => {
    if (alias != clean.displayName) {
      clean.oldNames.push(alias);
    }
  });
  clean.achivements = {};

  data.achievementsOneTime.forEach((achivement) => {
    let gameMode = achivement.split("_")[0];
    let achivementName = achivement.split("_");
    achivementName.shift();
    achivementName = achivementName.join("_");
    if (!clean.achivements[gameMode]) {
      clean.achivements[gameMode] = [];
    }
    clean.achivements[gameMode].push(achivementName);
  });
  clean.info = {};
  console.log(data)
  data.achievements.forEach((achivement) => {
    let gameMode = achivement.split("_")[0];
    let achivementName = achivement.split("_");
    achivementName.shift();
    achivementName = achivementName.join("_");
    if (!clean.info[gameMode]) {
      clean.info[gameMode] = [];
    }
    clean.info[gameMode].push(achivementName);
  })
  return clean;
};
