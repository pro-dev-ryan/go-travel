"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import Card from "../Card";
const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination
      autoplay={{ delay: 5000 }}
      loop={false}
      grabCursor={true}
      spaceBetween={10}
      breakpoints={{
        0: {
          spaceBetween: 5,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      }}
    >
      {[...Array(6)].map((pack, i) => (
        <SwiperSlide className="center" pack={pack} key={i}>
          <Card pack={pack} />
        </SwiperSlide>
      ))}
      {/* <div className="swiper-pagination w-5 h-5 bg-primary rounded-full "></div> */}
    </Swiper>
  );
};

export default Slider;
