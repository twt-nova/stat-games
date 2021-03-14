import { CocData } from "../../lib/types";
import { Bar, Pie } from "react-chartjs-2";
import styles from "../../styles/ClashOfClans.module.css";
import CocClanStats from "./CocClanStats";

interface PageProps {
  data: CocData;
}

export default function PlayerStatsCoc({ data }: PageProps) {
  let arr: string[] = [];
  for (let i = 0; i < data.troops.length; i++) {
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
    <div className={styles.clashOfClansData}>
      <div className={styles.clashOfClansName}>
        <h2>{data.tag}</h2>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.clashOfClansTrophies}>
        <p className={styles.clashOfClansTemplate}>
          Town Hall Level: <span>{data.townHallLevel}</span>
        </p>
        <p className={styles.clashOfClansTemplate}>
          Experience Level: <span>{data.expLevel}</span>
        </p>
        <p className={styles.clashOfClansTemplate}>
          Trophies: <span>{data.trophies}</span>
        </p>
        <p className={styles.clashOfClansTemplate}>
          Most Trophies: <span>{data.bestTrophies}</span>
        </p>
      </div>

      <Bar
        data={{
          labels: data.troops.map((value, index) => data.troops[index].name),
          datasets: [
            {
              label: "Level of troop",
              backgroundColor: arr.map((value, index) => value),
              data: data.troops.map((value, index) => data.troops[index].level),
            },
          ],
        }}
      />

      <div className={styles.clashOfClansInfo}>
        <p className={styles.clashOfClansTemplate}>
          War Stars: <span>{data.warStars}</span>
        </p>
        <p className={styles.clashOfClansTemplate}>
          Builder Hall Level: <span>{data.builderHallLevel}</span>
        </p>
        <p className={styles.clashOfClansTemplate}>
          Versus Trophies: <span>{data.versusTrophies}</span>
        </p>
        <p className={styles.clashOfClansTemplate}>
          Most Versus Trophies: <span>{data.bestVersusTrophies}</span>
        </p>
      </div>

      <Pie
        width={3}
        height={1}
        data={{
          labels: data.heroes.map(
            (value, index) => data.heroes[index].name + " Level"
          ),
          datasets: [
            {
              label: "Level of heroes",
              data: data.heroes.map((value, index) => data.heroes[index].level),
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
      <CocClanStats data={data} />
      <button
        className={styles.btn}
        onClick={() => {
          localStorage.removeItem("cocData");
          localStorage.removeItem("cocClanData");
          location.reload();
        }}
      >
        New search for player
      </button>
    </div>
  );
}
