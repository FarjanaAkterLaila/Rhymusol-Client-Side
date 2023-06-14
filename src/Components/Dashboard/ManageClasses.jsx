import { FaTrashAlt } from "react-icons/fa";
import Class from "../../Hook/Class";
import Swal from "sweetalert2";
import { useState } from "react";
import CardHook from "../../Hook/CardHook";
import AxioSe from "../../Hook/AxioSe";
import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {
    const [classes]=Class();
   
    const [axiosSecure] = AxioSe();
    const { data: user = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const [selectedUsers, setSelectedUsers] = useState([]); 
    const [feedback, setFeedback] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const handleMakeApproved = (user) => {
      if (user.status === 'Approved' || selectedUsers.includes(user._id)) {
        return; 
      }
  
      fetch(` https://music-school-server-farjanaakterlaila.vercel.app/classes/approved/${user._id}`, {
        method: 'PATCH',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.Name} is  Approved!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };
    const handleMakeDeny = (user) => {
      if (user.status === 'Deny' || selectedUsers.includes(user._id)) {
        return; 
      }
  
      fetch(` https://music-school-server-farjanaakterlaila.vercel.app/classes/deny/${user._id}`, {
        method: 'PATCH',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.Name} is Deny!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    };
    const UserSelection = (user) => {
      if (selectedUsers.includes(user._id)) {
        setSelectedUsers(selectedUsers.filter((id) => id !== user._id)); 
      } else {
        setSelectedUsers([...selectedUsers, user._id]); 
      }
    };
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

    const handleSendFeedback = (item) => {
      if (!feedback) {
        return;
      }
    
      fetch(`https://music-school-server-farjanaakterlaila.vercel.app/classes/feedback/${item._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback: feedback,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === "Feedback saved successfully.") {
            refetch();
            setShowModal(false);
            setFeedback('');
           
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "Feedback sent successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            // Close the feedback modal
          }
        });
    };
   
    const openModal = (item) => {
      setCurrentItem(item);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setCurrentItem(null);
      setShowModal(false);
    };
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
                  {item.status === 'Approved' ? (
                    'Approved'
                  ) : (
                    <button
                       onClick={() => handleMakeApproved(item)}
                      className="btn btn-ghost bg-orange-600 text-white mt-2 p-2"
                       disabled={selectedUsers.includes(item._id) || item.status === 'Deny'}
                    >
                     Approve
                    </button>
                  )}
                  {item.status === 'Deny' ? (
                    'Deny'
                  ) : (
                    <button
                       onClick={() => handleMakeDeny(item)}
                      className="mt-4 px-6 btn btn-ghost bg-orange-600 text-white"
                       disabled={selectedUsers.includes(item._id) || item.status === 'Approved'}
                    >
                      Deny
                    </button>
                  )}
                </td>
                           
                <td>
                  <button
                    onClick={() => openModal(item)}
                    className="btn btn-error btn-lg"
                    disabled={selectedUsers.includes(item._id)
                    
                    }
                  >
                    Send Feedback
                  </button>
                </td>
                           
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
        {showModal && currentItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Send Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter feedback"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            ></textarea>
            <div className="flex justify-end">
              <button onClick={closeModal} className="btn btn-secondary mr-2">
                Cancel
              </button>
              <button onClick={() => handleSendFeedback(currentItem)} className="btn btn-primary">
                Send Feedback
              </button>
         
            </div>
          </div>
        </div>
      )}
        </div>
    );
};

export default ManageClasses;

