import { Pie } from "react-chartjs-2";
import styles from "../../styles/ClashRoyale.module.css";
import { defaults } from "react-chartjs-2";
import { useRef } from "react";

interface Badge {
  name: string;
  level: number;
  maxLevel: number;
  progress: number;
}

interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: null | boolean;
}

interface IconUrls {
  medium: string;
}

interface Card {
  name: string;
  id: number;
  level: number;
  maxLevel: number;
  count: number;
  iconUrls: IconUrls;
}

interface CurrentFavouriteCard {
  name: string;
  id: number;
  maxLevel: number;
  iconUrls: IconUrls;
}

interface LeagueStatistics {
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

interface Data {
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

interface PageProps {
  data: Data;
}

defaults.global.responsive = true;

export default function Data({ data }: PageProps) {
  return (
    <div className={styles.clashRoyaleData}>
      <div className={styles.clashRoyaleName}>
        <h2>{data.tag}</h2>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.clashRoyaleTrophies}>
        <p className={styles.clashRoyaleTowerLevel}>
          King Tower Level: <span>{data.expLevel}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Trophies: <span>{data.trophies}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Most Trophies: <span>{data.bestTrophies}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Win Ratio: <span>{(data.wins / data.battleCount).toFixed(2)}%</span>
        </p>
      </div>
      <Pie
        width={3}
        height={1}
        data={{
          labels: ["Wins", "Loses"],
          datasets: [
            {
              label: "Wins/Loses",
              data: [data.wins, data.losses],
              backgroundColor: [
                "rgba(127,255,0, 0.4)",
                "rgba(255, 99, 132, 0.5)",
              ],
              borderColor: ["rgba(127,255,0, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
      <div className={styles.clashRoyaleClan}>
        <p className={styles.clashRoyaleTowerLevel}>
          Clan Tag: <span>{data.clan.tag}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Clan Name: <span>{data.clan.name}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Role In Clan: <span>{data.role}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Badge Id: <span>{data.clan.badgeId}</span>
        </p>
      </div>
      <div className={styles.clashRoyaleArena}>
        <p className={styles.clashRoyaleTowerLevel}>
          Arena Id: <span>{data.arena.id}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Arena Name: <span>{data.arena.name}</span>
        </p>
      </div>
      <div className={styles.clashRoyaleArena}>
        <p className={styles.clashRoyaleTowerLevel}>
          Arena Id: <span>{data.arena.id}</span>
        </p>
        <p className={styles.clashRoyaleTowerLevel}>
          Arena Name: <span>{data.arena.name}</span>
        </p>
      </div>
    </div>
  );
}
