import Header from "../components/Header";
import styles from "../styles/Discord.module.css";

export default function Discord() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.discord}>
        <div className={styles.text}>
          <h1>Discord</h1>
          <p>
            Join discord to see our bot. And be fascinated.
            <br /> Bot will show you your stats from many games!
          </p>
          <a
            href="https://discord.gg/kmUX9c3xHy"
            target="_blank"
            className={styles.btn}
          >
            Join now
          </a>
        </div>
        <img src="/discord.svg" alt="discord" className={styles.image} />
      </div>
    </div>
  );
}
