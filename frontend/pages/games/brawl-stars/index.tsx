import Header from "../../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../../styles/ClashRoyale.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { BSBattleLog, BSPlayer } from "../../../lib/types";
import Footer from "../../../components/Footer";
import Custom404 from "../../../components/404/Custom404";
import Link from "next/link";
import BrawlStarsData from "../../../components/BrawlStars/BrawlStarsData";

interface getDataItems {
  items: BSBattleLog[];
}

export default function ClashRoyale() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<BSPlayer>();
  const [battleLog, setBattleLog] = useState<getDataItems>();

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("bsData");
    const dataFrom = JSON.parse(dataL!);
    if (dataFrom) setData(dataFrom);
    const dataLB: string | null = localStorage.getItem("bsBattleLog");
    const dataFromB = JSON.parse(dataLB!);
    if (dataFromB) setBattleLog(dataFromB);
  }, []);

  if (loading) return null;

  if (!loading && !session) return <Custom404 login={true} />;

  const getData = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading1(true);
    e.preventDefault();

    const value = e.currentTarget.tag.value;
    const tag = value.replace("#", "%23");

    const response = await Axios.get(`${url}/brawl_stars/player/${tag}`);
    const data = response.data;
    setData(data);
    localStorage.setItem("bsData", JSON.stringify(data));

    const response1 = await Axios.get(
      `${url}/brawl_stars/player/${tag}/battles`
    );
    const data1 = response1.data;
    setData(data1);
    localStorage.setItem("bsBattleLog", JSON.stringify(data1));
    setLoading1(false);
  };
  return (
    <div className={styles.clashRoyale}>
      <Head>
        <meta
          name="description"
          content="Visualize your stats from Brawl Stars in few clicks. Enter your profile tag, and visualize your data"
        />
        <title>StatGames | Visualize data for Brawl Stars</title>
      </Head>
      <Header />

      {data ? (
        <>
          <BrawlStarsData data={data} battleLog={battleLog.items} />
          <Footer />
        </>
      ) : (
        <div className={styles.clashRoyaleText}>
          <div className={styles.clashRoyaleLeft}>
            <h1>Brawl Stars</h1>
            <span>Visualize your stats from brawl stars</span>
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
                    placeholder="Your brawl stars tag... ex. #123"
                    required
                  />
                  <button>Visualize your stats</button>
                </form>
                <div className={styles.buttonsClashRoyale}>
                  <Link href="/games/brawl-stars/statistics">
                    See statistics
                  </Link>
                </div>
              </>
            )}
          </div>

          <img src="/brawl-stars.svg" alt="data" />
        </div>
      )}
    </div>
  );
}
