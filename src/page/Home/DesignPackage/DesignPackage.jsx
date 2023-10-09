import { GiDoorRingHandle } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { TfiGift } from "react-icons/tfi";
import { Slide } from "react-awesome-reveal";

const DesignPackage = () => {
  return (
    <Slide>
      <div className="grid md:grid-cols-3 justify-items-center mb-20 mt-20 p-4">
        <div className="mb-4">
          <TfiGift className="text-5xl   opacity-70"></TfiGift>
          <h1 className=" font-medium font-serif mt-5 mb-5 text-3xl">
            Gift Package
          </h1>
          <p className="font-serif">
            We'll choose the perfect gift box for <br /> your present.
          </p>
        </div>
        <div className="mb-4">
          <GiDoorRingHandle className="text-5xl text-center   opacity-70"></GiDoorRingHandle>
          <h1 className=" font-medium font-serif mt-5 mb-5 text-3xl">
            Design Your Ring
          </h1>
          <p className="font-serif">
            Individual engraving to perpetuate <br /> the deepest feelings.
          </p>
        </div>
        <div className="mb-4">
          <IoDiamondOutline className="text-5xl text-center   opacity-70"></IoDiamondOutline>
          <h1 className=" font-medium font-serif mt-5 mb-5 text-3xl">
            Diamond Selection
          </h1>
          <p className="font-serif">
            Our consultants will help you to <br /> choose the right size.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default DesignPackage;
