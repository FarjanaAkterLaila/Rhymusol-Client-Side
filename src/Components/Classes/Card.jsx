import { useContext } from "react";
import Swal from "sweetalert2";

import { useLocation, useNavigate } from "react-router-dom";
import 'animate.css';
import { AuthContext } from "../../Providers/AuthProvider";
import CardHook from "../../Hook/CardHook";
import Admin from "../../Hook/Admin";
import AInstructor from "../../Hook/AInstructor";


const Card = ({item}) => {
    const {user}=useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();
    const[,refetch] = CardHook();
      
    const handleAddToCart = item => {
        console.log(item);
        console.log(user.role)
        if(user && user.email){
            const cardItem = { cardItemId: _id, Image, Name, InstructorName,AvailableSeats,Price, email: user.email ,role: user.role}
            if (user.role === 'Admin' || user.role === 'Instructor') {
               
             return;
              }
         
            fetch('https://music-school-server-farjanaakterlaila.vercel.app/addcard', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cardItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                          },
                        title: 'Class added on the cart.',
                        // showConfirmButton: false,
                        // timer: 1500
                      })
                }
            })
        }
    
        else{
            Swal.fire({
                title: 'Please login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    const {_id,Image, Name, InstructorName,AvailableSeats,Price} = item;
    return (
        <div className={`card w-96  shadow-xl ${AvailableSeats=== 0 ? 'bg-red-400': 'bg-base-100'}`}>
            <figure><img className="w-full h-52" src={Image} alt="Shoes" /></figure>
            <p className="absolute rounded-xl right-0 mr-4 mt-4 p-1 bg-orange-700 text-white">${Price}</p>
            <div className="card-body flex flex-col items-start">
                <h2 className="card-title">{Name}</h2>
                <h2 className="card-title">Instructor Name: {InstructorName}</h2>
                <p className="card-title">Available Seats: {AvailableSeats}</p>
                <div className="card-actions justify-end mx-auto">
                <button onClick={() => handleAddToCart(item)} className={`btn btn-error bg-slate-100 border-0 border-b-4 border-orange-400 mt-4 ${user && (user.role === 'Admin' || user.role === 'Instructor') ? 'cursor-not-allowed opacity-50' : ''}`} disabled={AvailableSeats === 0 || (user && (user.role === 'Admin' || user.role === 'Instructor'))}>
            Add to Enrolled
          </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
