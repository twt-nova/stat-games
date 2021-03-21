import { Bar, Pie } from "react-chartjs-2";
import styles from "../../styles/Minecraft.module.css";
import numeral from "numeral";
import { useState } from "react";

interface PageProps {
  data: any;
}

export default function BedwarsStatsCoc({ data }: PageProps) {
  const [showAv, setShowAv] = useState(false);

  let achievements = [
    data.overall.games_played_bedwars || 0,
    data.overall.kills_bedwars || 0,
    data.overall.items_purchased_bedwars || 0,
    data.overall.beds_broken_bedwars || 0,
    data.overall.beds_lost_bedwars || 0,
    data.overall.deaths_bedwars || 0,
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
          Bedwars Experience:{" "}
          <span>{numeral(data.overall.Experience).format("0,0")}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Winstreak:{" "}
          <span>{numeral(data.overall.winstreak).format("0,0")}</span>
        </p>
        <p className={styles.minecraftTemplate}>
          Resources Collected:{" "}
          <span>
            {numeral(data.overall.resources_collected_bedwars).format("0,0")}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          Coins: <span>{numeral(data.overall.coins).format("0,0")}</span>
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
              data: [data.overall.wins_bedwars, data.overall.losses_bedwars],
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
          Fall Kills:{" "}
          <span>
            {numeral(data.overall.fall_kills_bedwars).format("0, 0") || 0}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          Projectile Kills:{" "}
          <span>
            {numeral(data.overall.projectile_final_kills_bedwars).format(
              "0, 0"
            ) || 0}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          Magic Kills:{" "}
          <span>
            {numeral(data.overall.magic_final_kills_bedwars).format("0, 0") ||
              0}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          Void Kills:{" "}
          <span>
            {numeral(data.overall.void_final_kills_bedwars).format("0, 0") || 0}
          </span>
        </p>
      </div>

      <Bar
        data={{
          labels: [
            "Games Played",
            "Kills",
            "Items Purchased",
            "Beds Broken",
            "Beds Lost",
            "Deaths",
          ],
          datasets: [
            {
              label: "Bedwars Stats",
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
          localStorage.removeItem("bedwarsData");
          localStorage.removeItem("bedwarsData");
          location.reload();
        }}
      >
        New search for player
      </button>
    </div>
  );
}
