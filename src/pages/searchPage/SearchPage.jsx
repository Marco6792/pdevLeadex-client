import React, {useState} from 'react'
import ScrollToTopButton from "../../scene/ScrollToTopButton";
import FixedBottomMenu from "../../components/sections/FixedBottomMenu";
import Bar from './Bar';


const SearchPage = () => {
  return (
    <div className="w-screen h-screen mt-20">
      <Bar />
    <h1>Search changes</h1>
    <ScrollToTopButton />
    <FixedBottomMenu />
  </div>
  )
}

export default SearchPage