import React from 'react'
import { IoSend } from "react-icons/io5";

const Footer: React.FC = () => {
    return (
        <>
            <section className='w-full h-[440px] flex flex-col justify-center items-center bg-[#000] mt-20'>
                <div className='w-[90%] h-[200px] flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-start gap-4 text-white'>
                        <h1 className='text-xl font-semibold'>Exclusive</h1>
                        <h3 className='text-lg font-normal'>Subscribe</h3>
                        <p className='text-xs'>Get 10% off your first order</p>
                        <div className='w-full relative border border-gray-100'>
                            <input type="email" className='w-[90%] p-2 text-md text-gray-200 focus:outline-none' placeholder='Your email' />
                            <button className='absolute right-1 top-3 z-10'>
                                <IoSend className=' cursor-pointer' />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 text-white'>
                        <h3 className='text-xl'>Support</h3>
                        <p className='text-xs'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='text-xs'>exclusive@gmail.com</p>
                        <p className='text-xs'>+88015-88888-9999</p>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 text-white'>
                        <h3 className='text-xl'>Account</h3>
                        <ul className='flex flex-col justify-center items-start gap-4 text-xs'>
                            <li><a href="/">Cart</a></li>
                            <li><a href="/">Wishlist</a></li>
                            <li><a href="/">Shop</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 text-white'>
                        <h3 className='text-xl'>Quick Link</h3>
                        <ul className='flex flex-col justify-center items-start gap-4 text-xs'>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms Of Use</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 text-white'>
                        <h3 className='text-xl'>Download App</h3>
                        <p className='text-xs text-gray-400'>Save $3 with App New User Only</p>
                        <div>

                        </div>
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}

export default Footer