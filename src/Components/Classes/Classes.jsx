import { useEffect, useState } from "react";
import Card from "./Card";


const Classes = () => {
 const [cla,setCl] = useState([]);
    useEffect(()=>{
        fetch('https://music-school-server-seven.vercel.app/classes')
        .then(res => res.json())
        .then(data => setCl(data))
    },[])
    return (
        <div>
            <div className='grid md:grid-cols-3 md:mx-60 md:pt-32 gap-8'>
                         {
                            cla.map(item => <Card
                                key={item._id}
                                item={item}
                            ></Card>)
                        } 
                     
                    </div>
        </div>
    );
};

export default Classes;