import React from "react";
import Header from "../Header/Header";
import styles from "@/styles/Home.module.scss";
import LightGallery from "lightgallery/react";
import menu from "./../../../assets/images/menu.png";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useAppContext } from "@/contexts/state";
function Introductions() {
  const { dataLang } = useAppContext();
  return (
    <div className={styles.introductions}>
      <Header />
      <div className={styles.content}>
        <h1>
          {dataLang[0]}
          <br />
          {dataLang[1]}
          <br />
          {dataLang[2]}
        </h1>
        <svg
          width="73"
          height="16"
          viewBox="0 0 73 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 0L10.2961 5.52786H16.1085L11.4062 8.94427L13.2023 14.4721L8.5 11.0557L3.79772 14.4721L5.59383 8.94427L0.891548 5.52786H6.70389L8.5 0Z"
            fill="#D3223A"
          />
          <path
            d="M36.5 0L38.2961 5.52786H44.1085L39.4062 8.94427L41.2023 14.4721L36.5 11.0557L31.7977 14.4721L33.5938 8.94427L28.8915 5.52786H34.7039L36.5 0Z"
            fill="#D3223A"
          />
          <path
            d="M64.5 0L66.2961 5.52786H72.1085L67.4062 8.94427L69.2023 14.4721L64.5 11.0557L59.7977 14.4721L61.5938 8.94427L56.8915 5.52786H62.7039L64.5 0Z"
            fill="#D3223A"
          />
        </svg>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a href={menu.src}>
            <button>DISCOVER MENU</button>
          </a>
        </LightGallery>
      </div>
    </div>
  );
}

export default Introductions;
