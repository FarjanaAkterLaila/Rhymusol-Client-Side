import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

// import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Reg = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { createUser, update } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                update(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated');
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            navigate('/');
                        });
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                console.log(error);
                if (error.code === 'auth/email-already-in-use') {
                    setError('Email is already in use');
                } else {
                    setError(error.message);
                }
            });
    };
    const backgroundImage =
        "https://i.postimg.cc/JhbDNKc4/top-view-desk-concept-with-musical-theme-23-2148282049.jpg";

    return (


        <div>
            <div className="hero">
                <div
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className="hero min-h-screen max-w-screen"
                >
                    <div className="hero-content flex-col-reverse gap-0 rounded-lg shadow-2xl w-full lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <h1 className="text-3xl text-center font-bold">SignUp</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            {...register("confirmPassword", {
                                                required: true,
                                                validate: value =>
                                                    value === password.current || "Passwords do not match",
                                            })}
                                            placeholder="Confirm Password"
                                            className="input input-bordered"
                                        />
                                        {errors.confirmPassword?.type === 'required' && (
                                            <p className="text-red-600">Confirm Password is required</p>
                                        )}
                                        {errors.confirmPassword?.message && (
                                            <p className="text-red-600">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                                {error && (
                                    <p className="text-red-600 mb-2">{error}</p>
                                )}
                            </form>
                            <p><small className='ml-4 mb-3'>Already have an account <Link to="/login" className='text-blue-700'>Login</Link></small></p>
                        </div>
                        <div className="mx-5 opacity-90">
                            <img
                                src="https://i.ibb.co/tPHgzvD/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Reg;
