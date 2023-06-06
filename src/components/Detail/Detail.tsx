import React from "react";
import Header from "../Header/Header";
import styles from "@/styles/Home.module.scss";
import image from "@/assets/images/1.png";
import Image from "next/image";
import useTrans from "@/pages/hook/useTrans";
function Detail() {
  const home = useTrans();
  return (
    <div className={styles.detail}>
      <div className={styles.detail_content}>
        <h1>
          DIANDI <br />
          RESTAURANT
        </h1>
        <p>
          {home.detail1}
          <br />
          {home.detail2}
          <br />
          {home.detail3}
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
