import styles from "../styles/Navigation.module.css";
import NavigationBox from "./NavigationBox";
import { useEffect, useState, memo } from "react";

const closeIconStyle = {
  zIndex: 1,
  position: "relative",
};

function Navigation() {
  const [ismobileNavActive, setIsMobileNavActive] = useState(false);
  function handleMobileNavClick() {
    setIsMobileNavActive((pre) => !pre);
  }

  return (
    <header className={styles.navMainContainer}>
      <div className={styles.navIconBox}>
        <div className={styles.navIcon}>
          <img className={styles.navIconImg} src="/images/shared/logo.svg" />
        </div>
        <div className={styles.navIconLine}></div>
      </div>
      {/* Desktop and tablet Nav */}
      <div className={styles.navComponent}>
        <NavigationBox />
      </div>
      {/* Mobile Nav */}
      <div className={styles.mobileNavBox}>
        {ismobileNavActive ? (
          <>
            <img
              src="/images/shared/icon-close.svg"
              onClick={handleMobileNavClick}
              style={closeIconStyle}
              className={styles.imgMargin}
            />
            <NavigationBox ismobileNavActive={ismobileNavActive} />
          </>
        ) : (
          <>
            {/* NavigationBox get displayed here for animation purpose only */}
            {/* <NavigationBox ismobileNavActive={ismobileNavActive} /> */}
            <img
              src="/images/shared/icon-hamburger.svg"
              onClick={handleMobileNavClick}
              className={styles.imgMargin}
            />
          </>
        )}
      </div>
    </header>
  );
}

export default memo(Navigation);
