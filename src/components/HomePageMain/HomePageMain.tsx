"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./HomePageMain.module.css";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsList from "../News/NewsList";

export default function HomePageMain({
  messages,
  lang,
}: {
  messages: any;
  lang: "en" | "ru" | "kg";
}) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const GeneralMedicineCarousel = dynamic(
    () => import("./GeneralMedicineCarousel"),
    { ssr: false }
  );

  const images = [
    "/images/car1.png",
    "/images/car2.png",
    "/images/car3.png",
    "/images/car4.png",
    "/images/car5.png",
  ];

  const dict = messages.HomePageMain;

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init();
      });
    }
  }, []);

  useEffect(() => {
    const videoContainer = videoRef.current;
    const placeholder = videoContainer?.querySelector(
      ".about__video-placeholder"
    );
    if (!videoContainer || !placeholder) return;

    const handleClick = () => {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "100%");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/SfmUbr7PXBg?autoplay=1&rel=0&showinfo=0&modestbranding=1"
      );
      iframe.setAttribute("title", "BIMI Video");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "autoplay; fullscreen");

      videoContainer.innerHTML = "";
      videoContainer.appendChild(iframe);
    };

    videoContainer.addEventListener("click", handleClick);
    return () => {
      videoContainer.removeEventListener("click", handleClick);
    };
  }, []);

  const buttonItems = [
    {
      label: dict.Upper.List.Item1,
      href: "/en/institute/bimi-eng",
    },
    {
      label: dict.Upper.List.Item2,
      href: "/en/abiturients/Rules-for-accepcing.html",
    },
    {
      label: dict.Upper.List.Item3,
      href: "/КСВ/KSV.html",
    },
    {
      label: dict.Upper.List.Item4,
      href: "http://ebilim.bimi.edu.kg/Account/Login",
      external: true,
    },
  ];

  const renderButtons = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-[900px] mx-auto">
      {buttonItems.map(({ label, href, external }) => (
        <div
          key={label}
          className="item_block w-full h-[100px] bg-white rounded-lg shadow-[0_4px_20px_rgba(107,139,175,0.25)]"
        >
          <a
            href={href}
            className="first-slide-btn block w-full h-full font-pt-serif text-lg text-[#17395F] rounded-lg text-center leading-[28px] pt-7 px-5 transition duration-300 hover:bg-[#1c41b0] hover:text-white"
            {...(external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {label}
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="relative lg:min-h-[300px]">
        {/* Swiper Carousel */}
        <Swiper
          className={`${styles.mySwiper} swiper`}
          modules={[Navigation, Autoplay]}
          speed={1000}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (
              typeof swiper.params.navigation === "object" &&
              swiper.params.navigation !== null
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <SwiperSlide>
            <Image
              src="/images/1SlideEng.png"
              alt="Mountains wide view"
              width={1200}
              height={500}
              className="w-full h-full object-cover transition-opacity duration-200"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/3SlideEng.png"
              alt="Admission wide view"
              width={1200}
              height={500}
              className="w-full h-full object-cover transition-opacity duration-200"
              priority
            />
          </SwiperSlide>

          {/* Navigation Buttons */}
          <div ref={nextRef} className="swiper-button-next">
            <Image
              src="/images/slider-btn-right.png"
              alt="Next"
              width={27}
              height={44}
            />
          </div>
          <div ref={prevRef} className="swiper-button-prev">
            <Image
              src="/images/slider-btn-left.png"
              alt="Previous"
              width={27}
              height={44}
            />
          </div>
        </Swiper>

        {/* Floating Button Block for lg+ screens */}
        <div
          className="hidden lg:flex absolute bottom-[-50px] left-0 w-full justify-center z-10"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          {renderButtons()}
        </div>
      </div>

      <section className="bg-[#F5F6F7] py-16 flex justify-center">
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-[93%]">
          <div className="flex flex-col w-full lg:w-[40%] justify-evenly">
            {/* Inline Buttons on small screens */}
            <div className="block lg:hidden mb-6">{renderButtons()}</div>

            <h1 className="text-[48px] font-bold text-[#023072] font-serif mt-10">
              {dict.Middle.Title}
            </h1>
            <div className="flex flex-col mt-6 space-y-6 text-[#3F3F3F] text-[16px] leading-6 font-pt-sans text-justify">
              <p>{dict.Middle.Text1}</p>
              <p>{dict.Middle.Text2}</p>
              <p>{dict.Middle.Text3}</p>
              <p>{dict.Middle.Text4}</p>
            </div>
          </div>

          {/* Video Preview */}
          <div
            ref={videoRef}
            className="about__video relative w-full lg:w-[50%] h-[390px] mt-12 lg:mt-0 overflow-hidden rounded-[10px] cursor-pointer"
          >
            <div className="about__video-placeholder absolute w-full h-full top-0 left-0 flex items-center justify-center overflow-hidden rounded-[10px]">
              <img
                src="/images/second-slide-video.png"
                alt="BIMI Video Preview"
                className="w-full h-full object-cover"
              />
              <svg
                className="about__video-play absolute w-[66px] h-[66px] transition-transform duration-200 ease-in-out"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 66 66"
              >
                <circle cx="33" cy="33" r="33" fill="#2857FE" />
                <path
                  d="M45.5 30.402c2 1.155 2 4.041 0 5.196L29 45.124c-2 1.155-4.5-.288-4.5-2.598V23.474c0-2.31 2.5-3.753 4.5-2.598l16.5 9.526Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F0F4FA] bg-[url('/images/third-slide-bg.png')] bg-no-repeat bg-center bg-[length:20%_24%] py-10">
        <div className="px-4 sm:px-10">
          <div
            className="col-12 mb-8"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <h1 className="text-[30px] sm:text-[36px] font-bold font-[PT_Serif] text-[#023072] ml-2 sm:ml-6">
              {dict.Info.Title1}
              <br className="hidden sm:block" />
              {dict.Info.Title2}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Image */}
            <div
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <img
                src="/images/car1.png"
                alt="Right side"
                className="w-full h-auto rounded-[5px] shadow-md"
              />
            </div>

            {/* Left Text Block */}
            <div
              className="text-[#3F3F3F] font-[PT_Sans] text-justify space-y-4 text-[16px] sm:text-[20px] leading-6"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <p>{dict.Info.Text1}</p>
              <p>{dict.Info.Text2}</p>
              <p>{dict.Info.Text3}</p>
            </div>

            {/* Right Text Block */}
            <div
              className="text-[#3F3F3F] font-[PT_Sans] text-justify space-y-4 text-[16px] sm:text-[20px] leading-6"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="0"
            >
              <p>{dict.Info.Text4}</p>
              <p>{dict.Info.Text5}</p>
            </div>

            {/* Right Image */}
            <div
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="0"
            >
              <img
                src="/images/car3.png"
                alt="Left side"
                className="w-full h-auto rounded-[5px] shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-[#F0F4FA] py-12"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <div className=" mx-auto px-4 sm:px-10">
          <GeneralMedicineCarousel />
        </div>
      </section>
      <section
        className="w-full bg-white"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <NewsList
          labelBIMI={messages.Header.HeaderList.List1.Item4}
          labelNews={messages.HomePageMain.News.Title}
          more={messages.Institute.News.ListMain.More}
          lang={lang}
        />
      </section>

      <section
        className="w-full h-[53vh] mt-12 mb-24 flex items-center justify-center bg-[url('/images/8sllideBG.png')] bg-no-repeat bg-cover bg-center"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <div className="w-[90%] max-w-7xl flex flex-row justify-between items-center">
          {/* Left Side */}
          <div className="text-white w-[55%] sm:w-[60%] md:w-[65%]">
            <p className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bold font-montserrat mb-6 leading-tight">
              {dict.Enrollment.Title1}
              <br />
              {dict.Enrollment.Title2}
            </p>
            <div>
              <a
                href={`/${lang}/abiturients/Rules-for-accepcing`}
                className="inline-flex justify-center items-center w-[220px] h-[50px] sm:h-[55px] text-[16px] font-pt-sans font-semibold text-[#1C41B0] bg-white rounded-[15px] shadow-[0_4px_20px_rgba(107,139,175,0.25)] hover:bg-[#1C41B0] hover:text-white transition-all duration-300"
              >
                {dict.Enrollment.More}
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-[40%] sm:w-[35%] md:w-[30%] flex justify-end">
            <img
              src="/images/eight-slide-img.png"
              alt="Admission visual"
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[360px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
