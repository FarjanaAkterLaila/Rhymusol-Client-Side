import { FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";
import CardHook from "../../Hook/CardHook";
import { Link } from "react-router-dom";



const Myadditem = () => {
    const [card , refetch] = CardHook();
   
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://music-school-server-farjanaakterlaila.vercel.app/addcard/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        
        <div className="w-full">
        
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Total Selected Classes: {card.length}</h3>
         
           
        </div>
        <div className="overflow-x-auto mx-40">
            <table className="table w-full text-xl">
            
                <thead className="text-xl">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>AvailableSeats</th>
                        <th>Price</th>
                        <th>Pay</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        card.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.Image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.Name}
                            </td>
                            <td >{item.InstructorName}</td>
                            <td >{item.AvailableSeats}</td>
                            <td >${item.Price}</td>
                            <td>
                           <Link to = {`/dashboard/payment/${item._id}`} ><button className="btn btn-error btn-sm">PAY</button></Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-orange-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Myadditem;
