import { FaTrashAlt } from "react-icons/fa";
import Class from "../../Hook/Class";


const ManageClasses = () => {
    const [classes]=Class();
   // const handleDelete = item => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         fetch(`https://music-school-server-farjanaakterlaila.vercel.app/addclasses/${item._id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data.deletedCount > 0) {
        //                     refetch();
        //                     Swal.fire(
        //                         'Deleted!',
        //                         'Your file has been deleted.',
        //                         'success'
        //                     )
        //                 }
        //             })
        //     }
        // })
    //}
    return (
       
           <div className='w-full px-10 '>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Confirm Classes</h3>
            </div>
            <div className="overflow-x-auto mx-4">
            <table className="table w-full text-xl">
            
                <thead className="text-xl">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>AvailableSeats</th>
                        <th>Price</th>
                        <th>Status</th>
                        {/* <th>Deny</th> */}
                        <th>send feedback</th>
                        
                    </tr>
                </thead>
                <tbody>
                     {
                        classes.map((item, index) => <tr
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
                            <td >{item.InstactorEmail}</td>
                            <td >{item.AvailableSeats}</td>
                            <td >${item.Price}</td> 
                            
                        {/* <button className="btn btn-error btn-sm">Approve</button>
                        
                        
                        <button className="btn btn-error btn-sm">Deny</button> */}
                         <td>
                  {item.Status === 'Approve' ? (
                    'Approve'
                  ) : (
                    <button
                    //   onClick={() => handleMakeAdmin(item)}
                      className="btn btn-ghost bg-orange-600 text-white mt-2 p-2"
                    //   disabled={selectedUsers.includes(item._id) || item.role === 'Instructor'}
                    >
                     Approve
                    </button>
                  )}
                  {item.Status === 'Deny' ? (
                    'Deny'
                  ) : (
                    <button
                    //   onClick={() => handleMakeInstr(item)}
                      className="mt-4 px-6 btn btn-ghost bg-orange-600 text-white"
                    //   disabled={selectedUsers.includes(item._id) || item.role === 'Admin'}
                    >
                      Deny
                    </button>
                  )}
                </td>
                           
                            <td>
                            <button className="btn btn-error btn-lg ">send feedback</button>
                            </td>
                           
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ManageClasses;