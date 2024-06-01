import {
    createBrowserRouter
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import OrderPage from "../Pages/orders/OrderPage";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Signin/Signin";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Pages/dashbord/Cart";
import AllUser from "../Pages/dashbord/users/AllUser";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashbord";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/dashbord/AddItems";
import ManageItems from "../Pages/dashbord/ManageItems";
import UpdateItem from "../Pages/dashbord/UpdateItem";
import Payment from "../Pages/dashbord/Payment";
import PaymentHistory from "../Pages/dashbord/PaymentHistory";



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
          path:'/order',
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
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        // {
        //   path: 'userHome',
        //   element: <UserHome></UserHome>
        // },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        // admin only routes
        // {
        //   path: 'adminHome',
        //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        // },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-seven-sage.vercel.app/menu/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
        }

      ]
    }
  ]);

export default router;