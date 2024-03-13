import { useContext } from "react";
import { Context } from "../../context/Context";

export function Navbar({ items }) {
  return (
    <nav className="px-6 text-sm font-medium -h-full">
      <ul className="md:flex flex-row items-center space-x-3 hidden">
        {items.map(item => (
          <li key={item.id} className="-h-full">
            <a href={item.target_name} className="text-white block px-3 py-6">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function NavbarBurger({ items }) {

  const { toggleShowMenu, setToggleShowMenu } = useContext(Context);

  function handleMenuItemclick() {
    setToggleShowMenu(!toggleShowMenu);
  };

  return(
    <div className="bg-gradient-to-tr from-slate-900/90 to-indigo-800/40 h-full text-center backdrop-blur-0" id="navbarBurder">
      <ul>
        {items.map(item => (
          <li key={item.id} className="border-b-[1px] border-slate-600">
            <a className="text-slate-300 py-6 w-full inline-block" href={item.target_name} onClick={ () => handleMenuItemclick()}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
