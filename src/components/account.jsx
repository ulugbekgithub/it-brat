import { useEffect, useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import editPhoto from "../assets/editPhoto.png";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../app/reducers/authSlice";

export default function Account() {
  const [editClick, setEditClick] = useState(false);

   const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getCurrentUser())
  },[dispatch])

  const handleEditClick = () => {
    setEditClick(!editClick);
  }

  const closeForm=()=>{
    setEditClick(false)
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
      {editClick ? (
        <div className="w-full min-h-[300px] bg-[#8D8D8D] rounded-lg p-5">
          <form action="">
            <div className="w-full border-b  border-[#680202] py-3">
              <div className="w-full relative">
                <div className="w-full max-w-[100px] h-[100px] bg-[#919191] flex items-center justify-center rounded-full border-8 border-[#680202]">
                  <label
                    htmlFor="fileInput"
                    className="flex justify-center items-center rounded-full w-full max-w-[75px] h-[75px] bg-[#CCCCCC] cursor-pointer"
                  >
                    <img src={editPhoto} alt="add" />
                  </label>
                </div>
                <input type="file" id="fileInput" className="hidden" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label htmlFor="" className="flex flex-col">
                Имя:
                <input
                  type="text"
                  className="w-full max-w-[84%] min-h-[30px] bg-[#CCCCCC] rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#680202]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                Фамилия:
                <input
                  type="text"
                  className="w-full max-w-[84%] min-h-[30px] bg-[#CCCCCC] rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#680202]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                Контактная информация:
                <input
                  type="text"
                  className="w-full max-w-[84%] min-h-[30px] bg-[#CCCCCC] rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#680202]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                Опыт работы:
                <input
                  type="text"
                  className="w-full max-w-[84%] min-h-[30px] bg-[#CCCCCC] rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#680202]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                Hard skills:
                <input
                  type="text"
                  className="w-full max-w-[84%] min-h-[30px] bg-[#CCCCCC] rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#680202]"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                Soft skills:
                <input
                  type="text"
                  className="w-full max-w-[84%] min-h-[30px] bg-[#CCCCCC] rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#680202]"
                />
              </label>
            </div>

            <label htmlFor="" className="flex flex-col">
              Личные данные:
              <textarea
                name=""
                id=""
                className="w-[92%] min-h-[161px] bg-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#680202]"
              ></textarea>
            </label>

            <div className="flex justify-center gap-3 py-2">
              <button type="submit" className="text-main-white text-[clamp(12px,3vw,18px)] rounded-md font-bold hover:scale-105 duration-150 bg-[#680202] w-[25%] min-h-[30px]">
                Сохранить
              </button>
              <button onClick={closeForm} type="button" className="text-main-white text-[clamp(12px,3vw,18px)] rounded-md font-bold hover:scale-105 duration-150 bg-main-black w-[20%] min-h-[30px]">
                Oтмена
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full min-h-[233px] bg-[#8D8D8D] rounded-lg p-5">
          <div className="w-full flex flex-col  xl:flex-row md:gap-[80px] ">
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
      )}
    </div>
  );
}
