import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "<snake>/styles/Home.module.css";
import Header from "../../components/Header";
import MainHome from "../../components/MainHome";
import { Fragment } from "react";
import StartButton from "../../components/StartButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Header />
      <MainHome />
      <StartButton />
    </Fragment>
  );
}
