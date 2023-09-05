import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" gradient bg-blur text-white py-20 mt-20 px-10 opacity-90">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Hero Page</h1>
        <p className="text-lg mb-6">
          This is the main section of your website.
        </p>
        <button className="bg-white text-blue-500 py-2 px-9 rounded-lg shadow-md hover:bg-blue-200">
          Get Started
        </button>
      </div>
      <p className="text-white text-3xl px-10">Learning</p>
    </div>
  );
};

export default HeroSection;
