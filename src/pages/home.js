import React from 'react'
import HeroSection from "../components/heroSection/HeroSection"
import Sidebar from "../components/SideBar/Sidebar"
import {useState} from "react";
import Navbar from "../components/Navbar/Navbar"


const Home=()=> {

     const[isOpen,setIsOpen]=useState(false);
     const toggle=()=>{
     setIsOpen(!isOpen);
  }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <HeroSection/>
        </>
    )
}

export default Home;