import BrandName from "../Extra/BrandName";
import Gallery from "../Extra/Gallery/Gallery";
import Offer from "../Extra/Offer";
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
           <Gallery></Gallery>
           <BrandName></BrandName>
           <Offer></Offer>
            <Review></Review>
        </div>
    );
};

export default Home;