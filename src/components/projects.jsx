import { useState } from "react";
import { ServiceData } from "../constants";
import { FaPlus } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import AddProjects from "./addProjects";

export default function Projects() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="px-5">
      <div className="flex gap-2">
        <h1 className="text-main-white text-3xl font-semibold">Проекты</h1>
        <button className="transition mt-2" onClick={handleClick}>
          {click ? (
            <RiCloseLine color="red" size={20} />
          ) : (
            <FaPlus color="white" />
          )}
        </button>
      </div>
      {click ? (
        <AddProjects stateValue={click} setStateValue={setClick}/>
      ) : (
        <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-5 py-3">
          {ServiceData.map((item) => (
            <div key={item.id} className="w-full h-full">
              <div
                className="bg-cover flex items-end bg-center w-[100%] h-[335px] rounded-lg"
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                }}
              >
                <div className="w-full relative flex flex-col gap-5 p-5">
                  <h1 className="text-xl text-main-white font-semibold lg:text-2xl">
                    {item.title}
                  </h1>
                  <div className="flex items-end justify-between">
                    <p className="lg:text-[18px] text-second-color">
                      от <br />
                      {item.price} р.
                    </p>
                    <a className="text-main-red underline" href="">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
