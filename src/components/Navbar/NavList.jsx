import { NavLink } from "react-router-dom";
import { navItems } from "../../constante";


const NavList = () => {
  return (
    <div>
        <ul className="flex text-black h-full z-50 flex-col gap-8 justify-between
         items-start lg:mt-8 lg:px-10 py-4">
            {
                navItems.map((item) => (
                    <li key={item.id} className="py-2 px-4  hover:scale-[1.2] transition-all">
                        <NavLink to={item.link} className="py-2 font-semibold text-xl">
                            {item.title}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavList