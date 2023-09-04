import React from "react";
import { FaSearch } from "react-icons/fa";


const Bar = () => {
  return (
    <div className="p-4 w-full md:max-w-lg mx-auto relative flex items-center">
      <input
        type="text"
        placeholder="ask any topic"
        className="py-4 px-3 border border-slate-500 w-full rounded-md focus:ring-1 ring-offset-1 focus:outline-none bg-gray-900 text-white focus:border-0"
      />
      <FaSearch className="absolute right-7 text-xl text-gray-700 " />
    </div>
  );
};

export default Bar;
