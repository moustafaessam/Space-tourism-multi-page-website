import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import { useEffect, useState } from "react";

function Navigation() {
  const [ismobileNavActive, setIsMobileNavActive] = useState(false);

  // Day 2 Find where is the error or the bug in this useEffect
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   console.log(windowWidth);
  //   function handleWidth() {
  //     setWindowWidth(window.innerWidth);
  //   }
  //   window.addEventListener("resize", handleWidth);
  // }, [windowWidth]);

  return (
    <div className={styles.navMainContainer}>
      <div className={styles.navIconBox}>
        <div className={styles.navIcon}>
          <img className={styles.navIconImg} src="/images/shared/logo.svg" />
        </div>
        <div className={styles.navIconLine}></div>
      </div>
      <nav className={styles.navBox}>
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
    </div>
  );
}

export default Navigation;
