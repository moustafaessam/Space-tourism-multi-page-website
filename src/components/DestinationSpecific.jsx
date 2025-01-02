import { NavLink, useLocation } from "react-router-dom";
import data from "../assets/data.json";
import styles from "../styles/DestinationSpecific.module.css";

function DestinationSpecific() {
  const location = useLocation();
  const destination = location.pathname.split("/")[2] || "moon";
  const destinationNumber =
    destination == "moon"
      ? 0
      : destination == "mars"
      ? 1
      : destination == "europa"
      ? 2
      : destination == "titan"
      ? 3
      : null;

  return (
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <img
          src={`/images/destination/image-${destination}.webp`}
          alt={`${destination} planet`}
          className={styles.img}
        />
      </div>
      <div className={styles.explaination}>
        <div className={styles.explainationContainer}>
          <div className={styles.links}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/destination/moon"
            >
              Moon
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/destination/mars"
            >
              Mars
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/destination/europa"
            >
              Europa
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
              to="/destination/titan"
            >
              Titan
            </NavLink>
          </div>
          <div className={styles.explainationText}>
            <div className={styles.parg1}>
              {data.destinations[destinationNumber].name}
            </div>
            <div className={styles.parg2}>
              {data.destinations[destinationNumber].description}
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div className={styles.stats}>
            <div className={styles.statsBox}>
              <div className={styles.statsBox1Parg1}>Avg. Distance</div>
              <div className={styles.statsBox1Parg2}>
                {data.destinations[destinationNumber].distance}
              </div>
            </div>
            <div className={styles.statsBox}>
              <div className={styles.statsBox1Parg1}>Est. travel Time</div>
              <div className={styles.statsBox1Parg2}>
                {data.destinations[destinationNumber].travel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationSpecific;
