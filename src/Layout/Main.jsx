import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavBarIteam from "../Components/Shared/NavBar/NavBarIteam";

import 'react-tooltip/dist/react-tooltip.css'
const Main = () => {
    return (
        <div className="font-serif">
            <NavBarIteam></NavBarIteam>
            <Outlet></Outlet>
            <Footer></Footer> 
        </div>
    );
};

export default Main;