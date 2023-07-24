"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Autoplay]);

export default function PromotionSlider() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className=" bg-gray-100 w-full h-[400px]">
            <p>รูปโปรโมชั่น 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-gray-100 w-full h-[400px]">
            <p>รูปโปรโมชั่น 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-gray-100 w-full h-[400px]">
            <p>รูปโปรโมชั่น 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-gray-100 w-full h-[400px]">
            <p>รูปโปรโมชั่น 4</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
