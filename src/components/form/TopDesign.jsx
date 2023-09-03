import React from "react";
import Bounce from "react-reveal/Bounce"
 
const TopDesign = () => {
  return (
    <>
 
      <div className="w-screen h-[350px] flex flex-col justify-self-start">
        <div className="w-screen max-sm:w-[1000px] h-[670px] flex absolute rounded-full bg-[rgb(241, 196, 15)] md:h-[700px] from-from to-to bg-gradient-to-tr -top-[390px] -left-[100px] border-2 border-red-300"></div>
       <Bounce top><p className="z-10 uppercase text-3xl text-white font-semibold mt-[100px] px-4 max-xms:text-2xl">
          Welcome to <span className="text-purple-500">Leadex</span>
        </p></Bounce> 
       <Bounce left> <p className="z-10  py-5 mx-14 text-2xl max-xms:text-xl max-xms:text-center capitalize text-slate-50">
          Leading with Exccellence
        </p></Bounce>
      </div>
    </>
  );
};

export default TopDesign;
