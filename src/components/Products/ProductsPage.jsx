import ProductList from "./ProductList";
import ProductSiderBar from "./ProductSiderBar";


const ProductsPage = () => {
  return (
    <section className="flex">
        <div className="flex flex-col w-full lg:w-full lg:justify-between lg:flex-row lg:px-4 lg:py-2">
           <div className="lg:w-1/4 lg:px-4">
           <ProductSiderBar/>
           </div>
            <div className="w-full lg:w-3/4">
                <ProductList/>
            </div>
        </div>
    </section>
  )
}

export default ProductsPage