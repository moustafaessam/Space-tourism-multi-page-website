import { Outlet } from "react-router-dom";
import styles from "../styles/Destination.module.css";

function Destination() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.pageTitle}>
          <span className={styles.pageTitleNumber}>01</span>
          <span className={styles.pageTitleText}>Pick your destination</span>
        </h1>
        <Outlet />
      </section>
    </main>
  );
}

export default Destination;
