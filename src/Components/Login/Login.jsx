

const Login = () => {
    const backgroundImage =
    "https://i.postimg.cc/JhbDNKc4/top-view-desk-concept-with-musical-theme-23-2148282049.jpg";
    return (
        <div>
       <div className="hero py-10 ">
        <div  style={{ backgroundImage: `url(${backgroundImage})` }}
        className=" hero min-h-screen max-w-screen">
           <div className="hero-content flex-col-reverse gap-0 rounded-lg  shadow-2xl w-full  lg:flex-row-reverse">
            <div className="mx-5 opacity-90">
            <img  src="https://i.ibb.co/tPHgzvD/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.jpg" alt="" /> 
           
            </div>
            <div className=" animate__animated animate__fadeInLeft bg-[#818cf8] card  flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="input input-bordered"
                  />
                  {/* <h5 className="text-red-600 font-bold my-2">{error}</h5> */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 rounded-lg">
                
                  <input
                    className="btn btn-primary bg-pink-400 border-0 rounded-lg"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p className="text-center mt-2">-----------or---------</p>
                {/* <button onClick={handleGoogle} className="btn btn-primary bg-cyan-800 border-0 w-full my-3"><FaGoogle className="mx-2"></FaGoogle> Login with Google</button> */}
              </form>
              <p className="my-4 text-center">
                New to Toy House{" "}
                {/* <Link className="text-pink-600 font-bold" to="/signup">
                  Sign Up
                </Link>{" "} */}
              </p>
            </div>
          </div>
        </div>
      </div>
       </div>
       </div>
    );
};

export default Login;