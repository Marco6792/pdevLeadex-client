import React from 'react'
import ScrollToTopButton from "../scene/ScrollToTopButton";
import FixedBottomMenu from ".././components/sections/FixedBottomMenu";

const SearchPage = () => {
  return (
    <div className="flex h-screen justify-center items-center text-white">
    <h1>Search page here</h1>
    <ScrollToTopButton />
    <FixedBottomMenu />
  </div>
  )
}

export default SearchPage