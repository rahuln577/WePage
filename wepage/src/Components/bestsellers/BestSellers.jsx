import React from 'react'

import BestSellersCard from './BestSellersCard'
import model1 from '../../assets/model1.jpg'
import model3 from '../../assets/model3.jpg'

function BestSellers() {
  return (
    <div className="no-scrollbar overflow-x-scroll flex flex-row w-full">
  
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

  )
}

export default BestSellers