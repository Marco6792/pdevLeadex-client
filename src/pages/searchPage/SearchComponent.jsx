import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {}, [searchTerm]);

  const options = {
    method: "POST",
    url: "https://chatgpt-api6.p.rapidapi.com/standard-gpt",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "1aa20cf1efmsh1ad04beb066d773p14c810jsnb02c79cc0661",
      "X-RapidAPI-Host": "chatgpt-api6.p.rapidapi.com",
    },
    data: {
      conversation: [
        {
          role: "user",
          content: "what is dehydration",
        },
      ],
    },
  };
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      searchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSearch = (e) => {
  //   fetchData()
  // };

  // console.log(searchResults);
  return (
    <div className="flex flex-col max-w-xl mx-auto p-4 ">
      <div className="flex justify-between relative place-items-center">
      <textarea
        type="text"
        placeholder="Ask me any thing"
        className="py-2 px-2 focus:outline-none bg-slate-700 text-white mt-4 rounded-md border border-slate-600 w-full"
      />
      <FaSearch className="absolute right-3 top-2/4 text-slate-400"/>
      </div>
      <button
        onClick={fetchData}
        className="bg-slate-800 text-white p-4 mt-4 rounded-md"
      >
        search
      </button>

      <p className="text-white p-4 mt-4">{searchResults}</p>
    </div>
  );
};

export default SearchComponent;
