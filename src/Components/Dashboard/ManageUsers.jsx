import { useQuery } from '@tanstack/react-query';
import  { useState } from 'react';
import { FaTrashAlt} from 'react-icons/fa';
import Swal from 'sweetalert2';
import AxioSe from '../../Hook/AxioSe';

const ManageUsers = () => {

const [axiosSecure] = AxioSe();
const { data: users = [], refetch } = useQuery(['user'], async () => {
    const res = await axiosSecure.get('/user')
    return res.data;
})
  const [selectedUsers, setSelectedUsers] = useState([]); 

  const handleMakeAdmin = (user) => {
    if (user.role === 'Admin' || selectedUsers.includes(user._id)) {
      return; 
    }

    fetch(`https://music-school-server-farjanaakterlaila.vercel.app/user/admin/${user._id}`, {
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
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstr = (user) => {
    if (user.role === 'Instructor' || selectedUsers.includes(user._id)) {
      return; 
    }

    fetch(`https://music-school-server-farjanaakterlaila.vercel.app/user/instructor/${user._id}`, {
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
            title: `${user.name} is an Instructor Now!`,
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

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Users: {users.length}</h3>
      </div>
      <div className="overflow-x-auto mx-40">
        <table className="table w-full text-xl">
          <thead className="text-xl text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  {item.role === 'Admin' ? (
                    'Admin'
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(item)}
                      className="btn btn-ghost bg-orange-600 text-white mr-4"
                      disabled={selectedUsers.includes(item._id) || item.role === 'Instructor'}
                    >
                      Admin
                    </button>
                  )}
                  {item.role === 'Instructor' ? (
                    'Instructor'
                  ) : (
                    <button
                      onClick={() => handleMakeInstr(item)}
                      className="ml-4 btn btn-ghost bg-orange-600 text-white"
                      disabled={selectedUsers.includes(item._id) || item.role === 'Admin'}
                    >
                      Instructor
                    </button>
                  )}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
