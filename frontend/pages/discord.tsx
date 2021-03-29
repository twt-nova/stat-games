import Head from "next/head";
import DiscordChart from "../components/DiscordChart";
import Header from "../components/Header";
import styles from "../styles/Discord.module.css";

export default function Discord() {
  return (
    <div className={styles.container}>
      <Header />

      <Head>
        <title>Discord Bot | StatGames </title>
        <meta
          name="description"
          content="Add discord bot to your server to try out our discord bot, or join our server!"
        />
      </Head>

      <div className={styles.discord}>
        <div className={styles.text}>
          <h1>Discord</h1>
          <p>
            Join discord to see our bot. And be fascinated.
            <br /> Bot will show you your stats from many games!
          </p>
          <div className={styles.buttons}>
            <a
              href="https://discord.gg/kmUX9c3xHy"
              target="_blank"
              className={styles.btn}
            >
              Join now
            </a>
            <a
              href="https://discord.com/oauth2/authorize?client_id=820356965959860226&permissions=388200%20F&scope=bot"
              target="_blank"
              className={styles.btn}
            >
              Invite bot
            </a>
          </div>
        </div>
        {/* <img src="/discord.svg" alt="discord" className={styles.image} /> */}
        <DiscordChart />
      </div>
    </div>
  );
}
