import image from "@/assets/Images/Home/6.JPG";
import { useAppContext } from "@/contexts/state";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
function Location() {
  const { dataLang } = useAppContext();
  return (
    <div className={styles.location}>
      <div className={styles.location_content}>
        <div className={styles.location_box}>
          <h2>ADDRESS</h2>
          <p>
            LangeStr. 40 <br /> 44579 Castop Rauxel
          </p>
        </div>
        <div className={styles.location_box}>
          <h2>{dataLang[12]}</h2>
          <p>{dataLang[13]}</p>
        </div>
        <div className={styles.location_box}>
          <h2>{dataLang[14]}</h2>
          <p>{dataLang[15]}</p>
        </div>
        <div className={styles.location_box}>
          <h2>{dataLang[16]}</h2>
          <p>
            {dataLang[17]} <br />
            {dataLang[18]}
          </p>
        </div>
      </div>
      <div className={styles.location_image}>
        <Image src={image} alt="image" height={548} width={465} />
      </div>
    </div>
  );
}

export default Location;
