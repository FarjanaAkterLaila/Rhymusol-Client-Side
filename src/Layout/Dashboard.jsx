
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers, FaWallet } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { ImBoxAdd } from "react-icons/im";
// import CardHook from '../Hook/CardHook';
import Admin from '../Hook/Admin';
import AInstructor from '../Hook/AInstructor';
// import NavBarIteam from '../Components/Shared/NavBar/NavBarIteam';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Dashboard = () => {
  // const [card] = CardHook();

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const [isAdmin] = Admin();
const [isInstructor] = AInstructor();
  console.log(isAdmin,isInstructor)
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
        <div className="flex justify-center mt-8 mb-0">
  {user && (
    <div className="me-2" id="clickable">
      <img
        className="rounded-full"
        style={{ width: "150px" }}
        src={user.photoURL}
        alt=""
      />
      <h1 className='text-center mt-3 text-orange-700 text-2xl'>{user?.displayName}</h1>
    </div>
    
  )}
</div>
          {
            isAdmin ? <>
              <li className='pt-8'>
                <NavLink to="/dashboard/manageclasses" className={'text-orange-700'} ><SiGoogleclassroom />Manage Classes</NavLink>
                
                </li>
              
              <li>
                <NavLink to="/dashboard/manageuser" className={'text-orange-700'} ><FaUsers />Manage Users</NavLink>
                </li>
              
           
            </> :
            isInstructor ? <>
              <li className='pt-8'>
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
            <NavLink to="/ins" className={'text-orange-700'}><GiTeacher />Instructors</NavLink>{" "}
          </li>

          <li className="font-bold text-lg">
            <NavLink to="/classes" className={'text-orange-700'}><SiGoogleclassroom />Classes</NavLink>
          </li>
          <li>
          
  
        

        {user ? (
          <button
            onClick={handleLogOut} className='text-orange-700 btn btn-outline text-center pt-4 mt-1'
            >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn  btn-error hidden lg:block">
              Login
            </button>
          </Link>
        )} 
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;