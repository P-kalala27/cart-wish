import { GiConsoleController } from "react-icons/gi";

const ProductCategory = () => {
  return (
    <div>
        <div className="hover:bg-[#f6f6f6] transition-all
         scale-100 hover:scale-105 rounded-sm p-2">
            <a href="/">
                <button className="flex justify-center items-center">
                <GiConsoleController size={32} color="red" />
                 <h2 className="px-4 text-xl font-medium">Gaming Consoles</h2>
                </button>
            </a>
        </div>
    </div>
  )
}

export default ProductCategory