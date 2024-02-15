import { RiDeleteBin6Line } from "react-icons/ri";
import user from '../../assets/images/user.webp';
import QuantityInput from '../SingleProduct/QuantityInput';
import Table from '../common/Table';

const CartPage = () => {
  return (
    <div className='flex justify-center items-center w-[90%] lg:w-2/3 mx-auto relative py-6'>
        <div className='flex flex-col w-full'>
          <div className='flex w-full lg:gap-4 justify-center items-center lg:w-3/4'>
          <div className='absolute top-3 right-0 lg:flex
           lg:items-center lg:justify-end lg:w-full'>
            <img src={user} alt="user Profile" className='w-[55px] h-[55px] rounded-full
             lg:w-20 lg:h-20'/>
          </div>
          <div className='hidden lg:flex  flex-col absolute top-3 right-16 pr-10 pt-3'>
            <p className='font-palanquin font-semibold'>Glody</p>
            <p className='font-palanquin font-normal text-gray-400'>Glody@gmail.com</p>
          </div>
          </div>
          <div className='w-full mt-20 lg:p-5'>
            <Table theader={["Item", "Price", "Quantity", "Total", "Remove"]}>
              <tbody className='h-[50px] text-center items-center justify-center even:bg-[#f5f5f5]'>
                <tr className='font-montserrat items-center justify-center'>
                  <td>Iphone 14</td>
                  <td>$999</td>
                  <td className='flex h-[50px] justify-center'>
                    <QuantityInput/>
                  </td>
                  <td>$999</td>
                  <td className=" text-center justify-center flex pt-5">
                    <RiDeleteBin6Line size={35} color="white" className="justify-center 
                    items-center bg-indigo-700 rounded-full p-2"/>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='mt-16 w-full lg:w-72 lg:flex lg:justify-end'>
            <table className='border-collapse bg-white border border-slate-500 w-full'>
              <tbody>
                <tr>
                  <td className='border border-slate-700 p-1  font-montserrat'>Subtotal</td>
                  <td className='border border-slate-700  flex justify-end p-2'>$999</td>
                </tr>
                <tr>
                  <td className='border border-slate-700 p-1  font-montserrat'>Shipping charge</td>
                  <td className='border border-slate-700  flex justify-end p-2'>$5</td>
                </tr>
                <tr>
                  <td className='border border-slate-700 p-1 font-bold font-montserrat'>Total</td>
                  <td className='border border-slate-700 font-semibold flex justify-end p-2'>$1004</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-end pt-4 lg:justify-normal'>
            <button className='px-5 py-2 bg-indigo-600 text-white rounded-sm'>Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default CartPage