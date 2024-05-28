import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Main = () => {
    const location=useLocation()
    const noNavbarAndFooter=location.pathname.includes('login') || location.pathname.includes('signin') ;
    return (
        <div>
            {noNavbarAndFooter ||<Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarAndFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;