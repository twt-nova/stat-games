import { Pie, Line } from "react-chartjs-2";
import styles from "../../styles/ClashRoyale.module.css";
import { BattleLog, Data } from "../../lib/types";

interface PageProps {
  data: Data;
  battleLog: BattleLog[];
}

export default function PlayerStats({ data, battleLog }: PageProps) {
  return (
    <>
      <div className={styles.clashRoyaleName}>
        <h2>{data.tag}</h2>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.clashRoyaleTrophies}>
        <p className={styles.clashRoyaleTemplate}>
          King Tower Level: <span>{data.expLevel}</span>
        </p>
        <p className={styles.clashRoyaleTemplate}>
          Trophies: <span>{data.trophies}</span>
        </p>
        <p className={styles.clashRoyaleTemplate}>
          Most Trophies: <span>{data.bestTrophies}</span>
        </p>
        <p className={styles.clashRoyaleTemplate}>
          Win Ratio: <span>{(data.wins / data.battleCount).toFixed(2)}%</span>
        </p>
      </div>
      <Pie
        width={3}
        height={1}
        data={{
          labels: ["Wins", "Loses"],
          datasets: [
            {
              label: "Wins/Loses",
              data: [data.wins, data.losses],
              backgroundColor: [
                "rgba(127,255,0, 0.4)",
                "rgba(255, 99, 132, 0.5)",
              ],
              borderColor: ["rgba(127,255,0, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
      <div className={styles.clashRoyaleInfo}>
        {data.clan ? (
          <>
            <p className={styles.clashRoyaleTemplate}>
              Clan Tag: <span>{data.clan.tag}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Clan Name: <span>{data.clan.name}</span>
            </p>
            <p className={styles.clashRoyaleTemplate}>
              Role In Clan: <span>{data.role}</span>
            </p>
          </>
        ) : (
          <></>
        )}
        <p className={styles.clashRoyaleTemplate}>
          Arena Name: <span>{data.arena.name}</span>
        </p>
      </div>
      <Line
        data={{
          labels: battleLog.map((value, index) => index + 1),
          datasets: [
            {
              data: battleLog.map((value) => value.team[0].startingTrophies),
              label: "Trophies in last 25 battles",
              borderColor: "#3ebfbb",
              fill: false,
            },
          ],
        }}
      />
    </>
  );
}
