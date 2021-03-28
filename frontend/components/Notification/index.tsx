import React from "react";
import { useEffect } from "react";
import styles from "../../styles/Notification.module.css";

export default function index({ noti, setNoti }) {
  const notificationDuration = 2000;
  useEffect(() => {
    if (noti !== null) {
      setTimeout(() => {
        setNoti(null);
      }, notificationDuration);
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
