import styles from "../../styles/ClashRoyale.module.css";
import { defaults } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Axios from "axios";
import { url } from "../../lib/url";
import { BattleLog, Data } from "../../lib/types";
import PlayerStats from "./PlayerStats";
import ClanStats from "./ClanStats";

defaults.global.responsive = true;

interface PageProps {
  data: Data;
}

export default function ClashRoyaleData({ data }: PageProps) {
  const [battleLog, setBattleLog] = useState<BattleLog[]>([]);
  useEffect(() => {
    const dataL: string | null = localStorage.getItem("battleLog");
    if (dataL) {
      setBattleLog(JSON.parse(dataL));
    } else {
      const tag = data.tag.replace("#", "%23");
      Axios.get(`${url}/player/${tag}/battles`).then((res) => {
        const tempArr = res.data;

        for (let i = 0; i < tempArr.length; i++) {
          if (typeof tempArr[i].team.startingTrophies === "undefined") {
            tempArr.slice(i, 1);
          }
        }
        localStorage.setItem("battleLog", JSON.stringify(tempArr));
        setBattleLog(tempArr);
      });
    }
  }, []);
  return (
    <div className={styles.clashRoyaleData}>
      <PlayerStats data={data} battleLog={battleLog} />
      {data.clan ? <ClanStats data={data} /> : <></>}
    </div>
  );
}
