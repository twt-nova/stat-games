import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../../styles/Header.module.css";

export default function Header() {
  const [session, loading] = useSession();

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
          {!session && (
            <a className={styles.signin} href="/" onClick={() => signIn()}>
              Sign In
            </a>
          )}
        </li>
      </ul>
    </header>
  );
}
