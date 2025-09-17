import type React from "react";
import SalesProductCard from "./SalesCard";
import { useEffect, useState } from "react";

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


type Props = {
    id: number;
    image: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
    sales: number;
}


const SalesCard: Props[] = [
    { id: 1, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 1160, image: sales, rating: 5.0, sales: 40 },
    { id: 2, title: 'AK-900 Wired Keyboard', price: 960, discount: 160, image: sales_1, rating: 4.0, sales: 35 },
    { id: 3, title: 'IPS LCD Gaming Monitor', price: 370, discount: 400, image: sales_2, rating: 4.5, sales: 30 },
    { id: 4, title: 'S-Series Comfort Chair ', price: 365, discount: 400, image: sales_3, rating: 4.7, sales: 25 },
    { id: 5, title: 'The north coat', price: 260, discount: 360, image: sales_4, rating: 5.0, sales: 30 },
    { id: 6, title: 'Gucci duffle bag', price: 960, discount: 1160, image: sales_5, rating: 3.8, sales: 35 },
    { id: 7, title: 'RGB liquid CPU Cooler', price: 160, discount: 170, image: sales_6, rating: 5.0, sales: 25 },
    { id: 8, title: 'Small BookSelf', price: 360, discount: 390, image: sales_7, rating: 4.2, sales: 20 },
    { id: 9, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_8, rating: 5.0, sales: 25 },
    { id: 10, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_9, rating: 3.5, sales: 25 },
    { id: 11, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_10, rating: 3.2, sales: 25 },
    { id: 12, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_11, rating: 5.0, sales: 25 },
    { id: 13, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_12, rating: 4.0, sales: 25 },
    { id: 14, title: 'HAVIT HV-G92 Gamepad', price: 120, discount: 160, image: sales_13, rating: 4.6, sales: 25 },
]

const TodayProductCard: React.FC = () => {
    const [showButton, setShowButton] = useState(false)
    const [SliceDB, setSliceDB] = useState(SalesCard.slice(0, 5))

    const [days, setDays] = useState(0)
    const [hourse, setHourse] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)

    const formatingZero = (num: number) => num < 10 ? `0${num}` : num

    useEffect(() => {
        const deadline = new Date('2025-09-22 23:59:59').getTime()

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = deadline - now



            if (distance <= 0) {
                clearInterval(interval)
                setDays(0)
                setHourse(0)
                setMinute(0)
                setSecond(0)
            }

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHourse(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            setMinute(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)))
            setSecond(Math.floor(distance % (1000 * 60) / 1000))
        }, 1000);

        return () => clearInterval(interval)

    }, [])


    const handleShowButton = () => {
        if (!showButton) {
            setShowButton(true)
            setSliceDB(SalesCard)
        } else {
            setShowButton(false)
            setSliceDB(SalesCard.slice(0, 5))
        }
    }
    return (
        <>
            <section className="w-full flex flex-col justify-center items-center mt-10">
                {/* product new product text and time */}
                <div className="w-9/10 flex flex-col justify-center items-start ">
                    <div className="flex justify-center items-center">
                        <div className="w-[20px] h-[35px] bg-red-500 rounded-[8px]"></div>
                        <h1 className="text-red-500 ml-2">Today's</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className=" flex justify-center items-center">
                            <div className="mr-10 xl:mr-20">
                                <h1 className="text-xl font-semibold">Flash Sales</h1>
                            </div>
                            {/* days hourse minut second page */}
                            <div className="flex flex-col justify-center items-center ml-10">
                                <div className="w-full flex justify-around items-center gap-2">
                                    <div>
                                        <span className="text-xs">days</span>
                                        <div className="flex justify-center items-start ">
                                            <h3 className="text-start text-xl font-semibold">{formatingZero(days)}</h3>
                                            <span className="text-center text-xl font-semibold text-red-500 ml-3">:</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs">hourse</span>
                                        <div className="flex justify-between items-center ">
                                            <h3 className="text-xl font-semibold ">{formatingZero(hourse)}</h3>
                                            <span className="text-center text-xl font-semibold text-red-500 ml-4">:</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs">minutes</span>
                                        <div className="flex justify-center items-center ">
                                            <h3 className="text-xl font-semibold ">{formatingZero(minute)}</h3>
                                            <span className="text-center text-xl font-semibold text-red-500 ml-6">:</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs">seconds</span>
                                        <h3 className="text-xl font-semibold ">{formatingZero(second)}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            {
                                !showButton && (
                                    <button onClick={handleShowButton} className="w-[159px] h-[56px] bg-[#DB4444] rounded-lg text-white cursor-pointer hover:bg-transparent hover:border border-[#DB4444] hover:text-[#DB4444] transition-all duration-300">Veiw All</button>
                                )
                            }
                        </div>
                    </div>
                    <SalesProductCard SliceDB={SliceDB} />
                </div>
            </section>
        </>
    )
};

export default TodayProductCard;