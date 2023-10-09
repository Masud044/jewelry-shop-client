import Banner from "../Banner/Banner";
import DesignPackage from "../DesignPackage/DesignPackage";
import JewelrySelection from "../JewerlySelection/JewelrySelection";
import Testimonial from "../Testimonial/Testimonial";
import BestJewelry from "./BestJewelry/BestJewelry";


const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <DesignPackage></DesignPackage>
             <JewelrySelection></JewelrySelection>
           <BestJewelry></BestJewelry>
             <Testimonial></Testimonial>
        </div>
    );
};

export default Home;