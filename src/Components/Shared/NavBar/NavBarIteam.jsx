import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
//import { Tooltip } from "react-tooltip";
import { BsFillCartCheckFill } from "react-icons/bs";
import CardHook from "../../../Hook/CardHook";


const NavBarIteam = () => {
   // use theme from local storage if available or set light theme
   const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

const [card]= CardHook();
console.log(card.length)
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
      <Link to="/ins">Instructors</Link>{" "}
    </li>

    <li className="font-bold text-lg">
      <Link to="/classes">Classes</Link>
    </li>
    
    
    { user?.email ?  <>
      <li className="font-bold">
      <Link to="/dashboard"><BsFillCartCheckFill style={{fontSize:'2rem'}}>
        
        </BsFillCartCheckFill><div className="bg-orange-300 text-black text-lg rounded-lg px-2">+{card?.length || 0}</div></Link>
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
  <div className=" navbar z-10 lg:fixed bg-opacity-70  bg-white text-black ">
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
            className="menu menu-compact static z-50 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="h-16 w-18 rounded-lg" src="https://i.ibb.co/BzbyPdt/pngtree-color-music-logo-png-image-6541033.png" alt="" />
        <h1 className="font-bold text-orange-700 text-4xl ">
        Rhy<span className="text-black">Musol</span>
        </h1>
      </div>
      <div className="flex-none">
      <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src="https://i.ibb.co/vPbpJw1/photo-1588345921523-c2dcdb7f1dcd.jpg" alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src="https://i.ibb.co/mzMZVN1/download-3.jpg"alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
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