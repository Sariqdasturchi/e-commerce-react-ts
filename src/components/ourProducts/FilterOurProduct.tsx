
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
// import sales_12 from '../../assets/sales/sales_12.png'
// import sales_13 from '../../assets/sales/sales_13.png'
// import camera from '../../assets/ourproduct/camera.png'
import car from '../../assets/ourproduct/car.png'
// import computer from '../../assets/ourproduct/comp.png'
// import dog from '../../assets/ourproduct/dog.png'
import jostik from '../../assets/ourproduct/jostik.png'
// import noutbook from '../../assets/ourproduct/noutbook.png'
// import mask from '../../assets/ourproduct/mask.png'
import jekit from '../../assets/ourproduct/jekit.png'
import butsa from '../../assets/ourproduct/butsa.png'
// import OurProductCard from './OurProductCard';
import Card from '../products/Card'

type Props = {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  new?: string | number;
  color: string[];
}

const filterColorCard: Props[] = [
  { id: 1, title: 'Kids Electric Car', image: car, price: 1, discount: 2, rating: 4, new: '', color: ['red', 'green', 'blue'] },
  { id: 2, title: 'Jr. Zoom Soccer Cleats', image: butsa, price: 1, discount: 2, rating: 4, new: 'New', color: ['red', 'yellow'] },
  { id: 3, title: 'GP11 Shooter USB Gamepad', image: jostik, price: 1, discount: 2, rating: 4, new: 'New', color: ['blue', 'green'] },
  { id: 4, title: 'Quilted Satin Jacket', image: jekit, price: 1, discount: 2, rating: 4, new: '', color: ['black'] },
  { id: 5, title: 'The north coat', image: sales, price: 1, discount: 2, rating: 4, new: 'New', color: ['brown', 'gray'] },
  { id: 6, title: 'Gucci duffle bag', image: sales_1, price: 1, discount: 2, rating: 4, new: 'New', color: ['black', 'beige'] },
  { id: 7, title: 'RGB liquid CPU Cooler', image: sales_2, price: 1, discount: 2, rating: 4, new: 'New', color: ['white', 'blue'] },
  { id: 8, title: 'Small BookSelf', image: sales_3, price: 1, discount: 2, rating: 4, new: '', color: [] },
  { id: 9, title: 'HAVIT HV-G92 Gamepad', image: sales_4, price: 1, discount: 2, rating: 4, new: 'New', color: ['black', 'green'] },
  { id: 10, title: 'AK-900 Wired Keyboard', image: sales_5, price: 1, discount: 2, rating: 4, new: '', color: [] },
  { id: 11, title: 'IPS LCD Gaming Monitor', image: sales_6, price: 1, discount: 2, rating: 4, new: 'New', color: ['black'] },
  { id: 12, title: 'S-Series Comfort Chair ', image: sales_7, price: 1, discount: 2, rating: 4, new: '', color: [] },
  { id: 13, title: 'Breed Dry Dog Food', image: sales_8, price: 1, discount: 2, rating: 4, new: 'New', color: [] },
  { id: 14, title: 'CANON EOS DSLR Camera', image: sales_9, price: 1, discount: 2, rating: 4, new: 'New', color: ['black'] },
  { id: 15, title: 'ASUS FHD Gaming Laptop', image: sales_10, price: 1, discount: 2, rating: 4, new: '' , color: []},
  { id: 16, title: 'Curology Product Set ', image: sales_11, price: 1, discount: 2, rating: 4, new: 'New', color: [] },
]


const FilterOurProduct: React.FC = () => {
    const [cardHover, setCardHover] = useState<number | null>(null);
    const [showButton, setShowButton] = useState(false);
    const [data, setData] = useState(filterColorCard.slice(0, 5))

    const handleShowButton = () => {
        if(!showButton) {
            setShowButton(true)
            setData(filterColorCard)
        } else {
            setShowButton(false)
            setData(filterColorCard.slice(0, 5))
        }
    }

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center mt-10'>
                <div className='flex flex-col justify-center items-start w-9/10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {
                            data.map((item, id) => (
                                <Card
                                key={id}
                                {...item}
                                {...(item.new ? {sales: item.new} : {})}
                                cardHover={cardHover}
                                setCardHover={setCardHover}
                                />
                            ))
                        }
                    </div>
                    <div className='w-full h-auto flex justify-center items-center mt-4 mb-5'>
                        {
                            !showButton ? (
                                <button 
                                onClick={handleShowButton}
                                className='w-[171px] h-[56px] bg-[#DB4444] rounded-lg text-white cursor-pointer hover:bg-transparent hover:border border-[#DB4444] hover:text-[#DB4444] transition-all duration-300'
                                >View All Products</button>
                            ) : (
                                <button 
                                onClick={handleShowButton}
                                className='w-[171px] h-[56px] bg-[#DB4444] rounded-lg text-white cursor-pointer hover:bg-transparent hover:border border-[#DB4444] hover:text-[#DB4444] transition-all duration-300'
                                >Show leas</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterOurProduct