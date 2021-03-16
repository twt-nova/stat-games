import { Line, Pie } from "react-chartjs-2";
import { BSBattleLog, BSPlayer } from "../../lib/types";
import styles from "../../styles/BrawlStars.module.css";

interface PageProps {
  data: BSPlayer;
  battleLog: BSBattleLog[];
}

export default function BrawlStarsData({ data, battleLog }: PageProps) {
  return (
    <div className={styles.bsContainer}>
      <div className={styles.brawlStarsName}>
        <h2>{data.tag}</h2>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.brawlStarsTrophies}>
        <p className={styles.brawlStarsTemplate}>
          Experience Level: <span>{data.expLevel}</span>
        </p>
        <p className={styles.brawlStarsTemplate}>
          Trophies: <span>{data.trophies}</span>
        </p>
        <p className={styles.brawlStarsTemplate}>
          Most Trophies: <span>{data.highestTrophies}</span>
        </p>
        <p className={styles.brawlStarsTemplate}>
          Experience points: <span>{data.expPoints}</span>
        </p>
      </div>
      <Pie
        width={3}
        height={1}
        data={{
          labels: ["3v3 Victories", "2v2 Victories", "Solo Victories"],
          datasets: [
            {
              label: "Victories",
              data: [
                data["3vs3Victories"],
                data.duoVictories,
                data.soloVictories,
              ],
              backgroundColor: [
                "rgba(127,255,0, 0.4)",
                "rgba(255, 99, 132, 0.5)",
                "rgba(33, 131, 233, 0.4)",
              ],
              borderColor: [
                "rgba(127,255,0, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(33, 131, 233, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
      <div style={{ height: "3rem", width: "100%" }}></div>
      <Line
        data={{
          labels: data.brawlers.map((value, index) => value.name),
          datasets: [
            {
              data: data.brawlers.map((value) => value.trophies),
              label: "Trophies by every brawler",
              borderColor: "#3ebfbb",
              fill: false,
            },
          ],
        }}
      />

      <button
        className={styles.btn}
        onClick={() => {
          localStorage.removeItem("bsData");
          localStorage.removeItem("bsBattleLog");
          location.reload();
        }}
      >
        New search for player
      </button>
    </div>
  );
}
