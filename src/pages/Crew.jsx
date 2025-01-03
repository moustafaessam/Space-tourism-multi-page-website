import { Outlet } from "react-router-dom";
import styles from "../styles/Crew.module.css";

function Crew() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.pageTitle}>
          <span className={styles.pageTitleNumber}>02</span>
          <span className={styles.pageTitleText}>Meet your crew</span>
        </h1>
        <Outlet />
      </section>
    </main>
  );
}

export default Crew;
