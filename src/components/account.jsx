import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Account() {
  const [editClick,setEditClick]=useState(false)

  const handleEditClick=()=>{
    setEditClick(!editClick)
  }

  return (
    <div className="w-full h-full bg-main-black rounded-lg py-5">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-main-white text-[clamp(12px,3vw,24px)] py-2">
          Резюме
        </h2>
        <div className="flex gap-2">
          <button onClick={handleEditClick}>
            <LiaEditSolid color="white" size={20} />
          </button>
          <button>
            <RiDeleteBinLine color="white" size={20} />
          </button>
        </div>
      </div>
      <div className="w-full min-h-[233px] bg-[#8D8D8D] rounded-lg p-5">
        <div className="w-full flex flex-col md:flex-row md:gap-[80px] ">
          <div className="flex items-start gap-3">
            <div className="w-[100px] h-[100px] border-4 border-[#680202] rounded-full"></div>
            <div>
              <h2 className="text-[#5B0303] text-[clamp(16px,3vw,24px)] font-semibold]">
                Маргарита
              </h2>
              <span className="text-main-black text-[clamp(12px,3vw,20px) font-semibold]">
                Программист
              </span>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <span className="text-main-black text-[clamp(13px,3vw,20px)] font-semibold">
                  Контактная информация:
                </span>
              </li>
              <li>
                <span className="text-main-black text-[clamp(13px,3vw,20px)] font-semibold">
                  Опыт работы:
                </span>
              </li>
              <li>
                <span className="text-main-black text-[clamp(13px,3vw,20px)] font-semibold">
                  Личные данные:
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-[100px] md:gap-[215px]">
          <div>
            <h1 className="text-main-black text-[clamp(16px,3vw,24px)] font-bold">
              Навыки
            </h1>
            <span className="text-main-black text-[clamp(14px,3vw,16px)] font-light">
              Hard skills
            </span>
          </div>
          <div className="mt-6 md:mt-10">
            <span className="text-main-black text-[clamp(14px,3vw,16px)] font-light">
              Soft skills
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
