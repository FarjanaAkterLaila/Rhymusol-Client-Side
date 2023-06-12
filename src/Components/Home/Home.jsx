import InsCar from "../Instractor/InsCar";
import Instuctors from "../Instractor/Instuctors";
import Poplarclass from "../Poplarclass/Poplarclass";
import Review from "../Reviews/Review";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider> 
            <Poplarclass></Poplarclass>
           <Instuctors></Instuctors>
            <Review></Review>
        </div>
    );
};

export default Home;