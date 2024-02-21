import useData from "../../hook/useData";
const ProductCategory = () => {
  const {data: category, error} =useData('/category')
  return (
    <div>
      <div
        className="hover:bg-[#f6f6f6] transition-all
         scale-100 hover:scale-105 rounded-sm p-2"
      >
        {error && <em className="text-red-300">{error}</em>}
        {
         category && category.map(cat =>
           <div key={cat._id}>
            <a href={`products?category${cat.name}`} >
          <button className="flex justify-center items-center">
            <h2 className="px-4 text-xl font-medium">{cat.name}</h2>
          </button>
        </a>
           </div>)
        // category.map((item) => <a key={item._id} > {item.name}</a>)
        }
        
      </div>
    </div>
  );
};

export default ProductCategory;
