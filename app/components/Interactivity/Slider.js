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
      pagination={true}
      autoplay={{ delay: 5000 }}
      loop={true}
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={1}
      resizeObserver={{ Autoplay }}
    >
      {[...Array(6)].map((pack, i) => (
        <SwiperSlide pack={pack} key={i}>
          <Card pack={pack} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
