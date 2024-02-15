/* eslint-disable react/prop-types */


const Table = ({theader, children}) => {
  return (
    <table className="w-full mb-4 border-collapse bg-white shadow-lg">
        <thead className="h-[50px] bg-[#36304a] ">
            {theader.map((item, index) => 
                <th key={index} className="text-white uppercase">{item}</th>
            )}
        </thead>
        {children}
    </table>
  )
}

export default Table