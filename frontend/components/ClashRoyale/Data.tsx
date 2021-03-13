import { Pie, Line } from "react-chartjs-2";
import styles from "../../styles/ClashRoyale.module.css";
import { defaults } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Axios from "axios";
import { url } from "../../lib/url";

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

interface BattleLog {
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

defaults.global.responsive = true;

export default function Data({ data }: PageProps) {
  const [battleLog, setBattleLog] = useState<BattleLog[]>([]);
  useEffect(() => {
    const dataL: string | null = localStorage.getItem("battleLog");
    if (dataL) {
      setBattleLog(JSON.parse(dataL));
    } else {
      const tag = data.tag.replace("#", "%23");
      Axios.get(`${url}/player/${tag}/battles`).then((res) => {
        const tempArr = res.data;

        for (let i = 0; i < tempArr.length; i++) {
          if (typeof tempArr[i].team.startingTrophies === "undefined") {
            tempArr.slice(i, 1);
          }
        }
        localStorage.setItem("battleLog", JSON.stringify(tempArr));
        setBattleLog(tempArr);
      });
    }
  }, []);
  return (
    <div className={styles.clashRoyaleData}>
      <div className={styles.clashRoyaleName}>
        <h2>{data.tag}</h2>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.clashRoyaleTrophies}>
        <p className={styles.clashRoyaleTemplate}>
          King Tower Level: <span>{data.expLevel}</span>
        </p>
        <p className={styles.clashRoyaleTemplate}>
          Trophies: <span>{data.trophies}</span>
        </p>
        <p className={styles.clashRoyaleTemplate}>
          Most Trophies: <span>{data.bestTrophies}</span>
        </p>
        <p className={styles.clashRoyaleTemplate}>
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
      <div className={styles.clashRoyaleInfo}>
        {data.clan ? (
          <>
            <p className={styles.clashRoyaleTemplate}>
              Clan Tag: <span>{data.clan.tag}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Clan Name: <span>{data.clan.name}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Role In Clan: <span>{data.role}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Badge Id: <span>{data.clan.badgeId}</span>
            </p>
          </>
        ) : (
          <></>
        )}
        <p className={styles.clashRoyaleTemplate}>
          Arena Name: <span>{data.arena.name}</span>
        </p>
      </div>
      <Line
        data={{
          labels: battleLog.map((value, index) => index + 1),
          datasets: [
            {
              data: battleLog.map((value) => value.team[0].startingTrophies),
              label: "Trophies in last 25 battles",
              borderColor: "#3e95cd",
              fill: false,
            },
          ],
        }}
      />
    </div>
  );
}
