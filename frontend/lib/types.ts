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