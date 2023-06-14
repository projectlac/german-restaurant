import { useAppContext } from "@/contexts/state";
import styles from "@/styles/Home.module.scss";
function Hot() {
  const { dataLang } = useAppContext();
  return (
    <div className={styles.hot}>
      <div className={styles.left}></div>
      <div className={styles.c1}></div>
      <div className={styles.c2}>
        <h1>{dataLang[6]}</h1>
        <p>{dataLang[7]}</p>
        <button>DISCOVER MORE</button>
      </div>
      <div className={styles.c3}>
        <h1>{dataLang[8]}</h1>
        <p>{dataLang[9]}</p>
        <button>DISCOVER MORE</button>
      </div>
      <div className={styles.c4}></div>
      <div className={styles.c5}></div>
      <div className={styles.c6}>
        <h1>{dataLang[10]}</h1>
        <p>{dataLang[11]}</p>
        <button>DISCOVER MORE</button>
      </div>
    </div>
  );
}

export default Hot;
