import CartPage from "./components/Cart/CartPage";
import LoginPage from "./components/FormPage/LoginPage";
import SignupPage from "./components/FormPage/SignupPage";
import Navbar from "./components/Navbar/Navbar";
import OrderPage from "./components/Order/OrderPage";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProduct from "./components/SingleProduct/SingleProduct";



const App = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        {/* <HomePage/> */}
        {/* <ProductsPage/> */}
        {/* <SingleProduct/> */}
        {/* <CartPage/> */}
        {/* <OrderPage/> */}
        {/* <LoginPage /> */}
        <SignupPage/>
      </main>
    </div>
  )
}

export default App