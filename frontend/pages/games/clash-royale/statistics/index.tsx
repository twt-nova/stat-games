import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import Header from "../../../../components/Header";
import { locations, Location, Player } from "../../../../lib/locations";
import Axios from "axios";
import styles from "../../../../styles/CRStatistics.module.css";
import { url } from "../../../../lib/url";
import Footer from "../../../../components/Footer";
import Loader from "react-loader-spinner";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

interface PageProps {
  res: Player[];
}

export default function Statistics({ res }: PageProps) {
  const [results, setResults] = useState<Location[]>([]);
  const [data, setData] = useState<Player[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [locationId, setLocationId] = useState<number>(0);
  const [country, setCountry] = useState<string>("Global");
  const [loading, setLoading] = useState<boolean>(false);
  const [dataGet, setDataGet] = useState<boolean>(false);

  const div = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const getResults = (value: string) => {
    let arr: number[] = [];
    value = value.toUpperCase();
    if (value !== "") {
      for (let i = 0; i < locations.length; i++) {
        if (locations[i].name.toUpperCase().indexOf(value) > -1) {
          arr.push(i);
        }
      }
    }
    return arr;
  };

  const getDataAboutPlayers = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (results.length !== 0) {
      setLoading(true);

      for (let i = 0; i < locations.length; i++) {
        if (locations[i].id == locationId) {
          setCountry(locations[i].name);
        }
      }

      Axios.get(`${url}/clash_royale/locations/${locationId}/players`).then(
        (result) => {
          const data = result.data.items;

          let res = [];

          for (let i = 0; i < number; i++) {
            res.push(data[i]);
          }

          setData(res);
          setDataGet(true);
          setLoading(false);
          if (div && div.current) {
            div.current.style.display = "none";
          }
        }
      );
    } else {
      NotificationManager.error("Error!", "Not found country!", 3000);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="See statistics per country for clash royale"
        />
        <title>StatGames | Statistics for player | Clash Royale</title>
      </Head>

      <Header />

      <div className={styles.players}>
        <h1 className={styles.tagline}>Clash Royale Players</h1>
        <div className={styles.underline}></div>
        {loading ? (
          <>
            <Loader type="TailSpin" color="#3ebfbb" height={100} width={100} />
          </>
        ) : (
          <form className={styles.form} onSubmit={getDataAboutPlayers}>
            <div className={styles.wrapper}>
              <input
                type="text"
                name="search"
                ref={input}
                placeholder="Search rankings of country by name ex. England"
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  let arr = getResults(e.currentTarget.value);

                  let results = [];

                  if (arr.length === 0) {
                    setLocationId(0);
                  } else {
                    setLocationId(locations[arr[0]].id);
                  }

                  if (arr.length < 10) {
                    for (let i = 0; i < arr.length; i++) {
                      results.push(locations[arr[i]]);
                    }
                  } else {
                    for (let i = 0; i < 10; i++) {
                      results.push(locations[arr[i]]);
                    }
                  }

                  setResults(results);
                }}
                required
              />

              {results.length > 0 ? (
                <div className={styles.results} ref={div}>
                  {results.map((value, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        setLocationId(value.id);

                        if (input && input.current) {
                          input.current.value = value.name;
                        }

                        if (div && div.current) {
                          div.current.style.display = "none";
                        }
                      }}
                    >
                      {value.name}
                    </span>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
            <input
              type="number"
              min="1"
              max="30"
              name="playersNumber"
              placeholder="Number of players"
              required
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setNumber(parseInt(e.currentTarget.value));
              }}
            />
            <button>See statistics</button>
          </form>
        )}
        <h2 className={styles.sCountry}>{country}</h2>
        <div className={styles.playersDiv}>
          <div className={styles.player}>
            <div className={styles.containerPlayer}>
              <span>Player Rank</span>
            </div>
            <div className={styles.containerPlayer}>
              <span>Player Tag</span>
            </div>
            <div className={styles.containerPlayer}>
              <span>Player Name</span>
            </div>
            <div className={styles.containerPlayer}>
              <span>Player Arena</span>
            </div>
            <div className={styles.containerPlayer}>
              <span>Player Trophies</span>
            </div>
            <div className={styles.containerPlayer}>
              <span>Player Clan</span>
            </div>
          </div>
          {dataGet
            ? data.map((value, index) => {
                return (
                  <div className={styles.player} key={index}>
                    <div className={styles.containerPlayer}>
                      <span>{value.rank}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.tag}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.name}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.arena.name}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.trophies}</span>
                    </div>
                    {value.clan ? (
                      <div className={styles.containerPlayer}>
                        <span>{value.clan.name}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })
            : res.map((value, index) => {
                return (
                  <div className={styles.player} key={index}>
                    <div className={styles.containerPlayer}>
                      <span>{value.rank}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.tag}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.name}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.arena.name}</span>
                    </div>
                    <div className={styles.containerPlayer}>
                      <span>{value.trophies}</span>
                    </div>
                    {value.clan ? (
                      <div className={styles.containerPlayer}>
                        <span>{value.clan.name}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
        </div>
      </div>

      <NotificationContainer />

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const result = await Axios.get(
    `${url}/clash_royale/locations/global/players`
  );

  const data = result.data.items;

  let res = [];

  for (let i = 0; i < 30; i++) {
    res.push(data[i]);
  }

  return {
    props: { res },
  };
}
