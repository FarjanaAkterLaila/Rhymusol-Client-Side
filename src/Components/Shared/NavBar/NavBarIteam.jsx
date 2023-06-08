import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
//import { Tooltip } from "react-tooltip";
import { BsFillCartCheckFill } from "react-icons/bs";

const NavBarIteam = () => {

  const { user, logOut } = useContext(AuthContext);
//console.log(user.photoURL);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
const navItems = (
  <>
    <li className="font-bold text-lg">
      <Link to="/">Home</Link>{" "}
    </li>
    <li className="font-bold text-lg">
      {" "}
      <Link to="/alltoys">Instructors</Link>{" "}
    </li>

    <li className="font-bold text-lg">
      <Link to="/classes">Classes</Link>
    </li>
    
    
    { user?.email ?  <>
      <li className="font-bold">
      <Link to="/addtoy"><BsFillCartCheckFill style={{fontSize:'2rem'}}></BsFillCartCheckFill></Link>
    </li>
   
          
      </> 
      : <li> </li>
     }
   
   {user ? (
        <li>
          <button
            onClick={handleLogOut}
            className="btn btn-primary bg-cyan-800 border-0 lg:hidden"
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">
            <button className="btn btn-error lg:hidden">Login</button>
          </Link>
        </li>
      )}
      
  </>
);
return (
  <div>
  <div className=" navbar z-10 fixed bg-opacity-70  bg-white text-black ">
    <div className=" max-w-7xl mx-auto navbar h-20 mb-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="h-16 w-18 rounded-lg" src="https://i.ibb.co/BzbyPdt/pngtree-color-music-logo-png-image-6541033.png" alt="" />
        <h1 className="font-bold text-orange-700 text-4xl ">
        Rhy<span className="text-black">Musol</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
 
      </div>
      {user && (
              <Tooltip anchorSelect="#clickable" className='text-dark bg-drak' place="top-start">
              <button className='text-dark bg-drak border-0'>{user.displayName}</button>
            </Tooltip>
              
              
            )}

       <div className="navbar-end">
        {user && (
          <div style={{ width: "50px" }} className="me-2" id="clickable">
            {" "}
            <img
              className="rounded-full"
              style={{ width: "40px" }}
              src={user.photoURL}
              alt=""
            />
            
          </div>
        )} 
  
        

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary bg-cyan-800 border-0 hidden lg:block"
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
       </div> 
    </div>
  </div>
  </div>
);
};

export default NavBarIteam;