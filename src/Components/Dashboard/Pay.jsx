// 

import { useEffect, useState } from "react";
import AxioSe from "../../Hook/AxioSe";

const Pay = () => {
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
                        <th>Id</th>
                        <th>Price</th>
                        <th>TransactionId
</th>
                    
                        <th>date
</th>
                       
                        
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
                                {item._id}
                            </td>
                            <td >{item.Price}</td>
                          
                            <td >${item.TransactionId}</td>
                            <td >${item.date}</td>
                            
                            
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Pay;