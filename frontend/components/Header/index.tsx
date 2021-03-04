import Link from "next/link";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>StatGames</h1>
      </div>
      <ul>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/">Games</Link>
        </li>
        <li className={styles.link}>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <a className={styles.signin} href="/">
            Sign In
          </a>
        </li>
      </ul>
    </header>
  );
}
