import React from 'react'

import game from '../../assets/featured/game.png'
import calonka from '../../assets/featured/calonka.png'
import gucci from '../../assets/featured/gucci.png'
import women from '../../assets/featured/women.png'

import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerServiceFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";

const Featured: React.FC = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-10'>
                <div className="w-9/10 flex flex-col justify-center items-start ">
                    <div className="flex justify-center items-center">
                        <div className="w-[20px] h-[35px] bg-red-500 rounded-[8px]"></div>
                        <h1 className="text-red-500 ml-2">Featured</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className=" flex justify-center items-center">
                            <div className="mr-10 xl:mr-20">
                                <h1 className="text-xl font-semibold">New Arrival</h1>
                            </div>
                        </div>
                    </div>
                    {/* element colums rows bilan joylashtirish */}
                    <div className='w-full h-auto mt-10 mb-10'>
                        <div className='flex justify-between  xl:justify-around items-center'>
                            <div className='w-[570px] h-[600px] relative flex justify-center bg-[#000] rounded-md'>
                                <img src={game} alt="" />
                                <div className='w-[50%] absolute bottom-4 left-5 text-white'>
                                    <h3 className='text-lg'>PlayStation 5</h3>
                                    <p className='text-xs'>Black and White version of the PS5 coming out on sale.</p>
                                    <button className='underline text-md cursor-pointer '>Shop Now</button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='w-[570px] h-[284px relative flex justify-end items-center bg-[#000] rounded-md'>
                                    <div className='w-[50%] absolute left-3 top-1/2 text-white'>
                                        <h3 className='text-lg'>Women’s Collections</h3>
                                        <p className='text-xs'>Featured woman collections that give you another vibe.</p>
                                        <button className='underline text-md cursor-pointer '>Shop Now</button>
                                    </div>
                                    <img src={women} alt="" className='rounded-md' />
                                </div>
                                <div className='flex justify-between items-center gap-4'>
                                    <div className='w-[270px] h-[284px] relative flex justify-center items-center bg-[#000] rounded-md'>
                                        <img src={calonka} alt="" />
                                        <div className='w-[70%] absolute left-3 bottom-4 text-white'>
                                            <h3 className='text-lg'>Speakers</h3>
                                            <p className='text-xs'>Amazon wireless speakers</p>
                                            <button className='underline text-md cursor-pointer '>Shop Now</button>
                                        </div>
                                    </div>
                                    <div className='w-[270px] h-[284px] relative flex justify-center items-center bg-[#000] rounded-md'>
                                        <img src={gucci} alt="" />
                                        <div className='w-[70%] absolute left-3 bottom-4 text-white'>
                                            <h3 className='text-lg'>Perfume</h3>
                                            <p className='text-xs'>GUCCI INTENSE OUD EDP</p>
                                            <button className='underline text-md cursor-pointer '>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* serveslar */}
                    <div className='w-[70%] h-auto flex justify-between items-center mx-auto mb-10'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-[80px] h-[80px] flex justify-center items-center bg-gray-100 rounded-full'>
                                <div className='w-[60px] h-[60px] flex justify-center items-center bg-[#000] rounded-full'>
                                    <CiDeliveryTruck className='text-white text-4xl' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-lg font-semibold'>FREE AND FAST DELIVERY</h3>
                                <p className='text-xs'>Free delivery for all orders over $140</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-[80px] h-[80px] flex justify-center items-center bg-gray-100 rounded-full'>
                                <div className='w-[60px] h-[60px] flex justify-center items-center bg-[#000] rounded-full'>
                                    <RiCustomerServiceFill className='text-white text-3xl' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-lg font-semibold'>24/7 CUSTOMER SERVICE</h3>
                                <p className='text-xs'>Friendly 24/7 customer support</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-[80px] h-[80px] flex justify-center items-center bg-gray-100 rounded-full'>
                                <div className='w-[60px] h-[60px] flex justify-center items-center bg-[#000] rounded-full'>
                                    <SiAdguard className='text-white text-3xl' />
                                </div>
                            </div>
                             <div className='text-center'>
                                <h3 className='text-lg font-semibold'>MONEY BACK GUARANTEE</h3>
                                <p className='text-xs'>We reurn money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured