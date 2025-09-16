import React, { useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import CategoriesCard from './CategoriesCard';


import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiTelevision } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { LuRefrigerator } from "react-icons/lu";
import { RiArmchairLine } from "react-icons/ri";

type Props = {
    id: number;
    image: any;
    title: string;
}

const CategoriesCardData: Props[] = [
    { id: 1, title: 'Smart Phones', image: <MdOutlinePhoneIphone/> },
    { id: 2, title: 'Computers', image: <RiComputerLine/> },
    { id: 3, title: 'Smart Watches', image: <BsSmartwatch/> },
    { id: 4, title: 'Cameras', image: <CiCamera/> },
    { id: 5, title: 'Headphones', image: <CiHeadphones/> },
    { id: 6, title: 'Gaming', image: <IoGameControllerOutline/> },
    { id: 7, title: 'TVs', image: <PiTelevision/> },
    { id: 8, title: 'Clothes', image: <GiClothes/> },
    { id: 9, title: 'Washing Machine', image: <GiWashingMachine/> },
    { id: 10, title: 'Refrigerators', image: <LuRefrigerator/> },
    { id: 11, title: 'Furniture', image: <RiArmchairLine/> },
]

const CategoriesProduct: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 7;

    const handleCoureselPrev = () => {
        const newIndex = currentIndex - visibleCards;
        if (newIndex < 0) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(newIndex);
        }
    };

    const handleCoureselNext = () => {
        const newIndex = currentIndex + visibleCards;
        if (newIndex >= CategoriesCardData.length) {
            setCurrentIndex(currentIndex); 
        } else {
            setCurrentIndex(newIndex);
        }
    };
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center mt-10'>
                <div className='flex flex-col justify-center items-start w-9/10'>
                    <div className="flex justify-center items-center">
                        <div className="w-[20px] h-[35px] bg-red-500 rounded-[8px]"></div>
                        <h1 className="text-red-500 ml-2">Categories</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                            <div className="mr-10 xl:mr-20">
                                <h1 className="text-xl font-semibold">Browse By Category</h1>
                            </div>
                        <div className="flex justify-center items-center gap-3">
                            <button className='w-[46px] h-[46px] bg-[#f5f5f5] border border-gray-300 rounded-full flex justify-center items-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 cursor-pointer'
                                onClick={handleCoureselPrev}
                            >
                                <GrFormPrevious className='text-lg' />
                            </button>
                            <button className='w-[46px] h-[46px] bg-[#f5f5f5] border border-gray-300 rounded-full flex justify-center items-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 cursor-pointer'
                                onClick={handleCoureselNext}
                            >
                                <GrFormNext className='text-lg' />  
                            </button>
                        </div>
                    </div>
                </div>
                <CategoriesCard CategoriesCardData={CategoriesCardData.slice(currentIndex, currentIndex + visibleCards)} />
            </div>
        </>
    )
}

export default CategoriesProduct