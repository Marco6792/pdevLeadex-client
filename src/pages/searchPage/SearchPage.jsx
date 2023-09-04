import React from 'react'
import ScrollToTopButton from "../../scene/ScrollToTopButton";
import FixedBottomMenu from "../../components/sections/FixedBottomMenu";
import SearchBar from './searchBar';

const SearchPage = () => {
  return (
    <div className="w-screen h-screen mt-20">
    <SearchBar />
    <h1>Search page here</h1>
    <ScrollToTopButton />
    <FixedBottomMenu />
  </div>
  )
}

export default SearchPage