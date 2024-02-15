

const QuantityInput = () => {
  return (
    <div className="flex gap-5">
    <div>
    <button disabled className="bg-orange-200 px-2 py-1 rounded-full text-white"> - </button>
    </div>
    <p className="text-2xl font-bold">8</p>
    <div>
    <button className="bg-orange-500 px-2 py-1 rounded-full text-white"> + </button>
    </div>
  </div>
  )
}

export default QuantityInput