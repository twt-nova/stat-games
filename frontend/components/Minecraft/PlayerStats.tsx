import { Bar, Pie } from "react-chartjs-2";
import styles from "../../styles/Minecraft.module.css";
import numeral from "numeral";
import Link from "next/link";
import { useState } from "react";

interface PageProps {
  data: any;
}

export default function PlayerStatsMC({ data }: PageProps) {
  const [showAv, setShowAv] = useState(false)
  let achievements = [
    data.info.bedwars.wins || 0,
    data.info.bedwars.beds || 0,
    data.info.duels.bridge_wins || 0,
    data.info.skywars.kills_solo || 0,
    data.info.skywars.wins_solo || 0,
  ];
  let arr: string[] = [];
  for (let i = 0; i < achievements.length; i++) {
    let colorArr: string[] = [
      "#3e95cd",
      "#8e5ea2",
      "#3cba9f",
      "#e8c3b9",
      "#c45850",
    ];

    let ranNum = Math.floor(Math.random() * 5);
    arr.push(colorArr[ranNum]);
  }
  return (
    <div className={styles.minecraftData}>
      <div className={styles.minecraftName}>
        <h1>{data.displayName}</h1>
      </div>
      <div className={styles.minecraftTrophies}>
        <p className={styles.minecraftTemplate}>
          Minecraft Version: <span>{data.mcVersion}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Network EXP <span>{numeral(data.networkExp).format("0,0")}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Karma: <span>{numeral(data.karma).format("0,0")}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Network Level:{" "}
          <span>{numeral(data.networkLevel).format("0,0.00")}</span>
        </p>
      </div>

      <button
        className={styles.btn}
        onClick={() => {
          if (showAv === true) {
            setShowAv(false);
          } else {
            setShowAv(true)
          }
        }}
      >
        {showAv ? "Hide Avatar" : "Show Avatar"}
      </button>
      
      {showAv ? <img src={`https://visage.surgeplay.com/full/${data.uuid}`} /> : ""}


      <Pie
        width={3}
        height={1}
        data={{
          labels: ["Total Wins", "Total Losses"],
          datasets: [
            {
              label: "Wins/Losses",
              data: [data.totalWins, data.totalLosses],
              backgroundColor: [
                "rgba(127,255,0, 0.4)",
                "rgba(255, 99, 132, 0.5)",
              ],
            },
          ],
        }}
      />

      <div className={styles.minecraftInfo}>
        <p className={styles.minecraftTemplate}>
          Bedwars Level:{" "}
          <span>{numeral(data.info.bedwars.wins).format("0, 0") || 0}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          General Wins:{" "}
          <span>{numeral(data.info.general.wins).format("0, 0") || 0}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          General Coins:{" "}
          <span>{numeral(data.info.general.coins).format("0, 0") || 0}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Bridge Win Streak:{" "}
          <span>
            {numeral(data.info.duels.bridge_win_streak).format("0, 0") || 0}
          </span>
        </p>
      </div>

      <Bar
        data={{
          labels: [
            "Bedwar Wins",
            "Bedwar Beds",
            "Duel Wins",
            "Skywar Kills",
            "Skywar Wins",
          ],
          datasets: [
            {
              label: "Minecraft Stats",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: achievements,
            },
          ],
        }}
      />

      <button
        className={styles.btn}
        onClick={() => {
          localStorage.removeItem("minecraftData");
          localStorage.removeItem("minecraftData");
          location.reload();
        }}
      >
        New search for player
      </button>
    </div>
  );
}
