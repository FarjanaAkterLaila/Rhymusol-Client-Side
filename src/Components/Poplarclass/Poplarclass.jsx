import { useEffect, useState } from "react";



const Poplarclass = () => {
    const [cla,setCl] = useState([]);
    useEffect(()=>{
        fetch('https://music-school-server-farjanaakterlaila.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            const topClasses = data.slice(0, 6);
            setCl(topClasses)})
    },[])
    return (
        <div className="text-center">
            
            <div className="text-center mt-8 font-bold text-orange-700 text-6xl  ">Our Most Popler Classes</div>
            
       <h1 className="text-lg mt-8">Students learn pedagogical techniques, curriculum development, classroom management, and how to teach music theory, instrumental or vocal skills, and ensemble playing.</h1>
      
            <div className='grid md:grid-cols-3 md:mx-60 md:pt-32 gap-8'>
                         {
                            cla.map(item => <><div className="card w-96  shadow-xl bg-base-100">
                            <figure><img className="w-full h-52" src={item.Image} alt="Shoes" /></figure>
                           
                            <div className="card-body flex flex-col items-start text-left">
                                <h2 className="card-title">{item.Name}</h2>
                                <h2 className="card-title ">Instructor Name:{item.InstructorName}</h2>
                                <p className="card-title">Available Seats:{item.AvailableSeats}</p>
                               
                            </div>
                        </div></>)
                        } 
                 </div>    
     
        </div>
    );
};

export default Poplarclass;