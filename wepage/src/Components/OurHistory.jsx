import React from 'react'
import historyvid from '../assets/main2.mp4'

function OurHistory() {
  return (
      <div className='w-[100%] relative h-[75vh] overflow-hidden '>
          <video muted='true' type='video/mp4' autoPlay="true" loop="true" src={historyvid} className='w-full h-full relative object-fill'> </video>
          <div className='w-full absolute lg:left-10 lg:bottom-10 left-4 bottom-10 z-10 flex flex-col items-start justify-center gap-4 p-2'>
              <h1 className='text-white font-extrabold  lg:text-[5rem] text-[3rem] leading-none'>
                  Our History
              </h1>
              <h3 className='text-white leading-none text-[1.5rem] '>Original Tailoring with rich history and experience</h3>
              <button className='w-[8rem] h-[2rem]  lg:w-[10rem] lg:h-[3rem] bg-white text-black font-semibold rounded-[0.2rem] text-[1rem]'>CHECK OUT </button>
          </div>
      </div>
  )
}

export default OurHistory