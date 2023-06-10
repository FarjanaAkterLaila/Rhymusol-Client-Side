
import { NavLink, Outlet } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers, FaWallet } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { ImBoxAdd } from "react-icons/im";
import CardHook from '../Hook/CardHook';
import Admin from '../Hook/Admin';
import UInstructor from '../Hook/UInstructor';
const Dashboard = () => {
  const [card] = CardHook();

  
  const [isAdmin] = Admin();
  const [instructor] = UInstructor();
  //console.log(isAdmin,instructor)
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

          {
            isAdmin ? <>
              <li className='pt-20'>
                <NavLink to="/dashboard/manageclasses" className={'text-orange-700'} ><SiGoogleclassroom />Manage Classes</NavLink>
                
                </li>
              
              <li>
                <NavLink to="/dashboard/manageuser" className={'text-orange-700'} ><FaUsers />Manage Users</NavLink>
                </li>
              
           
            </> :
            instructor ? <>
              <li className='pt-20'>
                <NavLink to="/dashboard/addcls" className={'text-orange-700'} ><ImBoxAdd/>Add Class</NavLink>
                
                </li>
              
              <li>
                <NavLink to="/dashboard/mycls" className={'text-orange-700'} ><FaUsers />My Class</NavLink>
                </li>
              
           
            </> :
              <>
                <li className='pt-20'><NavLink to="/dashboard/myadditeam" className={'text-orange-700'} ><MdAddShoppingCart />Selected Classes</NavLink></li>
                <li><NavLink to="/dashboard/enrollcls" className={'text-orange-700'} ><SiGoogleclassroom />Enrolled Classes</NavLink></li>
                <li><NavLink to="/dashboard/pay" className={'text-orange-700'} ><FaWallet />Payment</NavLink></li>
              </>
          }
          <div className='divider'></div>
          <li className="font-bold text-lg ">
            <NavLink to="/" className={'text-orange-700'}><FcHome />Home</NavLink>{" "}
          </li>
          <li className="font-bold text-lg">
            {" "}
            <NavLink to="/alltoys" className={'text-orange-700'}><GiTeacher />Instructors</NavLink>{" "}
          </li>

          <li className="font-bold text-lg">
            <NavLink to="/classes" className={'text-orange-700'}><SiGoogleclassroom />Classes</NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;