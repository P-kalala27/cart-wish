
import ProductCard from './ProductCard';


const ProductList = () => {
  return (
    <div className="flex flex-col px-2">
        <div className="flex justify-evenly lg:justify-between items-center py-4 lg:px-3">
            <div className=" -mr-6">
                <h2 className="text-xl font-medium">Products</h2>
            </div>
            <div className="">
                <select name="sort" id="" className="p-2 outline-none lg:p-3 cursor-pointer rounded-md">
                <option value="">Relevance</option>
                <option value="price desc">Price HIGH TO LOW</option>
                <option value="price asc">Price LOW TO HIGH</option>
                <option value="rate desc">Rate HIGH TO LOW</option>
                <option value="rate asc">Rate LOW TO HIGH</option>
                </select>
            </div>
        </div>
        <div className='flex w-full px-4 lg:flex-row py-3'>
            <div className='max-w-md lg:max-w-5xl flex flex-wrap
             mx-auto lg:mx-0  gap-8 lg:items-center lg:justify-center'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </div>
        </div>
    </div>
  )
}

export default ProductList