import React from 'react'
import searchIcon from "../assets/magnifying-glass-isolated-icon-vector-illustration-png 1.png"
import img1 from "../assets/img3 1.png"
import img2 from "../assets/img2 1.png"
import img3 from "../assets/img1 1.png"


const HeroSection = () => {
  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center space-y-8 p-5">
        <p className='text-white text-center'>Hurray! You are in the right place* 100K+ social media followers *We value every custome</p>
        <p className='text-white text-4xl text-center'>Purchase Tickets For A</p>
        <p className='text-white text-5xl text-center'>Semi Final 1 - T20 Cricket World Cup</p>
        <p className='text-white'>15 MAR, 2024</p>
        <p className='text-white text-center'>Your next best-night-ever is waiting. And we have the tickets.</p>
        <div className="w-full md:w-2/3 flex h-26  rounded-full p-2  bg-[#8F8F8F]">
          <div className="w-full flex h-15 rounded-full border border-white bg-[#D9D9D9] px-3 py-6 text-sm" style={{ border: "2px solid grey" }}>
            <input
              className="flex h-10 w-[85%] rounded-full border-none  bg-[#D9D9D9] px-3 py-2 text-sm placeholder:text-[#686868] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Search For An Event Here"
            ></input>
            <div className='bg-[#4AB9E2] w-[15%] h-15 rounded-full flex justify-center items-center'>
              <img src={searchIcon} className='w-[30%]' alt="logo" />
            </div>
          </div>
        </div>

      </div>
      <div className='bg-black'>
        <p className='text-3xl text-white ms-12 mb-4'>Top Event Lists</p>

        <div className='flex justify-center items-center'>
          <div className="relativerounded-md">
            <img
              src={img2}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />


          </div>
          <div className="relative rounded-md">
            <img
              src={img1}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />


          </div>
          <div className="relative rounded-md">
            <img
              src={img3}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />


          </div>
        </div>
      </div>

    </>
  )
}

export default HeroSection
