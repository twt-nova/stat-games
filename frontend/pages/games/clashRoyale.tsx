import Header from "../../components/Header";
import { useSession } from "next-auth/client";
import Axios from "axios";
import Head from "next/head";
import styles from "../../styles/ClashRoyale.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../lib/url";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ClashRoyaleData from "../../components/ClashRoyale/ClashRoyaleData";
import { Data } from "../../lib/types";
import Footer from "../../components/Footer";
import Custom404 from "../../components/404/Custom404";

export default function ClashRoyale() {
  const [session, loading] = useSession();

  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("data");
    const dataFrom = JSON.parse(dataL!);
    if (dataFrom) setData(dataFrom);
  }, []);

  if (loading) return null;

  if (!loading && !session) return <Custom404 login={true} />;

  const getData = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading1(true);
    e.preventDefault();

    const value = e.currentTarget.tag.value;
    const tag = value.replace("#", "%23");

    const response = await Axios.get(`${url}/clash_royale/players/${tag}`);
    const data = response.data;
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
    setLoading1(false);
  };
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

      {data ? (
        <>
          <ClashRoyaleData data={data} />
          <Footer />
        </>
      ) : (
        <div className={styles.clashRoyaleText}>
          <div className={styles.clashRoyaleLeft}>
            <h1>Clash Royale</h1>
            <span>Visualize your stats from clash royale</span>
            {loading1 ? (
              <Loader
                type="TailSpin"
                color="#3ebfbb"
                height={100}
                width={100}
              />
            ) : (
              <form onSubmit={getData}>
                <input
                  type="text"
                  name="tag"
                  placeholder="Your clash royale tag... ex. #123"
                  required
                />
                <button>Visualize your stats</button>
              </form>
            )}
          </div>

          <img src="/data.svg" alt="data" />
        </div>
      )}
    </div>
  );
}
