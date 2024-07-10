import { Rezume1Data } from "../constants";

import { GrLinkNext } from "react-icons/gr";

export default function Rezume() {
  return (
    <div className="px-5">
      <div className="">
        <h1 className="text-main-white text-3xl font-semibold">Резюме</h1>

        <div className="w-full h-full grid grid-cols-2 gap-5 py-3">
          {Rezume1Data.map((item) => (
            <div key={item.title} className="w-full h-full">
              <div
                className="flex items-end bg-cover bg-center w-[350px] h-[435px] rounded-xl"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className=" h-[45px] w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-20 backdrop-saturate-50 backdrop-contrast-100 flex justify-between items-center p-6">
                  <div>
                    <h5 className="text-main-white">{item.name}</h5>
                    <p className="text-second-color">{item.job}</p>
                  </div>
                  <GrLinkNext className="transform hover:translate-x-2 transition-transform ease-in duration-200 cursor-pointer" size={40} color="white"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
