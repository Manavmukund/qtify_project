import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import LeftNav from "../LeftNav/LeftNav";
import RightNav from "../RightNav/RightNav";

function Carousel({ data, renderComponent }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={6}
      navigation={{
        nextEl: ".right-nav",
        prevEl: ".left-nav"
      }}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }}
    >
      <LeftNav />
      <RightNav />

      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;