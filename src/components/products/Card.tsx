import React from 'react'
import { FaStar } from "react-icons/fa";
// import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

type CardProps = {
    id: number;
    title: string;
    image: any;
    price: number;
    rating: number;
    discount: number;
    sales?: number | string;
    color?: string[];
    cardHover: number | null;
    setCardHover: React.Dispatch<React.SetStateAction<number | null>>;
};

const Card: React.FC<CardProps> = ({ id, title, image, price, discount, rating, sales = '', color = [], setCardHover, cardHover }) => {
    const isHovered = cardHover === id;
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center'>
                <div key={id} className='w-full flex flex-col justify-center items-start rounded-lg p-4  cursor-pointer transition-all duration-300'
                    onMouseEnter={() => setCardHover(id)}
                    onMouseLeave={() => setCardHover(null)}
                >
                    <div
                        className='w-[250px] relative flex justify-center items-center bg-[#F5F5F5] rounded-lg p-4 mb-4'>
                        <img src={image} alt={title} className='w-[270px] h-[250px] object-contain mb-4' />
                        <div className='absolute top-2 left-2'>
                            {sales && (
                                typeof sales === "number" ? (
                                    <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                                        {sales}%
                                    </div>
                                ) : (
                                    <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                                        {sales}
                                    </div>
                                )
                            )}

                        </div>
                        {
                            isHovered && (
                                <button className='absolute bottom-0 w-full flex justify-center items-center bg-[#000] text-white p-2 rounded-b-lg cursor-pointer'>
                                    Add to Card
                                </button>
                            )
                        }
                        <div className='absolute top-0 right-0 flex flex-col justify-center items-center gap-2 p-2'>
                            <button className='w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300'>
                                <CiHeart className='text-lg' />
                            </button>

                            <button className='w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300'>
                                <IoIosEye className='text-lg' />
                            </button>
                        </div>
                    </div>
                    <h3 className='text-sm font-semibold mb-2 text-start'>{title}</h3>
                    <div className='w-full flex justify-start items-center mb-2 gap-2'>
                        <span className='text-lg font-normal text-red-500'>${price}</span>
                        <span className='text-sm line-through text-gray-400'>${discount}</span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex justify-start items-center gap-1'>
                            <FaStar className='text-[#FFAD33]' />
                            <FaStar className='text-[#FFAD33]' />
                            <FaStar className='text-[#FFAD33]' />
                            <FaStar className='text-[#FFAD33]' />
                            <FaStarHalfAlt className='text-[#FFAD33]' />
                        </div>
                        <div className='text-xs text-gray-500'>({rating})</div>
                    </div>
                    {/* color product */}
                    {color.length > 0 && (
                        <div className="flex gap-2 mt-2">
                            {color.map((c, idx) => (
                                    <span
                                        key={idx}
                                        className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
                                        style={{ backgroundColor: c }}
                                    ></span>
                                ))}
                        </div>
                    )}


                </div>
            </div>
        </>
    )
}

export default Card