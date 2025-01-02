import styles from "../styles/CrewSpecific.module.css";
import { NavLink, useLocation } from "react-router-dom";
import data from "../assets/data.json";

function CrewSpecific() {
  const location = useLocation();
  const commander = location.pathname.split("/")[2] || "douglas";
  const commanderNumber =
    commander == "douglas"
      ? 0
      : commander == "mark"
      ? 1
      : commander == "victor"
      ? 2
      : commander == "anousheh"
      ? 3
      : null;
  return (
    <div className={styles.contentMain}>
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <div className={styles.explaination}>
            <div className={styles.commander}>
              <div className={styles.role}>
                {data.crew[commanderNumber].role}
              </div>
              <div className={styles.name}>
                {data.crew[commanderNumber].name}
              </div>
            </div>
            <div className={styles.description}>
              {data.crew[commanderNumber].bio}
            </div>
          </div>
          <div className={styles.navigation}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/crew/douglas"
            ></NavLink>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/crew/mark"
            ></NavLink>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/crew/victor"
            ></NavLink>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/crew/anousheh"
            ></NavLink>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={`/images/crew/image-${data.crew[commanderNumber].name
            .split(" ")
            .join("-")
            .toLowerCase()}.webp`}
          alt={commander}
          className={styles.img}
        />
      </div>
    </div>
  );
}

export default CrewSpecific;
