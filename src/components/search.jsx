import { GrNext } from "react-icons/gr";
import { DirectionData,  } from "../constants";
import "./css/custom.css";
export default function Search() {
  return (
    <div className=" p-5 flex flex-col">
      <div className="h-1/2 overflow-x-auto scrollbar-thin border">
        <div className="flex items-center gap-3">
          <h2 className="text-main-white text-2xl">Категории</h2>
          <GrNext size={16} color="white" />
        </div>
        <div className="flex gap-5 py-5 overflow-x-auto w-full scrollbar-thin">
          {DirectionData.map((item) => (
            <div key={item.title}>
              <div
                className="w-[366px] h-[195px] bg-cover bg-center rounded-xl"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className="h-full w-full flex justify-center items-center bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
                  <h4 className="text-main-white text-sm md:text-2xl w-[170px] h-[62px] font-bold text-center">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-1/2">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h2 className="text-main-white text-2xl">Проекты</h2>
            <GrNext size={16} color="white" />
          </div>
          {/* <div className="flex gap-5 py-5 overflow-x-auto w-full scrollbar-thin">
            {ServiceData.map((item) => (
              <div key={item.title} className="w-full h-full">
                <div
                  className="w-[298px] h-[335px] bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                >
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
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
