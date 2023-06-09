import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Reg from "../Components/Signup/Reg";
import Errorpage from "../Errorpage/Errorpage";
import Classes from "../Components/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import Myadditem from "../Components/Dashboard/Myadditem";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/classes',
            element:<Classes></Classes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/reg',
          element:<Reg></Reg>
        }
      ],
   
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
{
  path:'myadditeam',
  element:<Myadditem></Myadditem>
}
      ]
    }
  ]);