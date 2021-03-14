import Head from "next/head";
import Header from "../Header";
import { signIn } from "next-auth/client";
import styles from "../../styles/404.module.css";
import Link from "next/link";

interface PageProps {
  login: boolean;
}

export default function Custom404({ login }: PageProps) {
  let stylesFor = {};
  if (login) {
    stylesFor = {
      height: "100vh",
    };
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>StatGames - Visualize stats for your favorite game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {login ? <></> : <Header />}

      <div className={styles.fourohfour} style={stylesFor}>
        <div className={styles.left}>
          <h1 className={styles.error}>
            {login
              ? "Oops, you are not authorized!"
              : "Oops, we couldn't find what you are looking for!"}
          </h1>
          {login ? (
            <a
              onClick={() => {
                signIn("discord");
              }}
            >
              Login to continue
            </a>
          ) : (
            <Link href="/">Back to home page</Link>
          )}
        </div>
        <img src={login ? "/403.svg" : "/404.svg"} alt="404" />
      </div>
    </div>
  );
}
