import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css";

import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Slide>
      <div className="carousel w-full h-[500px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/qBRf8RY/sabrianna-Y-bxf-Ta-i-UA-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle  bg-gray-400">
              ❮
            </a>
            <div>
              <h1 className="animate__animated animate__backInLeft opacity-80 text-3xl  text-amber-300 font-bold ">
              Our Expertise Your Diamond
              </h1>
            </div>
            <a href="#slide2" className="btn btn-circle  bg-gray-400">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/vk9fKFB/image-1920x-2.jpg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle  bg-gray-400">
              ❮
            </a>
            <div>
              <h1 className=" animate__animated animate__backInRight font-semibold text-3xl text-amber-300 mb-4">
              We Develop Create Custom Jewels
              </h1>
            </div>
            <a href="#slide3" className="btn btn-circle  bg-gray-400">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/nwmp7hq/h10-banner07.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle  bg-gray-400">
              ❮
            </a>
            <div>
              <h1 className="animate__animated animate__backInDown font-semibold text-3xl text-amber-400 mb-4">
               Stylish Jewelry Collection
              </h1>
            </div>
            <a href="#slide1" className="btn btn-circle  bg-gray-400">
              ❯
            </a>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Banner;
