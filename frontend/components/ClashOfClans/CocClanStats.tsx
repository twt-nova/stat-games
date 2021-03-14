import { useEffect, useState, MouseEvent } from "react";
import { CocData, CocClanData } from "../../lib/types";
import Axios from "axios";
import styles from "../../styles/ClashOfClans.module.css";
import { url } from "../../lib/url";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Line, Pie } from "react-chartjs-2";

interface PageProps {
  data: CocData;
}

export default function CocClanStats({ data }: PageProps) {
  const [loading, setLoading] = useState(false);
  const [dataGet, setDataGet] = useState(false);
  const [clanData, setClanData] = useState<CocClanData>(Object);

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("cocClanData");
    const dataFrom = JSON.parse(dataL!);
    if (dataFrom) {
      setClanData(dataFrom);
      setDataGet(true);
    }
  }, []);

  const getClan = async (e: MouseEvent) => {
    e.preventDefault();
    const tag = data.clan?.tag.replace("#", "%23");
    setLoading(true);
    const response = await Axios.get(`${url}/clash_of_clans/clans/${tag}`);
    const dataFromRes = response.data;

    console.log(dataFromRes);
    setClanData(dataFromRes);
    localStorage.setItem("cocClanData", JSON.stringify(dataFromRes));
    setDataGet(true);
    setLoading(false);
  };
  return (
    <>
      {dataGet ? (
        <>
          <div
            className={styles.clashOfClansName}
            style={{ marginTop: "3rem" }}
          >
            <h2>{clanData.tag}</h2>
            <h1>{clanData.name}</h1>
          </div>
          <div className={styles.clashOfClansTrophies}>
            <p className={styles.clashOfClansTemplate}>
              Type: <span>{clanData.type}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Location: <span>{clanData.location.name}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Clan Level: <span>{clanData.clanLevel}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Required Trophies: <span>{clanData.requiredTrophies}</span>
            </p>
          </div>
          <Pie
            width={3}
            height={1}
            data={{
              labels: ["Wins", "Ties", "Loses"],
              datasets: [
                {
                  label: "Wins/Ties/Loses",
                  data: [clanData.warWins, clanData.warTies, clanData.warWins],
                  backgroundColor: [
                    "rgba(127,255,0, 0.4)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(31, 01, 133, 0.4)",
                  ],
                  borderColor: [
                    "rgba(127,255,0, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(31, 01, 133, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
          <div className={styles.clashOfClansInfo}>
            <p className={styles.clashOfClansTemplate}>
              Clan Points: <span>{clanData.clanPoints}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              War Win Streak: <span>{clanData.warWinStreak}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              War League: <span>{clanData.warLeague.name}</span>
            </p>
            <p className={styles.clashOfClansTemplate}>
              Members: <span>{clanData.members}</span>
            </p>
          </div>
          <Line
            data={{
              labels: clanData.memberList.map((value, index) => value.name),
              datasets: [
                {
                  data: clanData.memberList.map(
                    (value, index) => value.trophies
                  ),
                  label: "Member trophies",
                  borderColor: "#3ebfbb",
                  fill: false,
                },
              ],
            }}
          />
        </>
      ) : (
        <>
          {loading ? (
            <Loader type="TailSpin" color="#3ebfbb" height={100} width={100} />
          ) : (
            <>
              {data.clan ? (
                <button className={styles.btn} onClick={getClan}>
                  See more stats about clan
                </button>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
