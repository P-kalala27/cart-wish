import ProductCard from ".../Products/ProductCard";


const FeatureProduct = () => {
  return (
    <section className=" max-w-screen-xl mx-auto px-3.5">
        <div className="my-5">
            <div className="text-center pb-8">
                <h2 className="text-4xl font-bold">Featured Products</h2>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-evenly items-center gap-8 lg:mt-5 h-full ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                
            </div>
        </div>
    </section>
  )
}

export default FeatureProduct