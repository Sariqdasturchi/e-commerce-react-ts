import React, { useState } from 'react'
import Card from '../products/Card';
type Props = {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
    discount: number;
    sales?: number;
}

type OurProductsCardDB = {
    OurProductsCardDB: Props[];
}

const OurProductCard: React.FC<OurProductsCardDB> = ({ OurProductsCardDB }) => {
   const [cardHover, setCardHover] = useState<number | null>(null)
    return (
        <>
            <div className='w-full mt-4'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {
                        OurProductsCardDB.map((item, id) => (
                            <Card
                                key={id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                discount={item.discount}
                                {...(item.sales ? { sales: item.sales } : {})}
                                cardHover={cardHover}
                                setCardHover={setCardHover}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default OurProductCard