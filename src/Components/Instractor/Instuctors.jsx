import  { useEffect, useState } from 'react';


const Instuctors = () => {
    const [cla,setCl] = useState([]);
    useEffect(()=>{
        fetch('https://music-school-server-seven.vercel.app/instractor')
        .then(res => res.json())
        .then(data => setCl(data))
    },[])
    return (
   
        <div>
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
        </div>
    );
};

export default Instuctors;