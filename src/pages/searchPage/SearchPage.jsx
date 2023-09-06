import React, {useState} from 'react'
import ScrollToTopButton from "../../scene/ScrollToTopButton";
import FixedBottomMenu from "../../components/sections/FixedBottomMenu";
import SearchComponent from './SearchComponent';


const SearchPage = () => {
  return (
    <div className="w-screen h-screen mt-20 ">
    <SearchComponent />
    <ScrollToTopButton />
    <FixedBottomMenu />
  </div>
  )
}

export default SearchPage