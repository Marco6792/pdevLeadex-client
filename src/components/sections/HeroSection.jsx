import React from 'react'
import Testing from './Testing';

const HeroSection = () => {

  const handleClick = () => {
    console.log("");
    window.location.href = "https://pdvleadex.netlify.app/courses";
  };

  return (
    <div className="hero text-white py-20 mt-20 px-3">
    <h1 className="text-4xl font-bold mb-4">Welcome to my the Hero Page</h1>
    <p className="text-lg mb-6">This is the main section of your website.</p>
    <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-200"
    onClick={handleClick}
    >
      Get Started
    </button>
    <Testing />
  </div>
  )
}

export default HeroSection