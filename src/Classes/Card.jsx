import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Card = ({item}) => {
    const {user}=useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddToCart = item => {
        console.log(item);
        if(user){
            
            fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                     // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
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
    const {Image, Name, InstructorName,AvailableSeats,Price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <p className="absolute rounded-xl right-0 mr-4 mt-4 p-1 bg-orange-700 text-white">${Price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{Name}</h2>
                <h2 className="card-title">{InstructorName}</h2>
                <p>{AvailableSeats}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-error bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;