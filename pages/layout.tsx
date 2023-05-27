import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className={styles.main}>{children}</div>
    </section>
  );
}
