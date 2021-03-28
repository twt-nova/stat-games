import Link from "next/link";
import { useState, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../../styles/Header.module.css";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const stylesForMenu = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "2rem",
    top: "28px",
    outline: "none",
  },
  bmBurgerBars: {
    background: "#3ebfbb",
    height: "3px",
    outline: "none",
  },
  bmCrossButton: {
    outline: "none",
  },
  bmCross: {
    background: "#3ebfbb",
    height: "20px",
    outline: "none",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    height: "100%",
    background: "#363943",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "var(--white-color)",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: "80%",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

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
        <Link href='/'>StatGames</Link>
      </div>
      <div className={styles.div}>
        <Menu
          right
          menuClassName={styles.menu}
          overlayClassName={styles.menu}
          styles={stylesForMenu}
          itemListClassName={styles.bmItemList}
          burgerButtonClassName={styles.btnHamMenu}
        >
          {session ? (
            <div className={styles.elem}>
              <img src={session.user.image} className={styles.pfp} />
              <p style={{ fontSize: "28px" }}>
                {session.user.name.length < 10
                  ? session.user.name
                  : session.user.name.slice(0, 10) + "..."}
              </p>
            </div>
          ) : (
            <></>
          )}
          <div className={styles.elem}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} size="2x" />
            <Link href="/">Home</Link>
          </div>
          <div className={styles.elem}>
            <img
              src='/clash-royale.png'
              className={styles.icon}
              style={{ height: "32px" }}
            />
            <Link href='/games/clash-royale'>Clash Royale</Link>
          </div>
          <div className={styles.elem}>
            <img
              src='/clash-of-clans.png'
              className={styles.icon}
              style={{ height: "32px" }}
            />
            <Link href='/games/clash-of-clans'>Clash Of Clans</Link>
          </div>
          <div className={styles.elem}>
            <img
              src='/brawl-stars.png'
              className={styles.icon}
              style={{ height: "32px" }}
            />
            <Link href='/games/brawl-stars'>Brawl Stars</Link>
          </div>
          <div className={styles.elem}>
            <img
              src='/minecraft.png'
              className={styles.icon}
              style={{ height: "32px" }}
            />
            <Link href='/games/minecraft'>Minecraft</Link>
          </div>
          <div className={styles.elem}>
            <FontAwesomeIcon
              icon={faDiscord}
              className={styles.icon}
              size="2x"

            />
            <Link href='/discord'>Discord</Link>
          </div>
          <div className={styles.elem}>

            <FontAwesomeIcon
              icon={faAddressCard}
              className={styles.icon}
              size="2x"
            />
            <Link href="/about">About Us</Link>
          </div>
          {!session && (
            <button className={styles.signin} onClick={() => signIn("discord")}>
              Sign In
            </button>
          )}
          {session && (
            <button className={styles.signin} onClick={() => signOut()}>
              Sign Out
            </button>
          )}
        </Menu>
      </div>
    </header>
  );
}
