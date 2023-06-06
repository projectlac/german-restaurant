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
        <h1>{home[6]}</h1>
        <p>{home[7]}</p>
        <button>DISCOVER MORE</button>
      </div>
      <div className={styles.c3}>
        <h1>{home[8]}</h1>
        <p>{home[9]}</p>
        <button>DISCOVER MORE</button>
      </div>
      <div className={styles.c4}></div>
      <div className={styles.c5}></div>
      <div className={styles.c6}>
        <h1>{home[10]}</h1>
        <p>{home[11]}</p>
        <button>DISCOVER MORE</button>
      </div>
    </div>
  );
}

export default Hot;
