import React from 'react';
import reviewStars from "../assets/reviewStars.png";
import singleStar from "../assets/singleStar.png";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

const Reviews = () => {
    const reviews = [
        {
            img: reviewStars,
            title: "Excellent Service",
            description: "Excellent service, trusted people. Sometimes fees are too expensive but okay. William Castellanos",
            publishedAt: "3 days ago"
        },
        {
            img: reviewStars,
            title: "Excellent Service",
            description: "Excellent service, trusted people. Sometimes fees are too expensive but okay. William Castellanos",
            publishedAt: "3 days ago"
        },
        {
            img: reviewStars,
            title: "Excellent Service",
            description: "Excellent service, trusted people. Sometimes fees are too expensive but okay. William Castellanos",
            publishedAt: "3 days ago"
        },
        {
            img: reviewStars,
            title: "Excellent Service",
            description: "Excellent service, trusted people. Sometimes fees are too expensive but okay. William Castellanos",
            publishedAt: "3 days ago"
        }
    ];


    return (
        <div className='bg-[#EDEDED] py-12 px-5 lg:mb-20'>
            <div className='flex flex-col'>
                <p className='text-5xl text-center font-semibold'>Excellent</p>
                <div className='flex justify-center items-center mt-4'>
                    <img src={reviewStars} alt="" />
                </div>
                <p className='text-2xl text-center mt-2 font-semibold'>Based on <span className='underline'>1,559 reviews</span></p>
                <div className='flex justify-center font-semibold items-center mt-2'>
                    <img src={singleStar} alt="" />
                    <p className='text-3xl mt-4 text-[42px]'>Trustpilot</p>
                </div>
            </div>
            <div className='mt-10 flex justify-between items-center'>
                <div className='ms-2 px-1 py-1 rounded-md' style={{ border: "1px solid black" }}>
                    <img src={arrowLeft} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 h-[210px] overflow-hidden'>
                    {
                        reviews.map((review) => {
                            const { img, title, description, publishedAt } = review
                            return (
                                <>
                                    <div className='w-[200px] lg:w-[315px] h-[300px]'>
                                        <img src={img} width={160} alt="" />
                                        <p className='text-xl font-semibold my-3'>{title}</p>
                                        <p className='font-normal'>{description} ,
                                            <span> {publishedAt} </span> </p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='mr-2 px-1 py-1 rounded-md' style={{ border: "1px solid black" }}>
                    <img src={arrowRight} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Reviews;
