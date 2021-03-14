import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import four from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StatGames - Visualize stats for your favorite game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={four.container}>
        <h1 className={four.error}>Error 404</h1>
        <h2 className={four.errorSmall}>This Page Doesn't Exist!</h2>
      </div>
    </div>
  );
}
