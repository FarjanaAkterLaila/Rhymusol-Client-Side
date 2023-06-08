import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Reg from "../Components/Signup/Reg";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/reg',
          element:<Reg></Reg>
        }
      ]
    },
  ]);