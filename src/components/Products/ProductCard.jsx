/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";

import { NavLink } from "react-router-dom";
const ProductCard = ({id, image, price, title, rating, ratingCount, stock}) => {
  return (
    <div className="flex scale-100 hover:scale-105 transition-all">
        <div className="flex flex-col bg-white  rounded-lg">
        <div className="border border-b-2 rounded-sm">
            <NavLink to={`/product/${id}`}>
                <img src={`http://localhost:5000/products/${image}`}  alt="" className="rounded-lg w-[150px] lg:w-[250px]" />
            </NavLink>
        </div>
        <div className="px-2 hidden lg:inline-block">
            <div className="block py-2">
            <h3 className="font-semibold text-2xl">${price}</h3>
            <p className="font-semibold text-xl leading-normal">{title}</p>
            </div>
            <div className="flex justify-between items-center py-2">
                <div className="flex justify-evenly items-center">
                <div className="flex justify-center items-center px-3 py-1 bg-yellow-500 rounded-sm">
                <AiFillStar color="white"/> 
                <p className="pl-2 font-bold text-xl text-white">{rating}</p>
                </div>
                <div className="px-3">
                <p className="text-xl">{ratingCount}</p>
                </div>
                </div>
                <div className="flex justify-center items-center bg-gray-900 w-10 h-10 rounded-full">
                    {stock > 0 &&<button className="place-content-center text-white">
                        <BsFillBasket2Fill size={25} />
                    </button>}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard