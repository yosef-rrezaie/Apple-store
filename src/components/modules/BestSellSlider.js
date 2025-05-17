"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import SildeComponent from "./SildeComponent";
import slides from "@/utils/Slides";

export default function BestSellSlider() {
  return (
    <div className="w-full h-[270px] mt-[10px] mb-[20px] items-stretch lg:h-[345px] ">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop={false}
        freeMode={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Pagination, Autoplay, FreeMode]}
        className="w-full h-full"
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
      >
        {slides.map((item) => (
          <SwiperSlide className="!w-[200px] h-full lg:!w-[270px] lg:px-[7px] lg:box-border">
            <SildeComponent
              src={item.src}
              title={item.title}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination hidden sm:flex justify-center mt-15 gap-x-2"></div>
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #ff510c !important;
        }
      `}</style>
    </div>
  );
}
