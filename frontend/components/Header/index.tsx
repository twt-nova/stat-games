import Link from "next/link";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>StatGames</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Games</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
        <li>
          <Link href="/">Sign In</Link>
        </li>
      </ul>
    </header>
  );
}
