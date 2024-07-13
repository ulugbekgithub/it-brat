import React from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, EffectCards } from "swiper/modules";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { ServiceData } from "../constants";
import { v4 as uuidv4 } from 'uuid';

SwiperCore.use([Navigation]);

const MobileSwiper = () => {
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
    <div className="w-full px-5">
      <div className="flex items-center justify-center flex-col h-[800px] text-main-white">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          ref={swiperRef}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          modules={[FreeMode, EffectCards]}
          className="max-w-[90%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <div className="flex flex-col justify-end gap-6 mb-20 relative shadow-lg rounded-xl px-6 py-8 min-h-full max-w-full sm:h-[400px] sm:w-[350px]  overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                />
                <div className="absolute" />
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
  );
};

export default MobileSwiper;
