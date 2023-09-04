import React from 'react'
import FixedBottomMenu from '../components/sections/FixedBottomMenu'
import ScrollToTopButton from '../scene/ScrollToTopButton'

const ContactPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
    <h1>Contact Page Here</h1>
    <ScrollToTopButton />
    <FixedBottomMenu />
  </div>
  )
}

export default ContactPage