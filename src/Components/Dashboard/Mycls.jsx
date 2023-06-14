import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Updatecls from "./Update/Updatecls";

const Mycls = () => {
    const [cla,setCl] = useState([]);
    const { user } = useContext(AuthContext);
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(()=>{
    //     fetch('https://music-school-server-farjanaakterlaila.vercel.app/classes')
    //     .then(res => res.json())
    //     .then(data => setCl(data))
    // },[])

    // const filteredCla = cla.filter(item => item.email === user?.InstactorEmail);
    fetch(`https://music-school-server-farjanaakterlaila.vercel.app/classes/${user?.email}`)
    .then((res) => res.json())
    .then((result) => {
        setCl(result);
    });
}, [user]);
// const handleUpdateClick = (item) => {
//     setSelectedItem(item);
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedItem((prevItem) => ({
//       ...prevItem,
//       [name]: value,
//     }));
//   }
// const updateInformation = () => {
//     // Perform update logic for the specific item using selectedItem state
//     const requestOptions = {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(selectedItem),
//     };

//     fetch(`https://music-school-server-farjanaakterlaila.vercel.app/classes/${selectedItem._id}`, requestOptions)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Updated data:", data);
//         // Handle success or error response
//       })
//       .catch((error) => {
//         console.error("Error updating data:", error);
//         // Handle error
//       });

//     setSelectedItem(null);
//   };
const navigate = useNavigate()
    return (
        <div className="w-full">
        
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Total Selected Classes: {cla.length}</h3>
         
           
        </div>
        <div className="overflow-x-auto mx-40">
            <table className="table w-full text-xl">
            
                <thead className="text-xl">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Price</th>
                        <th>Enrolled Students</th>
                        <th>Feedback</th>
                        <th>Update button</th>
                       

                    </tr>
                </thead>
                <tbody>
                    {
                     cla.map((item, index) => <tr
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
                          
                            <td >${item.Price}</td>
                            <td >${item.enrolledstude}</td>
                             <td>
                  {item.status === "Approved" && item.feedback ? (
                    <button className="btn btn-success">{item.feedback}</button>
                  ) : item.status === "Deny" && item.feedback ? (
                    <button className="btn btn-warning">{item.feedback}</button>
                  ) : (
                    <button className="btn btn-outline btn-accent">Pending</button>
                  )}
                </td>
                            <td >
                            
            <button className="btn btn-error"onClick={()=>navigate(`/dashboard/update/${item._id}`)}>Update</button>
                            </td>
                            
                            
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Mycls;