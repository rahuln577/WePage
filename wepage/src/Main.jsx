import React from 'react'
import Navbar from "./Components/Navbar";
import MainVideo from "./Components/MainVideo";
import Showcase from "./Components/Showcase";
import OurHistory from "./Components/OurHistory";
import BestSellers from "./Components/bestsellers/BestSellers";
import Footer from "./Components/Footer";
import Map from "./Components/Map"

function Main() {
  let st=0;
  window.addEventListener("scroll",()=>{
    let cur=window.scrollY
    if(cur>st){
    }
    else if(st>cur){
    }
    st=cur;
  })
  return (
      <>
          <MainVideo />
          <Showcase />
          <OurHistory />
          <BestSellers />
          <Map/>
    </>
  )
}

export default Main