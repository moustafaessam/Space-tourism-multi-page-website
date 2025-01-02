import { NavLink } from "react-router-dom";
import data from "../assets/data.json";
import styles from "../styles/TechnologySpecific.module.css";
import { useEffect, useState } from "react";

function TechnologySpecific() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tech = location.pathname.split("/")[2] || "launch";
  const techNumber =
    tech == "launch"
      ? 0
      : tech == "spaceport"
      ? 1
      : tech == "capsule"
      ? 2
      : null;
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
    <div className={styles.content}>
      <div className={styles.explainationAndNav}>
        <div className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              `${styles.navItem} ${
                isActive
                  ? styles.active
                  : location.pathname === "/technology" ||
                    location.pathname === "/technology/"
                  ? styles.tempActive
                  : ""
              }`
            }
            to="/technology/launch"
          >
            1
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
            to="/technology/spaceport"
          >
            2
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
            to="/technology/capsule"
          >
            3
          </NavLink>
        </div>
        <div className={styles.explaination}>
          <div className={styles.header}>
            <div className={styles.terminology}>the terminology…</div>
            <div className={styles.name}>
              {data.technology[techNumber].name}
            </div>
          </div>
          <div className={styles.description}>
            {data.technology[techNumber].description}
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.innerImage}>
          <img
            src={`/images/technology/image-${data.technology[techNumber].name
              .split(" ")
              .join("-")
              .toLowerCase()}-${
              windowWidth > 768 ? "portrait" : "landscape"
            }.jpg`}
            alt="mission"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default TechnologySpecific;
