import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Chart from "../components/Effects/Chart";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [selected, setSelected] = useState("clash-royale");

  const l: string = "/games/" + selected;

  return (
    <div className={styles.container}>
      <Head>
        <title>StatGames - Visualize stats for your favorite game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <div className={styles.left}>
          <h1>
            Visualize stats for your <br />
            <span>Favorite game</span>
          </h1>
          <div className={styles.buttons}>
            <select
              className={`${styles.button} ${styles.game}`}
              name="options"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelected(event.currentTarget.value);
              }}
            >
              <option value="clash-royale">Clash Royale</option>
              <option value="clash-of-clans">Clash Of Clans</option>
              <option value="brawl-stars">Brawl Stars</option>
              <option value="minecraft">Minecraft</option>
            </select>

            <Link href={l}>
              <div className={`${styles.button} ${styles.check}`}>
                Check stats
              </div>
            </Link>
          </div>
        </div>
        <Chart />
        {/* <img src='/chart.svg' alt='chart' className={styles.chart} /> */}
      </main>
    </div>
  );
}
