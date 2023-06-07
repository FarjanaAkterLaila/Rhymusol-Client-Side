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
        <div>
           
            <img src="https://i.postimg.cc/dQgP7SKz/MSOEMusic-Education-1200x800.jpg" />
        </div>
        <div>
            <img src="https://i.postimg.cc/0yWb1f7c/istockphoto-1198643374-612x612.jpg" />
          
        </div>
        <div>
            <img src="https://i.postimg.cc/Xvkv65ts/i-Stock-929300250-musicc-schooll-soundd-classroomm-studentt-teacherr.jpg" />
           
        </div>
        <div>
        <img src="https://i.postimg.cc/9QL5xgyF/istockphoto-1198643374-612x612-1.jpg" />
           
        </div>
    </Carousel>
    );
};

export default Slider;