import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel renderThumbs={() => null}
            infiniteLoop
            autoPlay
            interval={2000}
            transitionTime={1000}
       
        >
            <div className="relative">
                <img src="https://i.postimg.cc/dQgP7SKz/MSOEMusic-Education-1200x800.jpg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 lg:mt-20 sm:mt-40">
                    <h2 className="text-sm sm:text-8xl font-bold sm:mb-2">Harmony in Motion</h2>
                    <p className="sm:text-2xl text-sm mb-4 mx-6 sm:mx-40 text-center">Discover the transformative power of music as we unlock the boundless melodies residing deep within us.</p>
                    <div className="flex">
                        <button className="btn btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 py-2 rounded mr-2">See More</button>
                        <button className="btn glass btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 lg:px-12 py-2 rounded mr-2">Join Us</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="https://i.postimg.cc/0yWb1f7c/istockphoto-1198643374-612x612.jpg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 lg:mt-20 sm:mt-40">
                    <h2 className="text-sm sm:text-8xl font-bold sm:mb-2">Rhythm of Success</h2>
                    <p className="sm:text-2xl text-sm mb-4 mx-6 sm:mx-40 text-center">Experience the rhythm that propels us towards success, where music becomes the bridge that connects hearts and minds</p>
                    <div className="flex">
                        <button className="btn btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 py-2 rounded mr-2">See More</button>
                        <button className="btn glass btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 lg:px-12 py-2 rounded mr-2">Join Us</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="https://i.postimg.cc/Xvkv65ts/i-Stock-929300250-musicc-schooll-soundd-classroomm-studentt-teacherr.jpg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 lg:mt-20 sm:mt-40">
                    <h2 className="text-sm sm:text-8xl font-bold sm:mb-2">Notes of Excellence</h2>
                    <p className="sm:text-2xl text-sm mb-4 mx-6 sm:mx-40 text-center">Immerse yourself in a world of excellence where each note carries the power to inspire and transform.</p>
                    <div className="flex">
                        <button className="btn btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 py-2 rounded mr-2">See More</button>
                        <button className="btn glass btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 lg:px-12 py-2 rounded mr-2">Join Us</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="https://i.postimg.cc/9QL5xgyF/istockphoto-1198643374-612x612-1.jpg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 lg:mt-20 sm:mt-40">
                    <h2 className="text-sm sm:text-8xl font-bold sm:mb-2">Symphony of Talent</h2>
                    <p className="sm:text-2xl text-sm mb-4 mx-6 sm:mx-40 text-center">Uniting Voices, Instruments, and Passion!</p>
                    <div className="flex">
                        <button className="btn btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 py-2 rounded mr-2">See More</button>
                        <button className="btn glass btn-sm md:btn-md lg:btn-lg btn-error text-white px-4 lg:px-12 py-2 rounded mr-2">Join Us</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;