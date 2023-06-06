import React from "react";
import styles from "@/styles/Home.module.scss";
import useTrans from "@/pages/hook/useTrans";
function Hot() {
  const home = useTrans();
  return (
    <div className={styles.hot}>
      <div className={styles.left}></div>
      <div className={styles.c1}></div>
      <div className={styles.c2}>
        <h1>{home.hot1}</h1>
        <p>{home.hot2}</p>
        <button>DISCOVER MORE</button>
      </div>
      <div className={styles.c3}>
        <h1>{home.hot3}</h1>
        <p>{home.hot4}</p>
        <button>DISCOVER MORE</button>
      </div>
      <div className={styles.c4}></div>
      <div className={styles.c5}></div>
      <div className={styles.c6}>
        <h1>{home.hot5}</h1>
        <p>{home.hot6}</p>
        <button>DISCOVER MORE</button>
      </div>
    </div>
  );
}

export default Hot;
