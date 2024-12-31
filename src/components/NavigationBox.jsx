import styles from "../styles/NavigationBox.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";

function NavigationBox({ ismobileNavActive }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [setWindowWidth]);
  return (
    <nav
      className={`${styles.navBox} ${
        ismobileNavActive ? "" : styles.notActiveAnimation
      }`}
    >
      <ul className={styles.navItems}>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${styles.navItem} ${
              isActive ? styles.active : ""
            }`
          }
          to="/"
        >
          {windowWidth > 768 ? (
            <span className={styles.navTextBold}>00</span>
          ) : location.pathname !== "/" ? (
            <span className={styles.navTextBold}>00</span>
          ) : windowWidth <= 375 ? (
            <span className={styles.navTextBold}>00</span>
          ) : null}
          <span className={styles.navTextRegular}>home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${styles.navItem} ${
              isActive ? styles.active : ""
            }`
          }
          to="/destination"
        >
          <span className={styles.navTextBold}>01</span>

          <span className={styles.navTextRegular}>destination</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${styles.navItem} ${
              isActive ? styles.active : ""
            }`
          }
          to="/crew"
        >
          <span className={styles.navTextBold}>02</span>

          <span className={styles.navTextRegular}>crew</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${styles.navItem} ${
              isActive ? styles.active : ""
            }`
          }
          to="/technology"
        >
          <span className={styles.navTextBold}>03</span>

          <span className={styles.navTextRegular}>technology</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default memo(NavigationBox);
