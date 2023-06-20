import React, { useState, useEffect } from 'react';

const BrandName = () => {
  const [brands, setBrands] = useState([
    'https://i.ibb.co/xJ2ck7R/Classic-rock-country-guitar-music-260nw-1288583146.webp',
    'https://i.ibb.co/ZJ6N8Kg/guitar-music-western-vintage-retro-bar-cafe-logo-design-free-vector.jpg',
    'https://i.ibb.co/YdVPndw/1556606202-18677450065cc7ecfaeb91e3-36023281-500x500.png',
    'https://i.ibb.co/J75zgXr/d30f61f05d241359663e3019b9feab18.jpg',
    'https://i.ibb.co/JcDDjhW/ffe82e6e1b8f09df15b7e59b5ce1d711.jpg'
    // Add more picture URLs here
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBrands((prevBrands) => [
        prevBrands[prevBrands.length - 1], // Move the last brand to the beginning
        ...prevBrands.slice(0, prevBrands.length - 1), // Remove the last brand
      ]);
    }, 3000); // Change the brand every 3 seconds

    return () => {
      clearInterval(timer); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="bg-orange-50 pb-3 pt-0 mt-0">
      <h1
   
        className="text-center pt-4 font-bold text-orange-700 text-6xl"
      >
        Musical Brands
      </h1>
      <div className="max-w-7xl mx-auto  mb-8 pb-8">
        <div className="grid md:grid-cols-5 grid-cols-2 gap-8 rounded-lg p-5">
          {brands.map((brand, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg m-3">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-full animate__animated hover:animate__pulse h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandName;
