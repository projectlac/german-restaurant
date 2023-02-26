import styles from "@/styles/Home.module.scss";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <nav className={styles.navigator}>
        <div className={styles.logo}>LOGO</div>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/menu"}>Gallery</Link>
          </li>
        </ul>

        <h5>Adress</h5>
        <p>
          Klarastraße 27 <br />
          45130 Essen <br />
          0201 4588 1209
        </p>
      </nav>

      <div className={styles.main}>{children}</div>
    </section>
  );
}
