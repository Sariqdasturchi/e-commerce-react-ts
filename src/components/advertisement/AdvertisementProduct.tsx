import React, { useEffect, useState } from 'react'
import music from '../../assets/advertisement/music.png'
import musicbg from '../../assets/advertisement/musicbg.png'

const AdvertisementProduct: React.FC = () => {
    const [days, setDays] = useState(0)
    const [hourse, setHourse] = useState(0)
    const [minutes, setMinues] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const formatingTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    }

    useEffect(() => {
        const countdown = () => {
            const endDate = new Date('2025-09-22 23:59:59').getTime();
            const now = new Date().getTime();
            const difference = endDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(days);
            setHourse(hours);
            setMinues(minutes);
            setSeconds(seconds);
        };

        const interval = setInterval(countdown, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div className='w-full flex justify-center items-center mt-10 mb-10'>
                <div className='w-[90%] h-[500px] bg-[#000] rounded-lg flex justify-center items-center'>
                    <div className='w-[50%] h-full flex flex-col justify-center items-start pl-20'>
                        <p className='text-[#00FF66]'>Categories</p>
                        <h1 className='text-white text-5xl font-bold leading-snug'>Enhance Your Music Experience</h1>
                        <div className='w-full h-auto flex gap-4 justify-start items-center mt-5'>
                            <div className='w-[62px] h-[62px] flex flex-col justify-center items-center bg-[#fff] rounded-full'>
                                <h2 className='text-md font-semibold'>{formatingTime(days)}</h2>
                                <p className='text-xs'>Days</p>
                            </div>
                            <div className='w-[62px] h-[62px] flex flex-col justify-center items-center bg-[#fff] rounded-full'>
                                <h2 className='text-md font-semibold'>{formatingTime(hourse)}</h2>
                                <p className='text-xs '>Hourse</p>
                            </div>
                             <div className='w-[62px] h-[62px] flex flex-col justify-center items-center bg-[#fff] rounded-full'>
                                <h2 className='text-md font-semibold'>{formatingTime(minutes)}</h2>
                                <p className='text-xs '>Minutes</p>
                            </div>
                             <div className='w-[62px] h-[62px] flex flex-col justify-center items-center bg-[#fff] rounded-full'>
                                <h2 className='text-md font-semibold'>{formatingTime(seconds)}</h2>
                                <p className='text-xs '>Seconds</p>
                            </div>
                        </div>
                        <button className='w-[171px] h-[56px] bg-[#00FF66] rounded-md text-white text-lg font-semibold mt-8 hover:bg-transparent hover:border border-[#00FF66] hover:text-white cursor-pointer transition duration-300'>Buy Now!</button>
                    </div>
                    <div className='w-[50%] h-full flex flex-col justify-center items-start pl-20 relastive'>
                        <img src={music} alt="Music play image" className='z-10' />
                        <img src={musicbg} alt="Music play bg shadow" className='absolute right-3 z-[0]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvertisementProduct