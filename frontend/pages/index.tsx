import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Chart from "../components/Chart";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import anim from "../styles/Anim.module.css";

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
      <main className={`${styles.main} ${anim.root}`}>
        <div className={styles.left}>
          <h1 className={`${anim.del1} ${anim.fadeD}`}>
            Visualize stats for your <br />
            <span>Favorite game</span>
          </h1>
          <div className={`${anim.del1} ${anim.fadeL} ${styles.buttons}`}>
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
            <div className={`${styles.button} ${styles.check}`}>
              <Link href={l}>Check stats</Link>
            </div>
          </div>
        </div>
        <Chart />
      </main>
    </div>
  );
}
