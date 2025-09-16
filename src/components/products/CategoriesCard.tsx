import React, { useState } from 'react'


type Props = {
    id: number;
    image: any;
    title: string;
}

type CardProps = {
    CategoriesCardData: Props[];
}

const CategoriesCard: React.FC<CardProps> = ({ CategoriesCardData }) => {
    const [activeId, setActiveId] = useState<number | null>(null)

    const handleClick = (id: number) => {
        setActiveId((prev) => (prev === id ? null : id))
    }
    return (
        <>
            <div className='w-full flex justify-center items-center mt-10 mb-10'>
                <div className='w-9/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6'>
                    {CategoriesCardData.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <div
                                key={item.id}
                                role="button"
                                tabIndex={0}
                                onClick={() => handleClick(item.id)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleClick(item.id);
                                    }
                                }}
                                className={`w-full h-[130px] rounded-lg border flex flex-col justify-center items-center transition-all duration-300 cursor-pointer
                ${isActive
                                        ? 'bg-[#DB4444] text-white border-[#DB4444]'
                                        : 'bg-white text-gray-700 hover:bg-[#DB4444] hover:text-white'}`}
                            >
                                <div className={`w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl mb-2
                  ${isActive ? 'bg-white text-red-500' : 'bg-[#f5f5f5] text-red-500'}`}>
                                    {item.image}
                                </div>
                                <h1 className="text-sm font-medium">{item.title}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default CategoriesCard