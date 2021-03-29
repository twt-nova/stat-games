import { Bar, Pie } from "react-chartjs-2";
import styles from "../../styles/Minecraft.module.css";
import numeral from "numeral";
import { useState } from "react";

interface PageProps {
  data: any;
}

export default function SkywarsStatsCoc({ data }: PageProps) {
  const [showAv, setShowAv] = useState(false);
  let achievements = [
    data.overall.games_played_skywars ? data.overall.games_played_skywars : 0,
    data.overall.kills ? data.overall.kills : 0,
    data.overall.items_enchanted ? data.overall.items_enchanted : 0,
    data.overall.assists ? data.overall.assists : 0,
    data.overall.arrows_hit ? data.overall.arrows_hit : 0,
    data.overall.deaths ? data.overall.deaths : 0,
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
          Games Played: <span>{numeral(data.overall.games || 0).format("0,0")}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Winstreak:{" "}
          <span>{numeral(data.overall.winstreak || 0).format("0,0")}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Skywars Experience:{" "}
          <span>{numeral(data.overall.skywars_experience || 0).format("0,0")}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Coins: <span>{numeral(data.overall.coins || 0).format("0,0")}</span>
        </p>
      </div>

      <button
        className={styles.btn}
        onClick={() => {
          if (showAv === true) {
            setShowAv(false);
          } else {
            setShowAv(true);
          }
        }}
      >
        {showAv ? "Hide Avatar" : "Show Avatar"}
      </button>

      {showAv ? (
        <img src={`https://visage.surgeplay.com/full/${data.uuid}`} />
      ) : (
        ""
      )}

      <Pie
        width={3}
        height={1}
        data={{
          labels: ["Total Wins", "Total Losses"],
          datasets: [
            {
              label: "Wins/Losses",
              data: [data.overall.wins, data.overall.losses],
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
          Longest Bow Kill:{" "}
          <span>
            {numeral(data.overall.longest_bow_kill || 0).format("0, 0") || 0}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          Melee Kills:{" "}
          <span>{numeral(data.overall.melee_kills || 0).format("0, 0") || 0}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Fastest Win:{" "}
          <span>{numeral(data.overall.fastest_win || 0).format("0, 0") || 0}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Void Kills:{" "}
          <span>{numeral(data.overall.void_kills || 0).format("0, 0") || 0}</span>
        </p>
      </div>

      <Bar
        data={{
          labels: [
            "Games Played",
            "Kills",
            "Items Enchanted",
            "Assists",
            "Arrows Hit",
            "Deaths",
          ],
          datasets: [
            {
              label: "Skywars Stats",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
                "rgba(255, 99, 132, 0.5)",
              ],
              data: achievements,
            },
          ],
        }}
      />

      <button
        className={styles.btn}
        onClick={() => {
          localStorage.removeItem("skywarsData");
          localStorage.removeItem("skywarsData");
          location.reload();
        }}
      >
        New search for player
      </button>
    </div>
  );
}
