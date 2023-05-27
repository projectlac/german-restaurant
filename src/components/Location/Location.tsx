import React from "react";
import Header from "../Header/Header";
import styles from "@/styles/Home.module.scss";
import image from "@/assets/images/image 6.png";
import Image from "next/image";
function Location() {
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
          <h2>DINNING</h2>
          <p>
            Indoor Dining & Outdoor <br /> Private & Terrace
          </p>
        </div>
        <div className={styles.location_box}>
          <h2>RESERVATION</h2>
          <p>
            Call 023053080508 <br />
            Mail
          </p>
        </div>
        <div className={styles.location_box}>
          <h2>OPENING HOURS</h2>
          <p>Monday - Sunday 12:00 to 22:00</p>
        </div>
      </div>
      <div className={styles.location_image}>
        <Image src={image} alt="image" height={548} width={465} />
      </div>
    </div>
  );
}

export default Location;
