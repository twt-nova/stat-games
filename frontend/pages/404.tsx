import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import four from "../styles/404.module.css";
import Custom404 from "../components/404/Custom404";

export default function FourOhFour() {
  return (
    <>
      <Custom404 login={true} />
    </>
  );
}
