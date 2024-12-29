import styles from "../styles/NavigationBox.module.css";
import { NavLink } from "react-router-dom";

function NavigationBox({ ismobileNavActive }) {
  return (
    <nav
      className={`${styles.navBox} ${
        ismobileNavActive ? "" : styles.notActiveAnimation
      }`}
    >
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink}>
            <span className={styles.navTextBold}>00</span>
            <span className={styles.navTextRegular}>Home</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink}>
            <span className={styles.navTextBold}>01</span>
            <span className={styles.navTextRegular}>Destination</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink}>
            <span className={styles.navTextBold}>02</span>
            <span className={styles.navTextRegular}>Crew</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink}>
            <span className={styles.navTextBold}>03</span>
            <span className={styles.navTextRegular}>Technology</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBox;
