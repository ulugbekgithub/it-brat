import React from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { ServiceData } from "../constants";
import { v4 as uuidv4 } from 'uuid';

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
      <div className="flex items-center justify-center flex-col h-[700px] text-main-white">
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
            <SwiperSlide key={uuidv4()}>
              <div className="w-full max-w-[298px] min-h-[335px] rounded-lg flex flex-col justify-end gap-6 mb-20 group relative shadow-lg text-white px-6 py-8 h-full   overflow-hidden cursor-pointer ">
                <div
                  className="absolute inset-0 bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                />
                <div className="absolute inset-0   bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" />
                <div className="relative flex flex-col gap-10">
                  <h1 className="flex justify-start text-xl font-semibold lg:text-2xl">
                    {item.title}
                  </h1>
                  <div className="w-full flex items-end justify-between">
                  <p className="lg:text-[18px] text-second-color">
                    от <br />
                    {item.price} р.
                  </p>
                  <a className="text-main-red underline" href="">Подробнее</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-5 mt-5">
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

export default DesktopSwiper;
