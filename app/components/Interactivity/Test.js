"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import Testimonial from "../Testimonial";

const Test = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination
      autoplay={{ delay: 8000 }}
      loop={true}
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
      {[...Array(6)].map((review, i) => (
        <SwiperSlide className="center" card={review} key={i}>
          <Testimonial card={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Test;
