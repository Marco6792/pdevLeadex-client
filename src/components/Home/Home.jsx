import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import VideoPage from "./VideoPage";
import HeroSection from "../sections/HeroSection";
import BackToTop from "../../scene/ScrollToTopButton";
import ScrollToTopButton from "../../scene/ScrollToTopButton";
import FixedBottomMenu from "../sections/FixedBottomMenu";

const Home = () => {

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <>
      <div className="h-screen w-screen">
        {/* <NavBar /> */}
         <HeroSection />
         <ScrollToTopButton />
        {/* <VideoPage /> */}
        <FixedBottomMenu />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
