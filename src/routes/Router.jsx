import {
    createBrowserRouter
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import OrderPage from "../Pages/orders/OrderPage";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Signin/Signin";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<OrderPage></OrderPage>
        },
        
       
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signin',
          element:<Signin></Signin>
        }
       
      ]
    },
  ]);

export default router;