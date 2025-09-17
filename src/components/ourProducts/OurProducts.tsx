import React, { useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import camera from '../../assets/ourproduct/camera.png'
import car from '../../assets/ourproduct/car.png'
import computer from '../../assets/ourproduct/comp.png'
import dog from '../../assets/ourproduct/dog.png'
import jostik from '../../assets/ourproduct/jostik.png'
import noutbook from '../../assets/ourproduct/noutbook.png'
import mask from '../../assets/ourproduct/mask.png'
import jekit from '../../assets/ourproduct/jekit.png'
import butsa from '../../assets/ourproduct/butsa.png'
import OurProductCard from './OurProductCard';


type Props = {
    id: number;
    title: string;
    image: string;
    price: number;
    discount: number;
    rating: number;
    sales?: number;
}

const OurProductsCardDB: Props[] = [
    { id: 1, title: "CANON EOS DSLR Camera", image: camera, price: 150, discount: 200.00, rating: 4.5 },
    { id: 2, title: "Kids Electric Car", image: car, price: 150, discount: 200.00, rating: 4.5 },
    { id: 3, title: "ASUS FHD Gaming Laptop", image: computer, price: 150, discount: 200.00, rating: 3.5 },
    { id: 4, title: "Breed Dry Dog Food", image: dog, price: 150, discount: 200, rating: 4.8 },
    { id: 5, title: "GP11 Shooter USB Gamepad", image: jostik, price: 150, discount: 200, rating: 5.0 },
    { id: 6, title: "ASUS FHD Gaming Laptop", image: noutbook, price: 150, discount: 200, rating: 4.5 },
    { id: 7, title: "Curology Product Set ", image: mask, price: 150, discount: 200, rating: 5.0 },
    { id: 8, title: "Jr. Zoom Soccer Cleats", image: butsa, price: 150, discount: 200, rating: 4.8 },
    { id: 9, title: "Quilted Satin Jacket", image: jekit, price: 150, discount: 200,  rating: 4.5 },
    { id: 10, title: "Kids Electric Car", image: car, price: 150, discount: 200, rating: 4.5 },
]

const OurProducts: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const visibleCards = 5;

    const handleCoureselPrev = () => {
        const newIndex = currentIndex - visibleCards;
        if (newIndex < 0) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(newIndex);
        }
    }

    const handleCoureselNext = () => {
        const newIndex = currentIndex + visibleCards;
        if (newIndex >= OurProductsCardDB.length) {
            setCurrentIndex(currentIndex); 
        } else {
            setCurrentIndex(newIndex);
        }
    }
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center mt-10'>
                <div className='flex flex-col justify-center items-start w-9/10'>
                    <div className="flex justify-center items-center">
                        <div className="w-[20px] h-[35px] bg-red-500 rounded-[8px]"></div>
                        <h1 className="text-red-500 ml-2">Our Products</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="mr-10 xl:mr-20">
                            <h1 className="text-xl font-semibold">Explore Our Products</h1>
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
                    <OurProductCard OurProductsCardDB={OurProductsCardDB.slice(currentIndex, currentIndex + visibleCards)} />
                </div>
            </div>
        </>
    )
}

export default OurProducts