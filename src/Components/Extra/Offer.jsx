import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const events = [
    {
      title: 'Musical competition',
      date: 'June 30, 2023',
      location: 'Concert Hall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus nec nisl aliquam ultricies.',
      imageUrl: 'https://i.ibb.co/DfpY7WL/220512-ANTIOCH-17.jpg',
    },
    {
      title: 'Drums festival',
      date: 'July 15, 2023',
      location: 'Auditorium',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus nec nisl aliquam ultricies.',
      imageUrl: 'https://i.ibb.co/hMqtrJZ/Percussion-15162-733-2600x1000o-scaled.jpg',
    },
    {
      title: 'Jazz Festivel',
      date: 'August 5, 2023',
      location: 'Theater',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus nec nisl aliquam ultricies.',
      imageUrl: 'https://i.ibb.co/q55dfkj/download-4.jpg',
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="py-8">
    <div className="container mx-auto">
      <h2 className="text-center pt-8 font-bold text-orange-700 text-6xl mb-6" data-aos="fade-left" data-aos-delay="200">Latest Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " data-aos="fade-right" data-aos-delay="200">
        {events.map((event, index) => (
          <div key={index} className="rounded-lg  p-6">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-4xl font-bold mb-2 text-center ">{event.title}</h3>
            <p className="text-gray-900 mb-2 text-center text-xl">Date: {event.date}</p>
            <p className="text-gray-600 mb-4 text-center text-xl">Location: {event.location}</p>
            <p className="text-gray-600 text-center text-xl">{event.description}</p>
         
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Offer;
