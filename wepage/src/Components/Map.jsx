import React from 'react'

export default function Map() {
  return (
      <div className="bg-black w-full h-full">
          <h1 className="mb-[2rem] font-bold text-[3rem] md:text-[5.5rem] ml-[2rem] md:ml-[3rem] text-white ">LOCATION</h1>
          <div className="bg-black h-[33rem] ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62214.32245860425!2d77.50639962361234!3d12.946547515666197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d12.975259!2d77.5275458!4m5!1s0x3bae159b906bbd8f%3A0x3a1cf4a64c39a1c6!2sSignode%20Men&#39;s%20Wear%2C%20545%2C%209th%20Cross%20Rd%2C%207th%20Block%20West%2C%20Jayanagar%206th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560070!3m2!1d12.9249937!2d77.57614509999999!5e0!3m2!1sen!2sin!4v1711959702606!5m2!1sen!2sin" width="92%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{marginBottom:"1rem",margin:"auto"}}></iframe>
          </div>
    </div>
  )
}
