import Header from "../../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../../styles/ClashRoyale.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { ClanData } from "../../../lib/types";
import Footer from "../../../components/Footer";
import Custom404 from "../../../components/404/Custom404";
import Link from "next/link";
import { Line } from "react-chartjs-2";

export default function ClashRoyale() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<ClanData>();

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("clanDataPage");
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

    const response = await Axios.get(`${url}/clash_royale/clan/${tag}`);
    const data = response.data;
    setData(data);
    localStorage.setItem("clanDataPage", JSON.stringify(data));
    setLoading1(false);
  };
  return (
    <div className={styles.clashRoyale}>
      <Head>
        <meta
          name="description"
          content="Visualize your stats from Clash Royale in few clicks. Enter your profile tag, and visualize your data"
        />
        <title>StatGames | Visualize clan data for Clash Royale</title>
      </Head>
      <Header />

      {data ? (
        <div className={styles.clashRoyaleData}>
          <div className={styles.clashRoyaleName}>
            <h2>{data.tag}</h2>
            <h1>{data.name}</h1>
          </div>
          <div className={styles.clashRoyaleTrophies}>
            <p className={styles.clashRoyaleTemplate}>
              Type: <span>{data.type}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Clan Score: <span>{data.clanScore}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              War Trophies: <span>{data.clanWarTrophies}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Location: <span>{data.location.name}</span>
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
          <div className={styles.clashRoyaleClanInfo}>
            <p className={styles.clashRoyaleTemplate}>
              Required Trophies: <span>{data.requiredTrophies}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Donations per week: <span>{data.donationsPerWeek}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Chest Level: <span>{data.clanChestLevel}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Members: <span>{data.members}</span>
            </p>
          </div>
          <button
            className={styles.btn}
            onClick={() => {
              localStorage.removeItem("clanDataPage");
              location.reload();
            }}
          >
            New search for player
          </button>
          <Footer />
        </div>
      ) : (
        <div className={styles.clashRoyaleText}>
          <div className={styles.clashRoyaleLeft}>
            <h1>Clash Royale Clans</h1>
            <span>Visualize clan stats from clash royale</span>
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
                    placeholder="Clan clash royale tag... ex. #123"
                    required
                  />
                  <button>Visualize clan stats</button>
                </form>
                <div className={styles.buttonsClashRoyale}>
                  <Link href="/games/clash-royale/">Search for players</Link>
                  <Link href="/games/clash-royale/statistics">
                    See statistics
                  </Link>
                </div>
              </>
            )}
          </div>

          <img src="/data.svg" alt="data" />
        </div>
      )}
    </div>
  );
}
