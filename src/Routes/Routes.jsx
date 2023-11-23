import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/Cart/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:  <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: '/dashboard/userHome',
          element: <UserHome></UserHome>
        },

        {
          path: '/dashboard/cart',
          element: <Cart></Cart>
        },
        {
          path:'/dashboard/payment',
          element: <Payment></Payment>
        },
        {
          path: '/dashboard/paymentsHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        // admin only routes
        {
          path: '/dashboard/admin',
          element: <AdminHome></AdminHome>
        },
        {
          path: '/dashboard/addItems',
          element: <AddItems></AddItems>
        },
        {
          path: '/dashboard/manageItem',
          element: <ManageItem></ManageItem>
        },
        {
          path: '/dashboard/updateItem/:id',
          element: <UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:'/dashboard/users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);