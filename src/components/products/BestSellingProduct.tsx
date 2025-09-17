import React, { useState } from 'react'

import sales from '../../assets/sales/sales.png'
import sales_1 from '../../assets/sales/sales_1.png'
import sales_2 from '../../assets/sales/sales_2.png'
import sales_3 from '../../assets/sales/sales_3.png'
import sales_4 from '../../assets/sales/sales_4.png'
import sales_5 from '../../assets/sales/sales_5.png'
import sales_6 from '../../assets/sales/sales_6.png'
import sales_7 from '../../assets/sales/sales_7.png'
import sales_8 from '../../assets/sales/sales_8.png'
import sales_9 from '../../assets/sales/sales_9.png'
import sales_10 from '../../assets/sales/sales_10.png'
import sales_11 from '../../assets/sales/sales_11.png'
import sales_12 from '../../assets/sales/sales_12.png'
import sales_13 from '../../assets/sales/sales_13.png'
import BestSellingProductCard from './BestSellingProductCard'

type Props = {
    id: number;
    image: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
}



const BestSellingDB: Props[] = [
    { id: 1, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 1160, image: sales, rating: 5.0 },
    { id: 2, title: 'AK-900 Wired Keyboard', price: 960, discount: 160, image: sales_1, rating: 4.0 },
    { id: 3, title: 'IPS LCD Gaming Monitor', price: 370, discount: 400, image: sales_2, rating: 4.5 },
    { id: 4, title: 'S-Series Comfort Chair ', price: 365, discount: 400, image: sales_3, rating: 4.7 },
    { id: 5, title: 'The north coat', price: 260, discount: 360, image: sales_4, rating: 5.0 },
    { id: 6, title: 'Gucci duffle bag', price: 960, discount: 1160, image: sales_5, rating: 3.8 },
    { id: 7, title: 'RGB liquid CPU Cooler', price: 160, discount: 170, image: sales_6, rating: 5.0 },
    { id: 8, title: 'Small BookSelf', price: 360, discount: 390, image: sales_7, rating: 4.2 },
    { id: 9, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_8, rating: 5.0 },
    { id: 10, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_9, rating: 3.5 },
    { id: 11, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_10, rating: 3.2 },
    { id: 12, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_11, rating: 5.0 },
    { id: 13, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_12, rating: 4.0 },
    { id: 14, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_13, rating: 4.6 },
]

const BestSellingProduct: React.FC = () => {
    const [showButton, setShowButton] = useState(false)
    const [BestSelling, setBestSelling] = useState(BestSellingDB.slice(0, 5));

    const handleShowButton = () => {
        if (!showButton) {
            setShowButton(true)
            setBestSelling(BestSellingDB)
        } else {
            setShowButton(false)
            setBestSelling(BestSellingDB.slice(0, 5))
        }


    }

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-start w-9/10'>
                    <div className="flex justify-center items-center">
                        <div className="w-[20px] h-[35px] bg-red-500 rounded-[8px]"></div>
                        <h1 className="text-red-500 ml-2">This Month</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="mr-10 xl:mr-20">
                            <h1 className="text-xl font-semibold">Best Selling Products</h1>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            {
                                !showButton && (
                                    <button onClick={handleShowButton} className="w-[159px] h-[56px] bg-[#DB4444] rounded-lg text-white cursor-pointer hover:bg-transparent hover:border border-[#DB4444] hover:text-[#DB4444] transition-all duration-300">Veiw All</button>
                                )
                            }
                        </div>
                    </div>
                    <BestSellingProductCard BestSelling={BestSelling} />
                    <div className='w-full flex justify-center items-center mt-4 mb-10'>
                        {showButton && (
                            <button onClick={handleShowButton} className="w-[159px] h-[56px] bg-[#DB4444] rounded-lg text-white cursor-pointer mb-10 hover:bg-transparent hover:border border-[#DB4444] hover:text-[#DB4444] transition-all duration-300">Show Less</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSellingProduct