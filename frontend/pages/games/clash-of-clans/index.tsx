import Header from "../../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../../styles/ClashOfClans.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { CocData } from "../../../lib/types";
import Footer from "../../../components/Footer";
import Custom404 from "../../../components/404/Custom404";
import PlayerStatsCoc from "../../../components/ClashOfClans/PlayerStats";

export default function clashOfClans() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<CocData>();

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("cocData");
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

    const response = await Axios.get(`${url}/clash_of_clans/players/${tag}`);
    const data = response.data;
    setData(data);
    localStorage.setItem("cocData", JSON.stringify(data));
    setLoading1(false);
  };
  return (
    <div className={styles.clashOfClans}>
      <Head>
        <meta
          name="description"
          content="Visualize your stats from Clash of Clans in few clicks. Enter your profile tag, and visualize your data"
        />
        <title>StatGames | Visualize data for Clash of Clans</title>
      </Head>
      <Header />

      {data ? (
        <>
          <PlayerStatsCoc data={data} />
          <Footer />
        </>
      ) : (
        <div className={styles.clashOfClansText}>
          <div className={styles.clashOfClansLeft}>
            <h1>Clash Of Clans</h1>
            <span>Visualize your stats from clash of clans</span>
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
                  placeholder="Your clash of clans tag... ex. #123"
                  required
                />
                <button>Visualize your stats</button>
              </form>
            )}
          </div>

          <img src="/clashOfClans.svg" alt="data" />
        </div>
      )}
    </div>
  );
}