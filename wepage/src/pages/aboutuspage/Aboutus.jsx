import React from 'react'
import AboutusCard from './AboutusCard'
import AboutusCard2 from './AboutusCard2'

function Aboutus() {
  return (
    <div className='mt-[120px]'>
      <div className="w-full my-4 flex flex-col  ">
        <h1 className="font-bold text-[2rem] md:text-[3rem] ml-[2rem] md:ml-[3rem]  tracking-tight"> Our History </h1>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <AboutusCard />
        <AboutusCard2 />
        <AboutusCard />
      </div>
    </div>
  )
}

export default Aboutus