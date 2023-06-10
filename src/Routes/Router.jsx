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
import Enrollcls from "../Components/Dashboard/Enrollcls";
import Pay from "../Components/Dashboard/Pay";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Components/Dashboard/ManageClasses";
import ManageUsers from "../Components/Dashboard/ManageUsers";
  
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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
{
  path:'myadditeam',
  element:<Myadditem></Myadditem>
},
{
  path:'enrollcls',
  element:<Enrollcls/>
},
{
  path:'pay',
  element:<Pay/>
},
{
  path:'manageclasses',
  element:<ManageClasses/>
},
{
  path:'manageuser',
  element:<ManageUsers/>
}
      ]
    }
  ]);