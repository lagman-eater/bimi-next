"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/car1.png",
  "/images/car2.png",
  "/images/car3.png",
  "/images/car4.png",
  "/images/car5.png",
];

export default function GeneralMedicineCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full mb-16 relative">
      {/* Nav buttons outside Swiper for reliable ref binding */}
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom text-[70px] text-[#000]"
        >
          ‹
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <button
          ref={nextRef}
          className="swiper-button-next-custom text-[70px] text-[#000]"
        >
          ›
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation === "object"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination below */}
      <div className="custom-swiper-pagination mt-6 text-center" />
    </div>
  );
}
