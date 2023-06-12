import Poplarclass from "../Poplarclass/Poplarclass";
import Review from "../Reviews/Review";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider> 
            <Poplarclass></Poplarclass>
            <Review></Review>
        </div>
    );
};

export default Home;