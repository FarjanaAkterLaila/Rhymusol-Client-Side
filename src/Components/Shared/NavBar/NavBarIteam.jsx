import { Link } from "react-router-dom";


const NavBarIteam = () => {
//     const navOptions = <>
//     <li><a>Item 555</a></li>
//     <li tabIndex={0}>
//         <a className="justify-between">
//             Parent
           
//         </a>
      
//     </li>
//     <li><a>Item 3</a></li>
// </>

// return (
//     <>
//         <div className="navbar  bg-opacity-40  bg-black text-white">
//             <div className="navbar-start flex items-center">
//                 <div className="dropdown lg:hidden">
//                     <label tabIndex={0} className="btn btn-ghost">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <img
//             className="ml-4 w-12 sm:w-20"
//             src="https://i.ibb.co/BzbyPdt/pngtree-color-music-logo-png-image-6541033.png"
//             alt=""
//           />
//           <div className="ml-4">
//             <a className="btn btn-ghost normal-case font-bold text-orange-700 text-2xl sm:text-4xl">
//               Rhythmia
//               <h1 className="text-white text-base sm:text-lg">Musical School</h1>
//             </a>
//           </div>
              
               
//             </div>
//             <div className="navbar-center hidden lg:flex flex-1 justify-center">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Get started</a>
//         </div>
//         </div>
//     </>

//     );
// };
// const navOptions = <>
// <li><a>Item 555</a></li>

// <li><a>Item 3</a></li>

// </>

// return (
// <>
//     <div className="navbar  z-10 bg-opacity-40  bg-black text-white ">
//         <div className="navbar-start">
//             <div className="dropdown">
//                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                 </label>
//                 <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
//                     {navOptions}
//                     <button className="btn">Button</button>
//                 </ul>
//             </div>
         
//             {/* <div className="flex flex-col items-center sm:flex-row sm:items-center">
//   <img
//     className="mt-4 mb-2 w-12 sm:w-20"
//     src="https://i.ibb.co/BzbyPdt/pngtree-color-music-logo-png-image-6541033.png"
//     alt=""
//   />

//   <div className="text-center sm:text-right">
//     <h1 className="text-white text-2xl sm:text-4xl font-bold">Rhythmia</h1>
//     <h1 className="text-white text-base sm:text-lg hidden md:block lg:hidden">Musical School</h1>
//   </div>
// </div> */}


//   {/* <img
//     className=" w-20"
//     src="https://i.ibb.co/BzbyPdt/pngtree-color-music-logo-png-image-6541033.png"
//     alt=""
//   />


//     <h1 className="text-3xl text-orange-700 sm:text-4xl font-bold">Rhythmia</h1>
//     <h1 className="text-white text-base sm:text-lg hidden md:block">Musical School</h1> */}
  


//                    <img
//              className="ml-4 w-12 sm:w-20"
//              src="https://i.ibb.co/BzbyPdt/pngtree-color-music-logo-png-image-6541033.png"
//              alt=""
//            />
//            <div className="ml-4">
//              <a className="btn btn-ghost normal-case font-bold text-orange-700 text-2xl sm:text-4xl">
//                Rhythmia
//                <h1 className="text-white text-base sm:text-lg">Musical School</h1>
//              </a>
//            </div>





     
//         </div>
//         <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">
//                 {navOptions}
                
//             </ul>
          
//         </div>
//         <div className="navbar-end hidden lg:flex"> <button className=" btn">Button</button></div>
        
//     </div>
// </>
// )}
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
      <Link to="/blog">Classes</Link>
    </li>
    
    
    {/* { user?.email ?  <>
      <li className="font-bold">
      <Link to="/addtoy">Add Toys</Link>
    </li>
    <li className="font-bold">
      <Link to="/mytoy">My Toys</Link>
    </li>
          
      </> 
      : <li> </li>
     } */}
  </>
);
return (
  <div className=" navbar  z-10 bg-opacity-60  bg-white text-black ">
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
        <h1 className="font-bold text-orange-700 text-2xl ">
        Rhythmia<p className="text-black lg:text-lg text-sm">MusicalSchool</p>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {/* {user && (
              // <Tooltip className=""  place="BottomRight" anchorSelect="#clickable">
              //   <button className="bg-blue">{user.displayName}</button>
              // </Tooltip>
              <Tooltip anchorSelect="#clickable" className='text-dark bg-light'>
              <button className='text-dark bg-light border-0 '>{user.displayName}</button>
              </Tooltip>
              
              
            )} */}

      <div className="navbar-end">
        {/* {user && (
          <div style={{ width: "50px" }} className="me-2" id="clickable">
            {" "}
            <img
              className="rounded-full"
              style={{ width: "40px" }}
              src={user.photoURL}
              alt=""
            />
          </div>
        )} */}

        {/* {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary bg-cyan-800 border-0 "
          >
            Logout
          </button>
        ) : ( */}
          <Link to="/login">
            <button className="btn  btn-error">
              Login
            </button>
          </Link>
        {/* )} */}
      </div>
    </div>
  </div>
);
};

export default NavBarIteam;