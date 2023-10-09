import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  return (
    <div className="mt-20 mb-40 ">
      <h2 className="text-center font-serif text-amber-500 opacity-70 font-semibold mb-5">
        CLIENT TESTIMONIALS
      </h2>
      <h1 className="text-center font-semibold font-serif text-3xl opacity-70">
        Our Happy Client
      </h1>
      <section className="mb-20 mt-20 p-32   bg-[url('https://i.ibb.co/vk9fKFB/image-1920x-2.jpg')] ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <p className="text-center font-serif ">
              "Simone’s Jewellery never ceases to amaze me - I love her
              originality and thoughtfulness. <br /> Her website is often my first port
              of call if I want something special for myself or a friend."
            </p>
            <h3 className="text-center  font-medium mt-5">Heather - Adelaide, Australia.</h3>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-center font-serif">
              "I have never been disappointed, either for myself or as gifts, <br />
              the pieces are lovely, reasonably priced, and I love the personal
              touches."
            </p>
            <h3 className="text-center font-medium   mt-5">
              Carole - Gold Coast, Australia
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-center font-serif">
              "Simone Walsh's jewellery has a unique design, it's delicate and <br />
              beautiful. Shopping has always been a friendly and easy
              experience."
            </p>
            <h3 className="text-center font-medium   mt-5">Claire - Australia</h3>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-center font-serif">
              "Simone's work is unique and exquisite! I absolutely adore my
              earrings and pendant. I love the timeless, elegant <br /> design and
              always get compliments about them."
            </p>
            <h3 className="text-center font-medium   mt-5">
            Dana - Wellingon, New Zealand
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
