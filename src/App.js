import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import MobileMessage from "./components/MobileMessage";
import Footer from "./components/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {windowWidth >= 1100 ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <MobileMessage />
      )}
    </div>
  );
}

export default App;
