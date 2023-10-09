import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const JewelrySelection = () => {
  return (
    <div className="mt-10 mb-20">
       <hr className="mb-10" />
      <h1 className="mb-10 text-center text-amber-500 font-bold font-serif opacity-70">GET READY TO SPARKLE</h1>
      <h1 className="mb-10 opacity-70 text-center text-2xl font-bold font-serif">
        Our Jewelry Selection
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/VYYdMNV/choong-deng-xiang-WR98-S28o-RLM-unsplash-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/KVgnqy3/freestocks-zii-Uk-V9-Lpd-U-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/n1BWCPx/yiran-ding-N1-D6-PRck1b-I-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-80 w-120"
            src=" https://i.ibb.co/zsnCRdr/sabrianna-Y-bxf-Ta-i-UA-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/YpvMKd7/jan-zwarthoed-24-C4-Ml-ZRqe-I-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/YXRgG7K/ashton-mullins-j1-HU-Oll7-KI-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/zsnCRdr/sabrianna-Y-bxf-Ta-i-UA-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/FnTRyGn/nick-karvounis-Rje-Vqc8e-C3s-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-80 w-120"
            src="https://i.ibb.co/Dkyk2BD/cornelia-ng-hxt-Ksj-WSd3-M-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default JewelrySelection;
