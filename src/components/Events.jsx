import React from 'react'
import downArrow from "../assets/downArrow.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const Events = () => {
    const content = [
        {
            image: img1,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
        {
            image: img2,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
        {
            image: img3,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
        {
            image: img1,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
        {
            image: img2,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
        {
            image: img3,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        }, {
            image: img1,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
        {
            image: img2,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
        {
            image: img3,
            name: "Billy Joel & Stevie Nicks",
            address: "New York, United States",
            price: "from $80"
        },
    ]
    

    return (
        <>
            <div className='container mx-auto max-w-full  md:mb-10 mb-6'>
                <p className='text-black text-3xl my-6 lg:ps-12 mx-4 mb-4 text-center md:text-start'>Featured Events On Sale Today</p>
                <div className='flex justify-between flex-wrap  gap-4 mx-4 mb-10 text-xl'>
                    <p className='text-black  lg:ps-10'>Filter By :</p>
                    <div className='flex gap-4 lg:ap-10'>
                        <a href='/' className='text-[#29ADA5] font-bold font-mono underline'>ALL</a>
                        <a href="" className='text-[#29ADA5] font-bold font-mono underline'>Sports</a>
                        <a href="" className='text-[#29ADA5] font-bold font-mono underline'>Concerts</a>
                        <a href="" className='text-[#29ADA5] font-bold font-mono underline'>Festivals</a>
                        <a href="" className='text-[#29ADA5] font-bold font-mono underline'>Theaters</a>
                    </div>
                    <div className='flex lg:mr-10 w-[100%] justify-between px-1.5 items-center xl:w-[515px]' style={{ border: "2px solid black" }}>
                        All Events
                        <span>
                            <img src={downArrow} className='w-4 h-4' alt="" />
                        </span>
                    </div>
                </div>
                {/* Categories */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3'>
                    {
                        content.map((val) => {
                            const { image, address, name, price } = val
                            return (
                                <div class="max-w-sm bg-white shadow-md md:shadow-none rounded-lg  mx-auto mb-4 md:mb-0">
                                    <a href="#">
                                        <img class="rounded-t-lg w-full" src={image} alt="" />
                                    </a>
                                    <div class="p-5 flex flex-col items-center">
                                        <a href="#">
                                            <h5 class="mb-1 text-2xl font-semibold tracking-tight text-gray-900">{name}</h5>
                                        </a>
                                        <p class="mb-1 font-semibold text-gray-700 ">{address}</p>
                                        <p class="mb-1 text-[#29ADA5] font-semibold">
                                            {price}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Events
