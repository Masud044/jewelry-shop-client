import { Slide } from "react-awesome-reveal";


const BestJewelry = () => {
    return (
        <Slide> <div className="md:grid md:grid-cols-2 gap-4 ">
        <div className="">
            <img src="https://i.ibb.co/xjrt6Lv/h6-banner-n01.jpg" alt="image" />
        </div>
        <div className="text-center mt-40">
           <h2 className="text-amber-400 font-serif font-semibold mb-5 ">CREATE MEMORIES</h2>
           <h1 className="mb-5 text-5xl  font-serif font-semibold">Best Friend <br /> Jewelry</h1>
           <p className="leading-7 font-serif font-medium">Thanks so much for sending such joy my way! I <br /> was impressed from the moment I opened my <br /> package. Each piece of jewellery was <br />individually wrapped to look like a million <br /> dollars ... almost too good to open! The <br />jewellery itself is awesome</p>
        </div>
   </div></Slide>
       
    );
};

export default BestJewelry;