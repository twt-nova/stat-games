import Header from "../../components/Header";
import { useSession, getSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../styles/ClashRoyale.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Data from "../../components/ClashRoyale/Data";

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

export default function ClashRoyale() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("data");
    const dataFrom = JSON.parse(dataL!);
    if (dataFrom) setData(dataFrom);
  }, []);

  if (loading) return null;

  if (!loading && !session) return <p>Access Denied</p>;

  const getData = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading1(true);
    e.preventDefault();

    const value = e.currentTarget.tag.value;
    const tag = value.replace("#", "%23");

    const response = await Axios.get(`${url}/player/${tag}`);
    const data = response.data;
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
    setLoading1(false);
  };
  return (
    <div className={styles.clashRoyale}>
      <Head>
        <meta
          name="description"
          content="Visualize your stats from Clash Royale in few clicks. Enter your profile tag, and visualize your data"
        />
        <title>StatGames | Visualize data for Clash Royale</title>
      </Head>
      <Header />

      {data ? (
        <Data data={data} />
      ) : (
        <div className={styles.clashRoyaleText}>
          <div className={styles.clashRoyaleLeft}>
            <h1>Clash Royale</h1>
            <span>Visualize your stats from clash royale</span>
            {loading1 ? (
              <Loader
                type="TailSpin"
                color="#3ebfbb"
                height={100}
                width={100}
              />
            ) : (
              <form onSubmit={getData}>
                <input
                  type="text"
                  name="tag"
                  placeholder="Your clash royale tag... ex. #123"
                  required
                />
                <button>Visualize your stats</button>
              </form>
            )}
          </div>

          <img src="/data.svg" alt="data" />
        </div>
      )}
    </div>
  );
}
