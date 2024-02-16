import { Route, Routes } from 'react-router-dom';
import CartPage from '../Cart/CartPage';
import LoginPage from '../FormPage/LoginPage';
import SignupPage from '../FormPage/SignupPage';
import OrderPage from '../Order/OrderPage';
import ProductsPage from '../Products/ProductsPage';
import SingleProduct from '../SingleProduct/SingleProduct';
import HomePage from './../Home/HomePage';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/product/1' element={<SingleProduct/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
    </Routes>
  )
}

export default Routing