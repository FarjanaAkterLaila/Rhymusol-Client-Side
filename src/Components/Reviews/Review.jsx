import React from 'react';
import { FaStar } from 'react-icons/fa';
const reviews = [
    {
      id: 1,
      name: 'Alexandra Johnson',
      review: 'I had an amazing experience at the music school! The instructors are talented and patient. They provide a supportive environment for learning music. Highly recommend!',
      rating: 5,
      image: 'https://i.ibb.co/jWLPnwx/images.jpg'
    },
    {
      id: 2,
      name: 'Michael Davis',
      review: 'The music school has exceeded my expectations. The instructors are knowledgeable and passionate about music. I\'ve seen significant improvement in my skills since joining.',
      rating: 4.5,
      image: 'https://i.ibb.co/k2g5CFP/images-1.jpg'
    },
    {
      id: 3,
      name: 'Sophia Lee',
      review: 'I\'m so glad I found this music school. The staff is friendly and professional, and the classes are well-structured. It\'s been a fantastic learning journey for me.',
      rating: 5,
      image: 'https://i.ibb.co/JqmHgQh/download.jpg'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      review: 'The music school provides a welcoming and inclusive atmosphere. The instructors are skilled and dedicated, and they make learning music enjoyable. I\'m grateful for the experience.',
      rating: 4,
      image: 'https://i.ibb.co/hyJLzqY/images-2.jpg'
    }
  ];
const Review = () => {
    return (
        <div className="review-section p-4 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4 text-center  text-orange-700">Student's Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={review.image} alt={review.name} className="rounded-full w-20 h-20 object-cover mb-4 mx-auto" />
              <div className="text-center">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-600">{review.review}</p>
                <div className="flex items-center justify-center mt-2">
                  <span className="font-semibold mr-1"></span>
                  {Array.from({ length: review.rating }, (_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Review;