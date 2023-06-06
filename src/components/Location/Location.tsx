import image from "@/assets/images/image 6.png";
import useTrans from "@/pages/hook/useTrans";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
function Location() {
  const home = useTrans();
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
          <h2>{home[12]}</h2>
          <p>{home[13]}</p>
        </div>
        <div className={styles.location_box}>
          <h2>{home[14]}</h2>
          <p>{home[15]}</p>
        </div>
        <div className={styles.location_box}>
          <h2>{home[16]}</h2>
          <p>
            {home[17]} <br />
            {home[18]}
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
