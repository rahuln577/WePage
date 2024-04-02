import React from 'react'
import {useRef} from "react"
import BestSellersCard from './BestSellersCard'
import model1 from '../../assets/model1.jpg'
import model3 from '../../assets/model3.jpg'

function BestSellers() {
  let div=useRef();
  let scroll=useRef();

  function sc()
  {
    let cur=div.current.scrollLeft
    let total=div.current.scrollWidth-div.current.clientWidth
    let val=((cur/total)*100)
    scroll.current.style.width=val.toString()+'%'
  }
  return (
    <div className="my-[4rem] w-full h-full bg-gray-50">   
    <h1 className="font-bold text-[3rem] md:text-[5.5rem] ml-[2rem] md:ml-[3rem] tracking-tight">BEST SELLERS</h1>
      <div className="w-full">
      <div className="no-scrollbar overflow-x-scroll flex flex-row w-full  h-[41rem] " onScroll={sc} ref={div}>
  
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
      <BestSellersCard image1={model1} image2={model3} />
    
      </div>
  
      <div className="w-[90%] h-[0.15rem] bg-gray-300 mx-auto">
      <div className="w-[0%] bg-black h-[0.15rem]" ref={scroll}></div>
      </div>

    </div>

    </div>
 
    

  )
}

export default BestSellers