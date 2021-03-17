import { MCPlayerData } from "../../lib/types";
import { Bar, Pie } from "react-chartjs-2";
import styles from "../../styles/Minecraft.module.css";
import numeral from "numeral"
import Link from "next/link";

interface PageProps {
  data: MCPlayerData;
}

export default function PlayerStatsCoc({ data }: PageProps) {
  let achievements = [
    data.raw_achivments.bedwars_wins || 0,
    data.raw_achivments.bedwars_beds || 0,
    data.raw_achivments.duels_bridge_wins || 0,
    data.raw_achivments.skywars_kills_solo || 0,
    data.raw_achivments.skywars_wins_solo || 0,
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
          Network Level: <span>{data.networkLevel.toString().slice(0, 4)}</span>
        </p>
      </div>

      <hr style={{ color: "whitesmoke", width: "100%", marginBottom: "2%" }} />

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

      <hr style={{ color: "whitesmoke", width: "100%", marginBottom: "2%" }} />

      <div className={styles.minecraftInfo}>
        <p className={styles.minecraftTemplate}>
          Bedwars Level:{" "}
          <span>
            {numeral(data.raw_achivments.bedwars_level).format("0, 0") || 0}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          General Wins:{" "}
          <span>
            {numeral(data.raw_achivments.general_wins).format("0, 0") || 0}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          General Coins:{" "}
          <span>
            {numeral(data.raw_achivments.general_coins).format("0, 0") || 0}
          </span>
        </p>
        <p className={styles.minecraftTemplate}>
          Bridge Win Streak:{" "}
          <span>
            {numeral(data.raw_achivments.general_challenger).format("0, 0") ||
              0}
          </span>
        </p>
      </div>

      <hr style={{ color: "whitesmoke", width: "100%", marginBottom: "2%" }} />

      <div className={styles.minecraftName}>
        <h1>Skywars Stats</h1>
      </div>

      <Pie
        width={3}
        height={1}
        data={{
          labels: ["Solo Kills", "Solo Wins"],
          datasets: [
            {
              label: "Skywars Data",
              data: [
                data.raw_achivments.skywars_kills_solo,
                data.raw_achivments.skywars_wins_solo,
              ],
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#c45850",
                "rgba(33, 131, 33, 0.4)",
              ],
            },
          ],
        }}
      />
      {/* <CocClanStats data={data} /> */}

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
