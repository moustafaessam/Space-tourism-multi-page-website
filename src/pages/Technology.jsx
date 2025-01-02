import { Outlet } from "react-router-dom";
import styles from "../styles/Technology.module.css";

function Technology() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.pageTitle}>
          <span className={styles.pageTitleNumber}>03</span>
          <span className={styles.pageTitleText}>SPACE LAUNCH 101</span>
        </h1>
        <Outlet />
      </section>
    </main>
  );
}

export default Technology;
