import { useEffect, useState } from "react";

function BackgroundWrapper({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWindowResize() {
      console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return <div>{children}</div>;
}

export default BackgroundWrapper;
