import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'

const Navbar = () => {
  
  const {cart} = useSelector((state)=>state)

  return (
  <div className="flex justify-center bg-white">
    <nav className="flex justify-between items-center h-[80px] max-w-[1200px] mx-auto">
      {/* <NavLink to="/shopping">
      <div className="ml-5">
        <img src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="ECOMZY-LOGO"
          className="h-[56px]"
        />
      </div>
      </NavLink> */}

      <div className="flex font-medium text-slate-100 tracking-tighter space-x-6 ">
        <NavLink to="/shopping">
          <p className="text-black">Home</p>
        </NavLink>

        <NavLink to="/shopping/cart">
        <div className="relative ">
          <FaShoppingCart className="text-2xl text-black"/>

          {cart.length >0 && 
          <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
          justify-center items-center rounded-full text-white animate-bounce "
          >{cart.length}</span>}
        </div>
        </NavLink>
        
      </div>
    </nav>
  </div>);
};

export default Navbar;
