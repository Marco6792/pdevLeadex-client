import React from 'react'
import FixedBottomMenu from '../components/sections/FixedBottomMenu'
import ScrollToTopButton from '../scene/ScrollToTopButton'

const AboutPage = () => {
  return (
    <div className="flex h-screen justify-center items-center text-white">
      <h1>About page here</h1>
      <ScrollToTopButton />
      <FixedBottomMenu />
    </div>
  )
}

export default AboutPage