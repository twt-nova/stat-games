import Header from "../../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../../styles/ClashRoyale.module.css";
import utils from "../../../styles/Utils.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ClashRoyaleData from "../../../components/ClashRoyale/ClashRoyaleData";
import { Data } from "../../../lib/types";
import Footer from "../../../components/Footer";
import Custom404 from "../../../components/404/Custom404";
import Link from "next/link";
import Notification from "../../../components/Notification";
import DataSet from "../../../components/DataSet";

export default function ClashRoyale() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<Data>();

  const [noti, setNoti] = useState(null);

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("data");
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
    try {
      const response = await Axios.get(`${url}/clash_royale/players/${tag}`);
      const data = response.data;
      setData(data);
      localStorage.setItem("data", JSON.stringify(data));
    } catch (err) {
      setNoti("The given tag wasn't found");
    }
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
        <>
          <ClashRoyaleData data={data} />
          <Footer />
        </>
      ) : (
        <div className={styles.clashRoyaleText}>
          <div className={`${styles.clashRoyaleLeft} ${utils.front}`}>
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
              <>
                <form onSubmit={getData}>
                  <input
                    type="text"
                    name="tag"
                    placeholder="Your clash royale tag... ex. #123"
                    required
                  />
                  <button>Visualize your stats</button>
                </form>
                <div className={styles.buttonsClashRoyale}>
                  <Link href="/games/clash-royale/clans">Search for clan</Link>
                  <Link href="/games/clash-royale/statistics">
                    See statistics
                  </Link>
                </div>
                {/* Only will show up if the noti isn't equal to null */}
                <Notification noti={noti} setNoti={setNoti}></Notification>
              </>
            )}
          </div>

          <DataSet />
        </div>
      )}
    </div>
  );
}
