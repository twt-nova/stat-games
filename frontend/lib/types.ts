export interface Badge {
  name: string;
  level: number;
  maxLevel: number;
  progress: number;
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: null | boolean;
}

export interface IconUrls {
  medium: string;
}

export interface Card {
  name: string;
  id: number;
  level: number;
  maxLevel: number;
  count: number;
  iconUrls: IconUrls;
}

export interface CurrentFavouriteCard {
  name: string;
  id: number;
  maxLevel: number;
  iconUrls: IconUrls;
}

export interface LeagueStatistics {
  currentSeason: { rank: number; trophies: number; bestTrophies: number };
  previousSeason: {
    id: string;
    rank: number;
    trophies: number;
    bestTrophies: number;
  };
  bestSeason: {
    id: string;
    rank: number;
    trophies: number;
  };
}

export interface Data {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  role: string;
  donations: number;
  donationsReceived: number;
  totalDonations: number;
  warDayWins: number;
  clanCardsCollected: number;
  clan: { tag: string; name: string; badgeId: number };
  arena: { id: number; name: string };
  leagueStatistics: LeagueStatistics;
  badges: Badge[];
  achievements: Achievement[];
  cards: Card[];
  currentDeck: Card[];
  currentFavouriteCard: CurrentFavouriteCard;
  starPoints: number;
}

export interface BattleLog {
  type: string;
  battleTime: string;
  isLadderTournament: boolean;
  arena: {
    id: number;
    name: string;
  };
  gameMode: {
    id: number;
    name: number;
  };
  deckSelection: string;
  team: [
    {
      tag: string;
      name: string;
      startingTrophies: number;
      trophyChange: number;
      crowns: number;
      kingTowerHitPoints: number;
      princessTowersHitPoints: number[];
      clan: {
        tag: string;
        name: string;
        badgeId: number;
      };
      cards: [
        {
          name: string;
          id: number;
          level: number;
          starLevel: number;
          maxLevel: number;
          iconUrls: {
            medium: string;
          };
        }
      ];
    }
  ];
  opponent: [
    {
      tag: string;
      name: string;
      startingTrophies: number;
      trophyChange: number;
      crowns: number;
      kingTowerHitPoints: number;
      princessTowersHitPoints: number[];
      clan: {
        tag: string;
        name: string;
        badgeId: number;
      };
      cards: [
        {
          name: string;
          id: number;
          level: number;
          starLevel: number;
          maxLevel: number;
          iconUrls: {
            medium: string;
          };
        }
      ];
    }
  ];
  isHostedMatch: boolean;
}

interface Member {
  tag: string;
  name: string;
  role: string;
  lastSeen: string;
  expLevel: number;
  trophies: number;
  arena: {
    id: number;
    name: string;
  };
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  clanChestPoints: number;
}

export interface ClanData {
  tag: string;
  name: string;
  type: string;
  description: string;
  badgeId: number;
  clanScore: number;
  clanWarTrophies: number;
  location: {
    id: number;
    name: string;
    isCountry: boolean;
  };
  requiredTrophies: number;
  donationsPerWeek: number;
  clanChestStatus: string;
  clanChestLevel: number;
  clanChestMaxLevel: number;
  members: number;
  memberList: Member[];
}

interface CocAch {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string;
  village: string;
}

interface CocLabel {
  id: number;
  name: string;
  iconUrls: {
    small: string;
    medium: string;
  };
}

interface CocSame {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
}

export interface CocData {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel: number;
  versusTrophies: number;
  bestVersusTrophies: number;
  versusBattleWins: number;
  donations: number;
  donationsReceived: number;
  clan?: {
    tag: string;
    name: string;
    clanLevel: number;
    badgeUrls: {
      small: string;
      large: string;
      medium: string;
    };
  };
  league?: {
    id: number;
    name: string;
    iconUrls: {
      small: string;
      tiny: string;
      medium: string;
    };
  };
  legendStatistics: {
    legendTrophies: number;
    bestSeason: {
      id: string;
      rank: number;
      trophies: number;
    };
    currentSeason: {
      trophies: number;
    };
  };
  achievements: CocAch[];
  versusBattleWinCount: number;
  labels: CocLabel[];
  troops: CocSame[];
  heroes: CocSame[];
  spells: CocSame[];
}

interface CocClanMember {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league: {
    id: number;
    name: string;
    iconUrls: {
      small: string;
      tiny: string;
      medium: string;
    };
  };
  trophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

export interface CocClanData {
  tag: string;
  name: string;
  type: string;
  description: string;
  location: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
  };
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  warTies: number;
  warLosses: number;
  isWarLogPublic: boolean;
  warLeague: {
    id: number;
    name: string;
  };
  members: number;
  memberList: CocClanMember[];
  labels: [
    {
      id: number;
      name: string;
      iconUrls: {
        small: string;
        medium: string;
      };
    }
  ];
}

export interface BSPlayer {
  tag: string;
  name: string;
  nameColor: string;
  icon: { id: number };
  trophies: number;
  highestTrophies: number;
  highestPowerPlayPoints: number;
  expLevel: number;
  expPoints: number;
  isQualifiedFromChampionshipChallenge: boolean;
  "3vs3Victories": number;
  soloVictories: number;
  duoVictories: number;
  bestRoboRumbleTime: number;
  bestTimeAsBigBrawler: number;
  club: { tag: string; name: string };
  brawlers: [
    {
      id: number;
      name: string;
      power: number;
      rank: number;
      trophies: number;
      highestTrophies: number;
      starPowers: [
        {
          id: number;
          name: string;
        }
      ];
      gadgets: [
        {
          id: number;
          name: string;
        }
      ];
    }
  ];
}

export interface BSBattleLog {
  battleTime: string;
  event: {
    id: number;
    mode: string;
    map: string;
  };
  battle: {
    mode: string;
    result: string;
    duration: number;
    starPlayer?: boolean;
    teams: [
      [
        {
          tag: string;
          name: string;
          brawler: {
            id: number;
            name: string;
            power: number;
            trophies: number;
          };
        }
      ],
      [
        {
          tag: string;
          name: string;
          brawler: {
            id: number;
            name: string;
            power: number;
            trophies: number;
          };
        }
      ]
    ];
  };
}
