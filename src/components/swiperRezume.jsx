// Import Swiper React components
import { Swiper,} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/custom.css";

// import required modules
import { Pagination } from "swiper/modules";
// import { Rezume1Data } from "../constants";
// import { GrLinkNext } from "react-icons/gr";

export default function SwiperRezume() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <div></div>
      </Swiper>
    </>
  );
}
