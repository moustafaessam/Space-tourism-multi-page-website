import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BackgroundWrapper({ children }) {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1] || "home";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const deviceType =
    windowWidth > 768 ? "desktop" : windowWidth > 375 ? "tablet" : "mobile";

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [setWindowWidth]);

  const backgroundImage = `/images/${pathname}/background-${pathname}-${deviceType}.jpg`;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="backgroundWrapepr"
    >
      {children}
    </div>
  );
}

export default BackgroundWrapper;
