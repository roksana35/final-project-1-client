import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoCart } from "react-icons/io5";
import useCart from "../hooks/useCart";


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);
  const [cart]=useCart();
  const handleLogOut=()=>{
    logOut()
    
  }

    const navOptins= <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/menu'>Our Menu</NavLink></li>
     <li><NavLink to='/order'>Order Food</NavLink></li>
     <li>
     <Link to="/" className="">
          <button className=" btn ">
            <IoCart className="ml-2 text-xl" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
     </li>
     
     {
        user?<>
        <button onClick={handleLogOut} className="btn btn-sm border-none  bg-gray-600 text-gray-100">LogOut</button>
        </>
        :
        <>
        <li><NavLink to='/login'>Login</NavLink></li>
     <li><NavLink to='/signin'>SignIn</NavLink></li>
        </>
     }
        
      
    
    </>

    return (
        <div className="navbar fixed z-20 bg-opacity-50 text-white max-w-screen-xl bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptins}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptins}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;