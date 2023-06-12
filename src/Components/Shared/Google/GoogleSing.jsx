import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSing = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
console.log(location);
console.log( from)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://music-school-server-farjanaakterlaila.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <p className="text-center mt-2">-----------or---------</p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-primary bg-cyan-800 border-0 w-full my-3"
                  >
                    <FaGoogle className="mx-2" /> Login with Google
                  </button>
               
        </div>
    );
};

export default GoogleSing;