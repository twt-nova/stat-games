import { MouseEvent, useEffect, useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import styles from "../../styles/ClashRoyale.module.css";
import Axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { url } from "../../lib/url";
import { Data, ClanData } from "../../lib/types";

interface PageProps {
  data: Data;
}

export default function ClanStats({ data }: PageProps) {
  const [loading, setLoading] = useState(false);
  const [dataGet, setDataGet] = useState(false);
  const [clanData, setClanData] = useState<ClanData>(Object);

  useEffect(() => {
    const dataL: string | null = localStorage.getItem("clanData");
    const dataFrom = JSON.parse(dataL!);
    if (dataFrom) {
      setClanData(dataFrom);
      setDataGet(true);
    }
  }, []);

  const getClan = async (e: MouseEvent) => {
    e.preventDefault();
    const tag = data.clan.tag.replace("#", "%23");
    setLoading(true);
    const response = await Axios.get(`${url}/clash_royale/clan/${tag}`);
    const dataFromRes = response.data;

    setClanData(dataFromRes);
    localStorage.setItem("clanData", JSON.stringify(dataFromRes));
    setDataGet(true);
    setLoading(false);
  };

  return (
    <>
      <div className={styles.clanVisualization}>
        {loading ? (
          <Loader type="TailSpin" color="#3ebfbb" height={100} width={100} />
        ) : (
          <>
            {!dataGet ? (
              <button className={styles.btnClan} onClick={getClan}>
                View stats for your clan
              </button>
            ) : (
              <>
                <div className={styles.clashRoyaleName}>
                  <h2>{clanData.tag}</h2>
                  <h1>{clanData.name}</h1>
                </div>
                <div className={styles.clashRoyaleClanInfo}>
                  <p className={styles.clashRoyaleTemplate}>
                    Type: <span>{clanData.type}</span>
                  </p>
                  <p className={styles.clashRoyaleTemplate}>
                    Clan Score: <span>{clanData.clanScore}</span>
                  </p>
                  <p className={styles.clashRoyaleTemplate}>
                    War Trophies: <span>{clanData.clanWarTrophies}</span>
                  </p>
                  <p className={styles.clashRoyaleTemplate}>
                    Location: <span>{clanData.location.name}</span>
                  </p>
                </div>
                <Line
                  data={{
                    labels: clanData.memberList.map(
                      (value, index) => value.name
                    ),
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
                <div className={styles.clashRoyaleClanInfo}>
                  <p className={styles.clashRoyaleTemplate}>
                    Required Trophies: <span>{clanData.requiredTrophies}</span>
                  </p>
                  <p className={styles.clashRoyaleTemplate}>
                    Donations per week: <span>{clanData.donationsPerWeek}</span>
                  </p>
                  <p className={styles.clashRoyaleTemplate}>
                    Chest Level: <span>{clanData.clanChestLevel}</span>
                  </p>
                  <p className={styles.clashRoyaleTemplate}>
                    Members: <span>{clanData.members}</span>
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
