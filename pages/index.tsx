import Detail from "@/src/components/Detail/Detail";
import Hot from "@/src/components/Hot/Hot";
import Introductions from "@/src/components/Introductions/Introductions";
import Location from "@/src/components/Location/Location";
import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "./layout";
import Footer from "@/src/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  return (
    <RootLayout>
      <Head>
        <title>ĐiĂnĐi</title>
        <meta name="description" content="Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/thirteen.svg" /> */}
        <meta property="og:image" content="./public/ogImage.jpg" />
        <meta property="og:title" content="ĐisĂnĐi Restaurant" />
        <meta property="og:description" content="ĐisĂnĐi Restaurant - Vietnamese Restaurant & Bar" />
   
        <meta property="og:locale" content="de_DE" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="es_ES" />
      </Head>
      <main className={styles.main}>
        <Introductions />
        <Detail />
        <Hot />
        <Location />
        <Footer />
      </main>
    </RootLayout>
  );
}
