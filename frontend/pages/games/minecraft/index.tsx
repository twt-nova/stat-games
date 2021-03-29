import Header from "../../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../../styles/Minecraft.module.css";
import utils from "../../../styles/Utils.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../../lib/url";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { MCPlayerData } from "../../../lib/types";
import Footer from "../../../components/Footer";
import Custom404 from "../../../components/404/Custom404";
import PlayerStatsMC from "../../../components/Minecraft/PlayerStats";
import Link from "next/link";
import Notification from "../../../components/Notification";
import Creeper from "../../../components/Creeper";

export default function minecraft() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<MCPlayerData>();

  const [noti, setNoti] = useState(null);

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("minecraftData");
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
      : JSON.parse(localStorage.getItem("minecraftData")).displayName;
    const tag = value.trim();

    try {
      const response = await Axios.get(`${url}/hypixel/player/${tag}`);
      const data = response.data;
      setData(data);
      localStorage.setItem("minecraftData", JSON.stringify(data));
    } catch (err) {
      setNoti("The given tag wasn't found");
    }
    setLoading1(false);
  };
  const replace = (route: string) => {
    window.location.replace(route);
  };
  return (
    <div className={styles.minecraft}>
      <Head>
        <meta
          name="description"
          content="Visualize your stats from Minecraft in few clicks. Enter your username, and visualize your data"
        />
        <title>StatGames | Visualize data for Minecraft</title>
      </Head>
      <Header />

      {data ? (
        <>
          <PlayerStatsMC data={data} />
          <Footer />
        </>
      ) : (
        <div className={styles.minecraftText}>
          <div className={`${styles.minecraftLeft} ${utils.front}`}>
            <h1>Minecraft</h1>
            <span>Visualize your stats from minecraft!</span>
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
                  <Link href="/games/minecraft/skywars">
                    <button style={{ width: "45%" }}>Skywars</button>
                  </Link>
                  <Link href="/games/minecraft/bedwars">
                    <button style={{ width: "45%" }}>Bedwars</button>
                  </Link>
                </form>
                {/* Only will show up if the noti isn't equal to null */}
                <Notification noti={noti} setNoti={setNoti}></Notification>
              </>
            )}
          </div>
          <Creeper />
        </div>
      )}
    </div>
  );
}
