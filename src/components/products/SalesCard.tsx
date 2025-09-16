import React, { useState } from 'react'
import Card from './Card';

type Props = {
  id: number;
  image: string;
  title: string;
  price: number;
  discount: number;
  rating: number;
  sales: number;
}

type SalesProductCard = {
  SliceDB : Props[]
}


const SalesProductCard: React.FC<SalesProductCard> = ({SliceDB}) => {
  const [cardHover, setCardHover] = useState<number | null>(null);

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center mt-10'>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
          {SliceDB.map((item, id) => (
            <Card key={id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} sales={item.sales} discount={item.discount} cardHover = {cardHover} setCardHover={setCardHover} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SalesProductCard