import React from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { ServiceData } from "../constants";


SwiperCore.use([Navigation]);


const DesktopSwiper = () => {
  const swiperRef = React.useRef(null);


    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      };
    
      const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slidePrev();
        }
      };

  return (
    <div className="w-full">
            <div className="flex items-center justify-center flex-col h-[800px] text-main-white">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                ref={swiperRef}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="w-full"
              >
                {ServiceData.map((item) => (
                  <SwiperSlide key={item.title}>
                    <div className="flex flex-col justify-end gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.backgroundImage})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                      <div className="relative flex flex-col gap-10">
                        <h1 className="text-xl font-semibold lg:text-2xl">
                          {item.title}
                        </h1>
                        <p className="lg:text-[18px] text-second-color">
                          от <br />
                          {item.price} р.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex gap-5">
                <button
                  className="w-[53px] h-[53px] bg-main-red rounded-full flex justify-center items-center"
                  onClick={goPrev}
                >
                  <GrLinkPrevious color="black" size={40} />
                </button>
                <button
                  className="w-[53px] h-[53px] bg-main-red rounded-full flex justify-center items-center"
                  onClick={goNext}
                >
                  <GrLinkNext color="black" size={40} />
                </button>
              </div>
            </div>
          </div>
  )
}

export default DesktopSwiper