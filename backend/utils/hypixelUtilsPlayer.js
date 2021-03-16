module.exports.formatPlayer = (data) => {
  clean = {};
  clean.uuid = data.uuid;
  clean.firstLogin = new Date(data.firstLogin * 1000).toISOString();
  clean.lastLogin = new Date(data.lastLogin * 1000).toISOString();
  clean.displayName = data.displayname;
  let networkExp = data.networkExp;

  console.log(data)
  console.log(data.networkExp)
  console.log((Math.sqrt((2 * Number(networkExp)) + 30625) / 50) - 2.5)
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
  clean.prefix = data.prefix;
  


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
  return clean;
};
