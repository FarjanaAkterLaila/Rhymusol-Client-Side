import React, { useEffect, useState } from 'react';
import AxioSe from '../../Hook/AxioSe';
import { useQuery } from '@tanstack/react-query';

const Enrollcls = () => {
    const [cla,setCl] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/payments')
        .then(res => res.json())
        .then(data => setCl(data))
    },[])
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
                            
                            
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Enrollcls;