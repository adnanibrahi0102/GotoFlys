import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
