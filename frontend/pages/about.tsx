import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import about from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StatGames - Visualize stats for your favorite game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={about.cardContainer}>
        <h2 className={about.mainLine}>
          Here at StatGames, you can view yours or other's game stats easily and
          elegantly! We support games like Clash Of Clans, Clash Royale,Brawl
          Stars and Minecraft! What are you waiting for? A whole world of data
          awaits!
        </h2>
        <main className={about.pageContent}>
          <div className={about.card}>
            <div className={about.content}>
              <h2 className={about.title}>Clash Of Clans</h2>
              <p className={about.copy}>Visualize data for Clash Of Clans</p>
              <Link href="/games/clash-of-clans">View Stats</Link>
            </div>
          </div>
          <div className={about.card}>
            <div className={about.content}>
              <h2 className={about.title}>Clash Royale</h2>
              <p className={about.copy}>Visualize data for Clash Royale</p>
              <Link href="/games/clash-royale">View Stats</Link>
            </div>
          </div>
          <div className={about.card}>
            <div className={about.content}>
              <h2 className={about.title}>Brawl Stars</h2>
              <p className={about.copy}>Visualize data for Brawl Stars</p>
              <Link href="/games/brawl-stars">View Stats</Link>
            </div>
          </div>
          <div className={about.card}>
            <div className={about.content}>
              <h2 className={about.title}>Minecraft</h2>
              <p className={about.copy}>Visualize data for Minecraft</p>
              <Link href="/games/minecraft">View Stats</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
