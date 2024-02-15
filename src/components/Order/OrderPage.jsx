import Table from "../common/Table";


const OrderPage = () => {
  return (
    <div className="flex justify-center items-center mt-10 lg:w-1/2 lg:mx-auto">
        <Table theader={["Order", "Product", "Total", "Status"]}>
            <tbody className="h-[50px] text-center items-center justify-center font-montserrat">
                <tr>
                    <td>1</td>
                    <td>Iphone, Power Bank</td>
                    <td>$1299</td>
                    <td>Shipped</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default OrderPage