import React from "react";

const OverLay = () => {
  return (
    <div className="overlay fixed inset-0 z-50 w-screen h-screen bg-black opacity-95 flex items-center justify-center flex-col overflow-hidden pointer-events-none">
      <div className="spinner rounded-full h-12 w-12 animate-ping bg-gray-600"></div>
    </div>
  );
};

export default OverLay;
