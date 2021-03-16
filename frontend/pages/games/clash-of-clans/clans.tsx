import Header from "../../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../../styles/ClashOfClans.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { CocClanData } from "../../../lib/types";
import Footer from "../../../components/Footer";
import Custom404 from "../../../components/404/Custom404";
import Link from "next/link";
import { Line, Pie } from "react-chartjs-2";

export default function Clans() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<CocClanData>();

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("cocDataClanPage");
    const dataFrom = JSON.parse(dataL!);
    if (dataFrom) setData(dataFrom);
  }, []);

  if (loading) return null;

  if (!loading && !session) return <Custom404 login={true} />;

  const getData = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading1(true);
    e.preventDefault();

    const value = e.currentTarget.tag.value;
    const tag = value.replace("#", "%23");

    const response = await Axios.get(`${url}/clash_of_clans/clans/${tag}`);
    const data = response.data;
    setData(data);
    localStorage.setItem("cocDataClanPage", JSON.stringify(data));
    setLoading1(false);
  };
  return (
    <div className={styles.clashOfClans}>
      <Head>
        <meta
          name="description"
          content="Visualize clan stats from Clash of Clans in few clicks. Enter your clan tag, and visualize your data"
        />
        <title>StatGames | Visualize clan data for Clash of Clans</title>
      </Head>
      <Header />

      {data ? (
        <div className={styles.containerData}>
          <div
            className={styles.clashOfClansName}
            style={{ marginTop: "3rem" }}
          >
            <h2>{data.tag}</h2>
            <h1>{data.name}</h1>
          </div>
          <div className={styles.clashOfClansTrophies}>
            <p className={styles.clashOfClansTemplate}>
              Type: <span>{data.type}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Location: <span>{data.location.name}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Clan Level: <span>{data.clanLevel}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Required Trophies: <span>{data.requiredTrophies}</span>
            </p>
          </div>
          <Pie
            width={3}
            height={1}
            data={{
              labels: ["Wins", "Ties", "Loses"],
              datasets: [
                {
                  label: "Wins/Ties/Loses",
                  data: [data.warWins, data.warTies, data.warWins],
                  backgroundColor: [
                    "rgba(127,255,0, 0.4)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(31, 01, 133, 0.4)",
                  ],
                  borderColor: [
                    "rgba(127,255,0, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(31, 01, 133, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
          <div className={styles.clashOfClansInfo}>
            <p className={styles.clashOfClansTemplate}>
              Clan Points: <span>{data.clanPoints}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              War Win Streak: <span>{data.warWinStreak}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              War League: <span>{data.warLeague.name}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Members: <span>{data.members}</span>
            </p>
          </div>
          <Line
            data={{
              labels: data.memberList.map((value, index) => value.name),
              datasets: [
                {
                  data: data.memberList.map((value, index) => value.trophies),
                  label: "Member trophies",
                  borderColor: "#3ebfbb",
                  fill: false,
                },
              ],
            }}
          />
          <button
            className={styles.btn}
            onClick={() => {
              localStorage.removeItem("cocDataClanPage");
              location.reload();
            }}
          >
            New search for clan
          </button>
          <Footer />
        </div>
      ) : (
        <div className={styles.clashOfClansText}>
          <div className={styles.clashOfClansLeft}>
            <h1>Clash Of Clans Clans</h1>
            <span>Visualize clan stats from clash of clans</span>
            {loading1 ? (
              <Loader
                type="TailSpin"
                color="#3ebfbb"
                height={100}
                width={100}
              />
            ) : (
              <>
                <form onSubmit={getData}>
                  <input
                    type="text"
                    name="tag"
                    placeholder="Clan tag... ex. #123"
                    required
                  />
                  <button>Visualize clan stats</button>
                </form>
                <div className={styles.buttonsClashOfClans}>
                  <Link href="/games/clash-of-clans/">Search for player</Link>
                  <Link href="/games/clash-of-clans/statistics">
                    See statistics
                  </Link>
                </div>
              </>
            )}
          </div>

          <img src="/clashOfClans.svg" alt="data" />
        </div>
      )}
    </div>
  );
}
