import Detail from "@/src/components/Detail/Detail";
import Hot from "@/src/components/Hot/Hot";
import Introductions from "@/src/components/Introductions/Introductions";
import Location from "@/src/components/Location/Location";
import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "./layout";
const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  return (
    <RootLayout>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Introductions />
        <Detail />
        <Hot />
        <Location />
      </main>
    </RootLayout>
  );
}
