import React from "react";

import { Outlet } from "react-router-dom";

import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
export default function Layout() {
  return (
    <>
      <NavBar></NavBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
}
