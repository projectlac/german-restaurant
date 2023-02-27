import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactComponent as MySvgFile } from "@/assets/svgs/menu.svg";
import Image from "next/image";
import { useState } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <section className="flex flex-col md:flex-row">
      <nav className={`${styles.navigator}`}>
        <div className="pc  md:block hidden">
          <div className={styles.logo}>LOGO</div>
          <ul>
            <li
              className={route.asPath === "/" ? styles["navigator-active"] : ""}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={
                route.asPath === "/gallery" ? styles["navigator-active"] : ""
              }
            >
              <Link href={"/gallery"}>Gallery</Link>
            </li>
          </ul>

          <h5>Adress</h5>
          <p>
            Klarastraße 27 <br />
            45130 Essen <br />
            0201 4588 1209
          </p>
        </div>
        <div className="mobile md:hidden block">
          <div className="flex justify-between">
            <span className="w-1/4"></span>
            <span className={styles.logo}>LOGO</span>
            <span
              className={`${styles["menu-button"]} w-1/4 flex align-center justify-end`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`${styles["overlay"]} ${toggle ? styles["active"] : ""}`}
        ></div>
        <div
          className={`${styles["menu-mobile"]} ${
            toggle ? styles["active"] : ""
          }`}
        >
          <ul>
            <li
              className={route.asPath === "/" ? styles["navigator-active"] : ""}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={
                route.asPath === "/gallery" ? styles["navigator-active"] : ""
              }
            >
              <Link href={"/gallery"}>Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.main}>{children}</div>
    </section>
  );
}
