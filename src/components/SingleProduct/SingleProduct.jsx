import { useState } from "react";
import { product } from "../../constante";
import QuantityInput from "./QuantityInput";

const SingleProduct = () => {
  const [selectedImage, setSelecetedImage] = useState([0]);
  return (
    <section
      className="flex flex-col lg:flex-row w-full
     lg:justify-around lg:m-auto"
    >
      <div className="flex flex-col lg:flex-row lg:gap-10">
      <div
        className="flex max-w-80 lg:max-w-full  mx-auto my-6 flex-col-reverse
        lg:flex-row lg:justify-around lg:items-center"
      >
        <div className="flex justify-evenly lg:flex-col lg:flex-wrap gap-3 p-2 lg:m-4">
          {product.images.map((img, index) => (
            <img
              src={img}
              alt={product.title}
              key={product.id}
              onClick={() => setSelecetedImage(index)}
              className={`${
                selectedImage === index ? " scale-105" : "scale-100"
              } 
                        cursor-pointer w-5 h-5 rounded-full lg:w-28 lg:h-28
                         lg:rounded-md object-cover transition-all ease-in-out
                         `}
            />
          ))}
        </div>
        <div className="pb-3 w-full">
          <img
            src={product.images[selectedImage]}
            alt={product.title}
            className="rounded-xl lg:w-full lg:h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:w-96  lg:mt-28">
        <div className="flex flex-col py-2">
          <h1 className="text-xl font-semibold font-palanquin">{product.title}</h1>
          <p className="flex-wrap text-lg font-montserrat">{product.description}</p>
        </div>
        <div className="py-2">
          <p className="font-bold font-montserrat">$ {product.price.toFixed(2)}</p>
          <h2 className="font-bold font-montserrat">Quantity : </h2>
        </div>
        <QuantityInput/>
        <div className="flex  py-5">
          <button className="bg-indigo-600 px-2 py-3 
          rounded-md text-white font-bold">Add to Cart</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SingleProduct;
