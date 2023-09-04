import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="p-4 w-full md:max-w-lg mx-auto relative flex items-center">
      <input type="text" 
      placeholder="ask any topic"
      className="py-3 px-3 border border-blue-500 w-full rounded-md focus:outline-none"
      />
      <FaSearch className="absolute right-7 text-xl text-gray-700"/>
    </div>
  );
};

export default SearchBar;
