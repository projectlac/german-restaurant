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
      <main>
        <div className={styles.iframeBox}>
          <iframe
            src="https://flowpaper.com/flipbook/https://icseindia.org/document/sample.pdf"
            width="70%"
            height="800"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </RootLayout>
  );
}
