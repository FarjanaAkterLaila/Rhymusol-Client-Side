import React from 'react';

const InsCar = ({item}) => {
    const {image, name, email} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-52"src={image} alt="Shoes" /></figure>
            <p className="absolute rounded-xl right-0 mr-4 mt-4 p-1 bg-orange-700 text-white">${Price}</p>
            <div className="card-body flex flex-col items-start">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Instructor Name: {email}</h2>
                
             
            </div>
        </div>
    );
};

export default InsCar;