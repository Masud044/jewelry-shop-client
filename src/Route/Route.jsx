import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import SignUp from "../signup/SignUp";
import Login from "../login/Login";
import AllJewelry from "../page/AllJewelry/AllJewelry";
import MyJewelry from "../page/MyJewelry/MyJewelry";
import AddJewelry from "../page/AddJewelry/AddJewelry";
import Blog from "../page/AddJewelry/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "alljewelry",
        element: <AllJewelry></AllJewelry>,
      },
      
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: "myjewelry",
        element: <MyJewelry></MyJewelry>,
      },
      {
        path: "addjewelry",
        element: <AddJewelry></AddJewelry>,
      },
    ]
  }
]);

export default router;
