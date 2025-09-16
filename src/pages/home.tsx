import type React from "react";
import { Link } from "react-router-dom";

import TodayProductCard from "../components/products/SalesProduct";
import CategoriesProduct from "../components/products/CategoriesProduct";
import BestSellingProduct from "../components/products/BestSellingProduct";
import { CarouselPlugin } from "@/components/carousel/Carousel";


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
  return (
    <>
      <section className="w-full h-auto flex justify-center ">
        {/* Left menu */}
        <div className="w-[217px] h-[440px] flex flex-col border-r border-r-gray-400">
          <nav>
            <ul className="mt-10">
              {HomeMenu.map((item, id) => (
                <li
                  key={item.id}
                  className={`${HomeMenu.length === id ? "mt-0" : "mt-7"}`}
                >
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Carousel */}
        <div className="w-[80%] h-[450px] flex justify-center items-center">
          <CarouselPlugin />
        </div>
      </section>

      {/* Other sections */}
      <TodayProductCard />
      <CategoriesProduct />
      <BestSellingProduct />
    </>
  );
};

export default Home;
