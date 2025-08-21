"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import SildeComponent from "./SildeComponent";
import { SessionProvider } from "next-auth/react";

export default function BestSellSlider({ title, desc, data }) {
  return (
    <SessionProvider>
      <div
        className={`w-full h-[300px] ${
          title === "apple-watch" ? "mt-0" : "mt-10"
        } mb-[20px] items-stretch lg:h-[380px] `}
      >
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
          className="w-full] h-full"
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
        >
          {desc === "allProducts" &&
            data.map((item) => (
              <SwiperSlide
                key={item._id}
                className="!w-[200px] h-full lg:!w-[270px] lg:px-[7px] lg:box-border"
              >
                <SildeComponent
                  src={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  discount={item.discount || 0}
                  id={item._id}
                />
              </SwiperSlide>
            ))}
          {desc === "watchProducts" &&
            data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[200px] h-full lg:!w-[270px] lg:px-[7px] lg:box-border"
              >
                <SildeComponent
                  src={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  discount={item.discount || 0}
                  id={item._id}
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
    </SessionProvider>
  );
}
