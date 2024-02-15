import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import ProductCategory from "./ProductCategory";

const ProductSiderBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex lg:w-full bg-[#fff] lg:px-5 lg:py-2  mb-3 h-full relative">
      <div className="flex flex-col w-full">
        <div className="lg:hidden">
          <button
            className="pl-5"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiFillCaretDown size={25} />
          </button>
        </div>
        <div
          className={`${
            !isOpen && "hidden "
          } absolute lg:relative lg:bg-inherit  top-4 rounded-sm lg:rounded-none shadow-sm
           lg:shadow-none  mt-5 lg:flex lg:flex-col lg:justify-center
            lg:items-center lg:w-full transition bg-[#fff]`}
        >
          <div>
            <h2 className="text-2xl font-semibold lg:mb-5 mb-2">Category</h2>
          </div>
          <div>
            <ProductCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSiderBar;
