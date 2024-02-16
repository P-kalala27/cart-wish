import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import NavList from "./NavList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex sticky h-auto w-full p-6 lg:px-24 bg-white shadow-sm">
      <nav className="flex flex-wrap justify-around items-center w-full lg:justify-between lg:relative lg:max-container">
        <div className="lg:pl-5">
          <NavLink to="/">
            <h1 className="uppercase font-bold text-2xl">
              <span className="text-indigo-500">Cart</span>
              <span className="text-green-500">Wish</span>
            </h1>
          </NavLink>
        </div>
        <div className="w-full my-5 lg:w-1/3 lg:absolute lg:left-[20%] pt-4">
          <form action="">
            <input
              type="text"
              placeholder="search"
              className="w-full relative px-3 py-2
               rounded-full outline-none border border-gray-300 text-black lg:py-1"
            />
            <button>
              <BiSearch
                size={28}
                className="text-gray-500 absolute right-8 top-[97px] lg:top-5 lg:right-6"
              />
            </button>
          </form>
        </div>
        <div className="fixed z-50 top-[30px] left-[83%] lg:top-3 lg:left-2/3 lg:absolute">
          <button className="flex relative">
            <FiShoppingCart size={25} />
            {""}
            <span
              className="absolute z-50 left-[20px] bottom-3 bg-gray-200
             h-8 w-8 font-semibold rounded-full text-xl items-center text-indigo-500"
            >
              0
            </span>
          </button>
        </div>

        <div className="fixed left-[26px] top-[30px]
         mr-10 rounded-lg py-1 px-2 lg:relative z-50 lg:top-0 bg-slate-100">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            <GiHamburgerMenu size={25} className="" />
          </button>
        </div>
        <div
          className={`${
            !isOpen && "hidden translate-x-full"
          } fixed top-2 px-12 w-[78%] left-0 rounded-sm
         bg-gray-200  h-full py-14 transition-all
          lg:absolute lg:left-[85%] lg:rounded-lg lg:-top-3 
          lg:h-auto  translate-x-0 duration-300 ease-in-out z-50 lg:z-50 lg:outline-none `}
        >
          <NavList />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 focus:ring-2"
          >
            <AiOutlineClose
              size={25}
              className="absolute top-4 right-8 font-bold text-black lg:left-10"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
