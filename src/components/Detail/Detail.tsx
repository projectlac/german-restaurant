import React from "react";
import Header from "../Header/Header";
import styles from "@/styles/Home.module.scss";
import image from "@/assets/images/1.png";
import Image from "next/image";
function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.detail_content}>
        <h1>
          DIANDI <br />
          RESTAURANT
        </h1>
        <p>
          Is a place where we provide customers with relax ambience, healthy{" "}
          <br />
          Vietnamese food and professional service, making every meal with us an{" "}
          <br />
          unforgettable experience
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
