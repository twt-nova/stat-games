import Header from "../../../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../../../styles/Minecraft.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Footer from "../../../../components/Footer";
import Custom404 from "../../../../components/404/Custom404";
import SkywarsStatsMC from "../../../../components/Minecraft/Skywars";
import Link from "next/link"

export default function minecraft() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("skywarsData");
    const dataFrom = JSON.parse(dataL!);
    if (dataFrom) setData(dataFrom);
  }, []);

  if (loading) return null;

  if (!loading && !session) return <Custom404 login={true} />;

  const getData = async (e?: React.FormEvent<HTMLFormElement>) => {
    setLoading1(true);
    e?.preventDefault();

    const value = e
      ? e.currentTarget.tag.value
      : JSON.parse(localStorage.getItem("skywarsData")).displayName;
    const tag = value.trim();

    const response = await Axios.get(`${url}/hypixel/player/${tag}/skywars`);
    const data = response.data;
    const avRes = await Axios.get(`${url}/hypixel/player/${tag}`);
    const avResData = avRes.data;
    data.uuid = avResData.uuid;
    data.displayName = tag;
    setData(data);
    localStorage.setItem("skywarsData", JSON.stringify(data));
    setLoading1(false);
  };
  return (
    <div className={styles.minecraft}>
      <Head>
        <meta
          name="description"
          content="Visualize your stats from Skywars in few clicks. Enter your username, and visualize your data"
        />
        <title>StatGames | Visualize data for Skywars</title>
      </Head>
      <Header />

      {data ? (
        <>
          <SkywarsStatsMC data={data} />
          <Footer />
        </>
      ) : (
        <div className={styles.minecraftText}>
          <div className={styles.minecraftLeft}>
            <h1>Minecraft Skywars</h1>
            <span>Visualize your stats from skywars!</span>
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
                    placeholder="Your minecraft tag... ex. Dream"
                    required
                  />
                  <button style={{ marginLeft: "1%" }}>
                    Visualize your stats
                  </button>
                </form>
                <form onSubmit={(e) => e.preventDefault()}>
                  <Link href="/games/minecraft/bedwars">
                    <button style={{ width: "45%" }}>Bedwars</button>
                  </Link>
                  <Link href="/games/minecraft">
                    <button style={{ width: "45%" }}>Overall</button>
                  </Link>
                </form>
              </>
            )}
          </div>

          <img src="/minecraft.svg" alt="data" />
        </div>
      )}
    </div>
  );
}
