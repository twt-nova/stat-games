import Link from "next/link";
import { useState, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../../styles/Header.module.css";

export default function Header() {
  const [session, loading] = useSession();

  const dropdown = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(true);

  const showDropdown = () => {
    if (open) {
      if (dropdown && dropdown.current) {
        dropdown.current.style.display = "flex";
      }
    }
    if (!open) {
      if (dropdown && dropdown.current) {
        dropdown.current.style.display = "none";
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.circleBg}>
        <h1>StatGames</h1>
      </div>
      <ul>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <div className={styles.ddWrapper}>
          <div
            className={styles.ddHeader}
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
              showDropdown();
            }}
          >
            <span>Games</span>
            <img
              src="/arrow-down.svg"
              alt="arrow down"
              className={styles.iconDown}
            />
          </div>

          <div className={styles.ddList} ref={dropdown}>
            <img src="/arrow-up-filled.svg" className={styles.arrowUp} />

            <div className={styles.divUnder}>
              <Link href="/games/clashRoyale">Clash Royale</Link>
              <Link href="/games/clashOfClans">Clash Of Clans</Link>
              <Link href="/games/brawlStars">Brawl Stars</Link>
              <Link href="/games/minecraft">Minecraft</Link>
            </div>
          </div>
        </div>
        <li className={styles.link}>
          <Link href="/">About Us</Link>
        </li>
        <li>
          {!session && (
            <a className={styles.signin} href="/" onClick={() => signIn()}>
              Sign In
            </a>
          )}
          {session && (
            <a className={styles.signin} href="/" onClick={() => signOut()}>
              Sign Out
            </a>
          )}
        </li>
      </ul>
    </header>
  );
}
