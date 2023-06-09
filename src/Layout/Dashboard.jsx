import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open font-serif">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-xl font-bold">
       
            <li className='pt-20'><Link><MdAddShoppingCart/>Selected Classes</Link></li>
            <li><Link><SiGoogleclassroom/>Enrolled Classes</Link></li>
            <li><Link><FaWallet/>Payment</Link></li>
            <div className='divider'></div>
            <li className="font-bold text-lg">
      <Link to="/"><FcHome/>Home</Link>{" "}
    </li>
    <li className="font-bold text-lg">
      {" "}
      <Link to="/alltoys"><GiTeacher/>Instructors</Link>{" "}
    </li>

    <li className="font-bold text-lg">
      <Link to="/classes"><SiGoogleclassroom/>Classes</Link>
    </li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;