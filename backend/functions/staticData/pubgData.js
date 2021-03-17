const platforms = {
  steam: "steam",
  kakao: "kakao",
  playstation: "psn",
  xbox: "xbox",
  stadia: "stadia",
  console: "console",
};

// game modes: solo, solo-fpp, duo, duo-fpp, squad, squad-fpp
const gameModes = {
  solo: "solo",
  solo_fpp: "solo-fpp",
  duo: "duo",
  duo_fpp: "duo-fpp",
  squad: "squad",
  squad_fpp: "squad-fpp",
};

const platformRegions = {
  pc: {
    Asia: "pc-as",
    Europe: "pc-eu",
    Japan: "pc-jp",
    Kakao: "pc-kakao",
    Korea: "pc-krjp",
    America: "pc-na North",
    Oceania: "pc-oc",
    Russia: "pc-ru",
    SouthAndCentralAmerica: "pc-sa",
    SouthEastAsia: "pc-sea",
    Tournaments: "pc-tournament",
  },
  playstation: {
    Asia: "psn-as",
    Europe: "psn-eu",
    NorthAmerica: "psn-na",
    Oceania: "psn-oc",
  },
  xbox: {
    Asia: "xbox-as",
    Europe: "xbox-eu",
    NorthAmerica: "xbox-na",
    Oceania: "xbox-oc",
    SouthAmerica: "xbox-sa",
  },
};

module.exports = { platforms, gameModes, platformRegions };
