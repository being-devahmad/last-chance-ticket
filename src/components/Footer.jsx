import React from 'react'
import visa from "../assets/visa.png"
import mastercard from "../assets/mastercard.png"
import applePay from "../assets/apple-pay.png"
import googlePay from "../assets/google-pay.png"
import paypal from "../assets/paypal.png"
import stripe from "../assets/stripe.png"
import certification from "../assets/certification.png"
import youtube from "../assets/youtube.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import pinterest from "../assets/pinterest.png"
import reviewsImg from "../assets/reviewsImg.png"
import newspaperImg from "../assets/newspaperImg.png"


const Footer = () => {
    return (
        <>
            <div className=' w-[100%] bg-black py-5 px-10 '>
                <div className='mx-4 grid grid-cols-1 md:grid-cols-2' >
                    <div >
                        <p className='text-4xl text-white '>PAYMENT</p>
                        <div className='py-5 flex flex-wrap'>
                            <img src={visa} className='w-20' alt="" />
                            <img src={mastercard} className='w-20' alt="" />
                            <div className='bg-[#D9D9D9] mr-2'>
                                <img src={applePay} className='w-20' alt="" />
                            </div>
                            <div className='bg-[#D9D9D9] mr-2 flex items-center'>
                                <img src={googlePay} className='w-20' alt="" />
                            </div>
                            <div className='bg-[#D9D9D9] mr-2 flex items-center'>
                                <img src={paypal} className='w-20' alt="" />
                            </div>
                            <div className='bg-[#D9D9D9] mr-2 flex items-center'>
                                <img src={stripe} className='w-20' alt="" />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <img src={certification} alt="" />
                            </div>
                            <div className='text-white'>
                                <p className='text-2xl'>OUR WARRANTY</p>
                                <p>IF YOU ARE NOT 100% SATUSFIED WE <br /> WILL <br /> REFUND YOU 100% OF YOUR ORDER.</p>
                            </div>
                        </div>
                        <div className='text-white'>
                            <p>ArtsDot.com <span className='ps-6'>Copyright 2007 - 2024</span> </p>
                            <p className='text-[#858181] font-semibold' >Privacy Policies <span className='ps-4'>Return Policies</span></p>
                            <p className='text-[#858181] font-semibold'> Terms of service <span className='ps-4'>F.A.Q 1/2 F.A.Q 2/2</span></p>
                            <p className='text-[#858181] font-semibold'>Contact@ArtsDot.com</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-start mt-8 md:mt-0 md:items-center justify-center' >
                        <p className='text-4xl text-white '>SOCIAL MEDIA</p>
                        <div className='flex flex-wrap gap-2 mt-3'>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={pinterest} alt="" />
                            <img src={youtube} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                        <p className='text-4xl text-white mt-3'>PARTNERS</p>
                        <div className='my-4'>
                            <img src={newspaperImg} alt="" />
                        </div>
                        <div>
                            <img src={reviewsImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
