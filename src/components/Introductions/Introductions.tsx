import React from "react";
import Header from "../Header/Header";
import styles from "@/styles/Home.module.scss";
import LightGallery from "lightgallery/react";
import menu1 from "./../../../public/Menu/1.png";
import menu2 from "./../../../public/Menu/3.png";
import menu3 from "./../../../public/Menu/4.png";
import menu4 from "./../../../public/Menu/5.png";
import menu5 from "./../../../public/Menu/6.png";
import menu6 from "./../../../public/Menu/7.png";
import menu7 from "./../../../public/Menu/8.png";
import menu8 from "./../../../public/Menu/9.png";
import menu9 from "./../../../public/Menu/10.png";
import menu10 from "./../../../public/Menu/11.png";
import menu11 from "./../../../public/Menu/12.png";

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
import Image from "next/image";
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
          <a href={menu1.src}>
            <button>{dataLang[22]}</button>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 1"
              src={menu1.src}
            />
          </a>
          <a href={menu2.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 2"
              src={menu2.src}
            />
          </a>
          <a href={menu3.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 3"
              src={menu3.src}
            />
          </a>
          <a href={menu4.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 4"
              src={menu4.src}
            />
          </a>
          <a href={menu5.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 5"
              src={menu5.src}
            />
          </a>
          <a href={menu6.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 6"
              src={menu6.src}
            />
          </a>
          <a href={menu7.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 7"
              src={menu7.src}
            />
          </a>
          <a href={menu8.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 8"
              src={menu8.src}
            />
          </a>
          <a href={menu9.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 9"
              src={menu9.src}
            />
          </a>
          <a href={menu10.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 10"
              src={menu10.src}
            />
          </a>
          <a href={menu11.src}>
            <Image
              width="250"
              height="250"
              className="hidden"
              alt="Page 11"
              src={menu11.src}
            />
          </a>
        </LightGallery>
      </div>
    </div>
  );
}

export default Introductions;
