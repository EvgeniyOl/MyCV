import React from "react";
import s from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={s.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
