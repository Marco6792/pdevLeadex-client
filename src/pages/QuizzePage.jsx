import React from "react";
import ScrollToTopButton from "../scene/ScrollToTopButton";
import FixedBottomMenu from ".././components/sections/FixedBottomMenu";

const QuizzePage = () => {
  return (
    <div className="flex h-screen justify-center items-center text-white">
      <h1>QuizzePage page here</h1>
      <ScrollToTopButton />
      <FixedBottomMenu />
    </div>
  );
};

export default QuizzePage;
