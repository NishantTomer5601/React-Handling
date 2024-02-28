import React from "react";
import Header from "./Headers/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footers/Footer";


function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout