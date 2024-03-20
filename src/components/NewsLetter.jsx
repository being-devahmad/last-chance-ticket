import React from 'react'
import Vector from "../assets/Vector.png"

const NewsLetter = () => {
    return (
        <>
            <div>
                <div className='bg-[#D9D9D9] py-0 px-5 grid grid-cols-1 md:grid-cols-2 relative'>
                    <div className='ps-10 py-5' >
                        <p className='text-black font-semibold text-4xl py-2'>Join The Newsletter To Learn About <br /> Future Events</p>
                        <p className='font-medium text-gray-700'>Join the newsletter to and get 10% discount on your first <br /> ticket purchase</p>


                        <form class="max-w-sm mt-7">
                            <div class="mb-5">
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5" placeholder="Enter Email Address" required />
                            </div>
                            <button type="submit" class="text-white bg-[#FF4D00] hover:bg-black/80 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Subscribe</button>
                        </form>

                    </div>
                    <div className='md:block absolute hidden mt-10 lg:mt-0 lg:top-[-80px] md:right-6 lg-right-[180px] xl:right-[300px] md:w-[350px] lg:w-[460px]'>
                        <img src={Vector}  alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
