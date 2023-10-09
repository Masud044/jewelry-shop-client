import Banner from "../Banner/Banner";
import DesignPackage from "../DesignPackage/DesignPackage";
import JewelrySelection from "../JewerlySelection/JewelrySelection";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <DesignPackage></DesignPackage>
             <JewelrySelection></JewelrySelection>
             <Testimonial></Testimonial>
        </div>
    );
};

export default Home;