import image from "@/assets/npho.JPG";
import { useAppContext } from "@/contexts/state";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
function Detail() {
  const { dataLang } = useAppContext();
  return (
    <div className={styles.detail}>
      <div className={styles.detail_content}>
        <h1>
          DIANDI <br />
          RESTAURANT
        </h1>
        <p>
          {dataLang[3]}
          <br />
          {dataLang[4]}
          <br />
          {dataLang[5]}
        </p>
        <button>DISCOVER MORE</button>
      </div>
      <div className={styles.detail_image}>
        <Image src={image} alt="image" height={353} width={553} />
      </div>
    </div>
  );
}

export default Detail;
