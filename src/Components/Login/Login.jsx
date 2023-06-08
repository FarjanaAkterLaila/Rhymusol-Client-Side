import React, { useContext, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  
  const auth = getAuth(app);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = data => {
    const { email, password } = data;
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Logged in successfully.',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
        setError("Email or password is incorrect");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const backgroundImage =
    "https://i.postimg.cc/JhbDNKc4/top-view-desk-concept-with-musical-theme-23-2148282049.jpg";

  return (
    <div>
      <div className="hero py-10">
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="hero min-h-screen max-w-screen"
        >
          <div className="hero-content flex-col-reverse gap-0 rounded-lg shadow-2xl w-full lg:flex-row-reverse">
            <div className="mx-5 opacity-90">
              <img
                src="https://i.ibb.co/tPHgzvD/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.jpg"
                alt=""
              />
            </div>
            <div className="animate__animated animate__fadeInLeft bg-[#818cf8] card flex-shrink-0 w-full max-w-sm shadow-2xl">
              <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      {...register("email", { required: "Email is required" })}
                      placeholder="Email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-600 font-bold">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        {...register("password", { required: "Password is required" })}
                        placeholder="Password"
                        className="input input-bordered pr-32"
                      />
                      <button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="absolute inset-y-0 right-4 flex items-center  text-gray-600"
                      >
                        {passwordVisible ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </button>
                    
                    </div>
                    {errors.password && (
                      <span className="text-red-600 font-bold">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6 rounded-lg">
                    <input
                      className="btn btn-primary bg-[#2a3de3] border-0 rounded-lg"
                      type="submit"
                      value="Login"
                    />
                  </div>
                  <p className="text-center mt-2">-----------or---------</p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-primary bg-cyan-800 border-0 w-full my-3"
                  >
                    <FaGoogle className="mx-2" /> Login with Google
                  </button>
                </form>
                {error && (
                  <p className="text-red-600 font-bold">{error}</p>
                )}
                <p className="my-4 text-center">
                  New to Music School{" "}
                  <Link className="text-pink-600 font-bold" to="/reg">
                    Sign Up
                  </Link>
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
