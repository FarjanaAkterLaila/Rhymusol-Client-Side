import React, { useContext, useEffect, useState } from 'react';
import AxioSe from '../../Hook/AxioSe';
import { AuthContext } from '../../Providers/AuthProvider';

const InsCar = () => {
    // const [cla,setCl] = useState([]);
    // useEffect(()=>{
    //     fetch('https://music-school-server-seven.vercel.app/user')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    const { user } = useContext(AuthContext);
  const [instructorRole, setInstructorRole] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const response = await AxioSe.get('/user', {
        headers: {
          Authorization: `Bearer ${user.token}` // Include the user's token in the request headers
        }
      }).catch(error => console.log(error));

      const userData = response?.data;
      const instructor = userData?.find(u => u.email === user.email); // Assuming the email is unique

      if (instructor) {
        setInstructorRole(instructor.role); // Set the instructor role in the state
      }
    };

    fetchUser();
  }, [user]);
    return (
        <div>
            
            <div>
      <p>Instructor Role: {instructorRole}</p>
    </div>
             {/* <div className="text-center mt-8 font-bold text-orange-700 text-6xl  ">Our Most Popler Instructor</div>
            <div className='grid md:grid-cols-3 md:mx-60 md:pt-32 gap-8'>
                         {
                            cla.map(item => (
<>
                                <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-52"src={item.img} alt="Shoes" /></figure>
          
            <div className="card-body flex flex-col items-start">
                <h2 className="card-title">{item.name}</h2>
                <h2 className="card-title">Instructor Name: {item.email}</h2>
                
             
            </div>
     </div></>
                            ))
                        } 
                     
                    </div>
        </div> */}
        </div>
    );
};

export default InsCar;