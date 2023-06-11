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
import Addclass from "../Components/Dashboard/Addclass";
import Mycls from "../Components/Dashboard/Mycls";
import AdminRoute from "./AdminRoute";
import Instructor from "./Instructor";
import Payment from "../Components/Dashboard/Payment/Payment";
  
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
  path:'payment',
  element:<Payment/>,

},
{
  path:'manageclasses',
  element:<AdminRoute><ManageClasses/></AdminRoute>
},
{
  path:'manageuser',
  element:<AdminRoute><ManageUsers/></AdminRoute>
},
{
  path:'addcls',
  element:<Instructor><Addclass/></Instructor>
},
{
  path:'mycls',
  element:<Instructor><Mycls/></Instructor>
}
      ]
    }
  ]);