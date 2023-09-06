import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import HeroSection from "../sections/HeroSection";
import ScrollToTopButton from "../../scene/ScrollToTopButton";
import FixedBottomMenu from "../sections/FixedBottomMenu";
import OverLay from "../form/OverLay";
import VideoPage from './VideoPage'
const Home = () => {

  return (
    <>
    {/* <OverLay /> */}
      <div className="h-screen w-screen">
        {/* <NavBar /> */}
         <HeroSection />
         <ScrollToTopButton />
        <VideoPage />
        <FixedBottomMenu />
      </div>
      <Outlet />
    </>
  );
};

export default Home;









// const [isFixed, setIsFixed] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition > 200) {
//       setIsFixed(true);
//     } else {
//       setIsFixed(false);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

