import React from 'react'

export default function Map() {
  return (
      <div className="bg-black w-full h-full" id='Location'>
          <h1 className="mb-[2rem] font-bold text-[3rem] md:text-[5.5rem] ml-[2rem] md:ml-[3rem] text-white ">LOCATION</h1>
          <div className="bg-black h-[33rem] ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7312494282123!2d77.5735700752806!3d12.924987015898115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159b906bbd8f%3A0x3a1cf4a64c39a1c6!2sSignode%20Men&#39;s%20Wear!5e0!3m2!1sen!2sin!4v1711992224098!5m2!1sen!2sin" width="92%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{marginBottom:"1rem",margin:"auto"}}></iframe>
          
          </div>
    </div>
  )
}
