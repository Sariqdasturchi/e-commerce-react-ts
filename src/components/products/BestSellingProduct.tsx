import React from 'react'

const BestSellingProduct: React.FC = () => {
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
                            <button className='w-[159px] h-[56px] bg-[#DB4444] rounded-lg text-white'>Veiw All</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSellingProduct