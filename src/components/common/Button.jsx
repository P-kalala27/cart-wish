

const Button = ({title, link}) => {
  return (
    <button className="bg-slate-100 text-black py-2 px-8 rounded-xl border
             border-white hover:bg-indigo-500 hover:text-white transition-all">
            <a href={link} className="uppercase font-semibold leading-5">{title}</a>
     </button>
  )
}

export default Button