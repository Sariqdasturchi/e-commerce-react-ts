import React, { useState } from 'react'
import Card from './Card';

type Props = {
    id: number;
    image: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
    sales?: number;

}

type BestSellingProductCardProps = {
    BestSelling: Props[];
}

const BestSellingProductCard: React.FC<BestSellingProductCardProps> = ({ BestSelling }) => {
    const [cardHover, setCardHover] = useState<number | null>(null)
    return (
        <>
            <div className='w-full mt-4'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {
                        BestSelling.map((item, id) => (
                            <Card 
                            key={id} 
                            id={item.id} 
                            title={item.title} 
                            image={item.image} 
                            price={item.price} 
                            discount={item.discount} 
                            rating={item.rating} 
                            cardHover={cardHover} 
                            setCardHover={setCardHover} 
                            {...(item.sales ? { sales: item.sales } : {})} 
                            />
                        ))  
                    }
                </div>
            </div>
        </>
    )
}

export default BestSellingProductCard