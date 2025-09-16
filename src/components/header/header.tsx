import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";


type NavigationMenuList = {
    id: number
    title: string
    link: string
}

const NavigationMenu: NavigationMenuList[] = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Contact', link: '/contact' },
    { id: 3, title: 'About', link: '/about' },
]

const Header: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <header className="w-full h-auto  flex flex-col items-center">
                {/* header-top */}
                <div className="w-full h-auto flex justify-center items-center p-5 bg-[#000] text-white border ">
                    <div className="w-[85%] h-auto flex justify-end items-center gap-25 ">
                        <div className="text-center w-[70%]">
                            <h3 className="text-center text-[10px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className="underline ml-3" to={'/shopnow'}>ShopNow</Link></h3>
                        </div>
                        <div className="">
                            <select name="len" id="len" className="cursor-pointer bg-transparent text-white text-sm outline-none">
                                <option value="en">English</option>
                                <option value="uz">Uzbek</option>
                                <option value="ru">Russian</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* navigation menu list */}
                <nav className="w-full h-auto flex justify-around items-center p-5 border-b border-b-gray-400">
                    <div>
                        <h1 className="text-2xl font-bold">
                            <Link to={'/'}>Exclusive</Link>
                        </h1>
                    </div>
                    {/* navigation menu list */}
                    <div className="">
                        <ul>
                            {
                                NavigationMenu.map((menu) => (
                                    <li key={menu.id} className={`inline-block mx-5 text-[14px] font-medium 
                                    ${location.pathname === menu.link ? 'text-red-500 border-b border-red-500' : 'text-black hover:text-red-500 transition-all duration-500'}`}>
                                        <Link to={menu.link}>{menu.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* search and btns elements */}
                    <div className="flex items-center gap-5">
                        <div className="w-[243px] h-[38px] bg-[#f5f5f5] rounded-[4px] flex items-center px-2">
                            <input type="text" placeholder="What are you looking for?" className="w-[92%] text-[12px] text-[#333] p-2 focus:outline-none" />
                            <CiSearch className="text-xl" />
                        </div>
                        <div className="flex items-center gap-3 text-xl">
                            <button className="cursor-pointer hover:text-red-500">
                                <CiHeart />
                            </button>
                            <button className="cursor-pointer hover:text-red-500">
                                <SlBasketLoaded />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;