import React from 'react'

import BestSellersCard from './BestSellersCard'
import model1 from '../../assets/model1.jpg'
import model3 from '../../assets/model3.jpg'

function BestSellers() {
  return (
      <div className='w-[100%] h-full overflow-x-scroll overflow-hidden relative gap-4 flex flex-row items-center justify-center mt-10 ml-4 no-scrollbar'>
          <BestSellersCard image1={model1} image2={model3} />
          <BestSellersCard image1={model1} image2={model3} />
          <BestSellersCard image1={model1} image2={model3} />
          <BestSellersCard image1={model1} image2={model3} />
          <BestSellersCard image1={model1} image2={model3} />

    </div>
  )
}

export default BestSellers