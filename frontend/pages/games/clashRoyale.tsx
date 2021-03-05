import Header from "../../components/Header";
import { useSession, getSession } from "next-auth/client";
import Head from "next/head";
import styles from "../../styles/ClashRoyale.module.css";

export default function ClashRoyale() {
  const [session, loading] = useSession();

  if (loading) return null;

  if (!loading && !session) return <p>Access Denied</p>;
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

      <div className={styles.clashRoyaleText}>
        <div className={styles.clashRoyaleLeft}>
          <h1>Clash Royale</h1>
          <span>Visualize your stats from clash royale</span>
          <form>
            <input
              type="text"
              placeholder="Your clash royale tag... ex. #123"
            />
            <button>Visualize your stats</button>
          </form>
        </div>

        <img src="/data.svg" alt="data" />
      </div>
    </div>
  );
}
