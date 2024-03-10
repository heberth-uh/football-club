import { useContext } from "react";
import Logo from './Logo';
import { Navbar, NavbarBurger} from "./Navbar";
import { FiMenu, FiX } from "react-icons/fi";
import { Context } from "../../context/Context";

function Header() {

  const { menus } = useContext(Context)
  const { toggleShowMenu, setToggleShowMenu } = useContext(Context)

  return (
    <div className='fixed bg-gradient-to-r from-slate-900/80 to-slate-800 backdrop-blur-sm text-gray-200 font-bold top-0 left-0 w-full z-40 hidde'>
        <div className='container flex justify-between mx-auto items-center content-start'>
            <a href="/" className="text-inherit hover:text-inherit">
              <Logo />
            </a>
            <Navbar items={menus}/>
            <div onClick={ () => setToggleShowMenu(!toggleShowMenu)}
              className='py-5 md:py-7 px-3 hover:text-indigo-600 block md:hidden'>
              { toggleShowMenu ? <FiX/> : <FiMenu/> }
            </div>
        </div>
        <div className='block md:hidden'>
          {!toggleShowMenu ? "" : <NavbarBurger items={menus}/>}
        </div>
    </div>
  )
}

export default Header
