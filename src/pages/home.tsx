import type React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";

import img from "../assets/carusel.jpg";
import img2 from "../assets/iphone.jpg";
import img3 from "../assets/iphone2.png";
import { useState } from "react";
import TodayProductCard from "../components/products/SalesProduct";
import CategoriesProduct from "../components/products/CategoriesProduct";
import BestSellingProduct from "../components/products/BestSellingProduct";

type DropdownItem = {
  id: number;
  title: string;
  link: string;
};

type HomeNavigationMenu = {
  id: number;
  title: string;
  link: string;
  dropdown?: DropdownItem[];
};

const HomeMenu: HomeNavigationMenu[] = [
  {
    id: 1,
    title: "Woman’s Fashion",
    link: "woman_fashion",
    dropdown: [
      { id: 1, title: "Dress", link: "/woman/dress" },
      { id: 2, title: "Shoes", link: "/woman/shoes" },
      { id: 3, title: "Bags", link: "/woman/bags" },
    ],
  },
  {
    id: 2,
    title: "Men’s Fashion",
    link: "men_fashion",
    dropdown: [
      { id: 1, title: "T-Shirts", link: "/men/tshirts" },
      { id: 2, title: "Jeans", link: "/men/jeans" },
    ],
  },
  { id: 3, title: "Home & Lifestyle", link: "home_lifestyle" },
  { id: 4, title: "Medicine", link: "medical" },
  { id: 5, title: "Sports & Outdoor", link: "sports_outdoor" },
  { id: 6, title: "Baby’s & Toys", link: "baby_toys" },
  { id: 7, title: "Groceries & Pets", link: "groceries_pets" },
  { id: 8, title: "Health & Beauty", link: "health_beauty" },
];

const Home: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <>
      <section className="w-full h-auto flex justify-center ">
        <div className="w-[217px] h-[440px] flex flex-col border-r border-r-gray-400">
          <nav>
            <ul className="mt-10">
              {HomeMenu.map((item, id) => (
                <li key={item.id} className={`${HomeMenu.length === id ? 'mt-0' : 'mt-7'}`}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-[80%] h-[450px] flex justify-center items-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{
              width: "100%",
              height: "100%",
              marginLeft: "20px",
              marginTop: "80px",
            }}
          >
            <SwiperSlide className="w-full h-[200px]">
              <img src={img} alt="" className="w-full h-[400px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full h-[200px]">
              <img src={img2} alt="" className="w-full h-[400px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full h-[200px]">
              <img src={img3} alt="" className="w-full h-[400px]" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <TodayProductCard />
      <CategoriesProduct />
      <BestSellingProduct />
    </>
  );
};

export default Home;
