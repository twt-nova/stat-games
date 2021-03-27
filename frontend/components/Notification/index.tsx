import React from "react";
import { useEffect } from "react";
import styles from "../../styles/Notification.module.css";

export default function index({ noti, setNoti }) {
  useEffect(() => {
    if (noti !== null) {
      setTimeout(() => {
        setNoti(null);
      }, 1000);
    }
  }, [noti]);

  return (
    <>
      {noti !== null ? (
        <div className={styles.notification}>{noti}</div>
      ) : (
        <></>
      )}
    </>
  );
}
