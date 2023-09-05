import React from "react";

const OverLay = () => {
  return (
    <div className="overlay fixed inset-0 z-50 w-screen h-screen bg-black opacity-80 flex items-center justify-center flex-col overflow-hidden">
      <div className="spinner rounded-full h-12 w-12 animate-ping bg-green-400"></div>
      <p className="text-white mt-10">Loading..</p>
    </div>
  );
};

export default OverLay;
