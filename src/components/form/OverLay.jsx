import React from "react";

const OverLay = () => {
  return (
    <div className="overlay fixed inset-0 z-50 w-screen h-screen bg-black opacity-95 flex items-center justify-center flex-col overflow-hidden pointer-events-none">
      <div className="spinner rounded-full h-12 w-12 animate-ping bg-green-600">
      </div>
        <p className="mt-8 text-slate-300">Loading...</p>
    </div>
  );
};

export default OverLay;
