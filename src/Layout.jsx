import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import TopBanner from "./components/TopCallBanner";

const Layout = () => {
  return (
    <>
      <div className="hidden md:block">
        <Navigation />
      </div>

      <TopBanner />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
