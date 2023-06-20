
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css'
const Gallery = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    
    
    
    return (
        <div className='pt-5 mt-5 mb-12 pb-0'>
      <h2 className="text-center pt-8 font-bold text-orange-700 text-6xl">Musical Activites</h2>
      <br /><br />
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-4">
          <div className="w-full md:w-1/3 px-4 " data-aos="fade-up" data-aos-delay="200">
            <div className="hovereffect">
              <img src="https://i.ibb.co/y0k72Mp/activities-to-learn-about-musical-instruments-1024x683.jpg" className="w-full h-full" alt="images" />
              <div className="overlay">
                <h2 className="text-center">Child Activites Zone</h2>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 " data-aos="fade-up" data-aos-delay="400">
            <div className="hovereffect">
              <img src="https://i.ibb.co/CPD8G4p/20182-F082-F242-F092-F242-F042-Fd1b8f8f0-ff5e-4618-b8c1-755c297e91802-Fmusical-chairs.jpg" className="w-full h-full" alt="images" />
              <div className="overlay">
                <h2>Musical chairs (with instruments!)</h2>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4" data-aos="fade-up" data-aos-delay="600">
            <div className="hovereffect">
              <img src="https://i.ibb.co/FWzc4T7/instrument-for-children.jpg" className="w-full h-full" alt="images" />
              <div className="overlay">
                <h2>Students enjoy their teacher</h2>
              </div>
            </div>
          </div>

          {/* More image cards... */}
        </div>
      </div>

     
     
    </div>
    );
};

export default Gallery;