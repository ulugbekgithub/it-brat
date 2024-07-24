import { useState } from "react";
import addPhoto from "../assets/addPhoto.png";

export default function AddProjects() {
  const [currency, setCurrency] = useState("руб.");

  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] rounded-lg mt-2 p-3">
      <form className=" w-full flex flex-col">
        <div className="w-full flex xl:flex-row  flex-col">
          <div className="w-1/2">
            <h3 className="text-main-white text-[clamp(16px,3vw,24px)] font-bold">
              Новый проект
            </h3>
            <div className="w-full relative">
              <div className="w-full max-w-[298px] h-[335px] bg-[#2E2E2E] flex items-center justify-center rounded-xl">
                <label htmlFor="fileInput" className="cursor-pointer">
                  <img src={addPhoto} alt="add" />
                </label>
              </div>
              <input type="file" id="fileInput" className="hidden" />
            </div>
          </div>
          <div className="">
            <div className="p-6 rounded-xl w-full max-w-[400px] text-white">
              <div className="mb-4 flex items-center">
                <label className="block mt-3 text-[clamp(12px,3vw,20px)]">
                  Название:
                </label>
                <input
                  type="text"
                  placeholder="Введите название проекта"
                  className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="block mt-3 text-[clamp(12px,3vw,20px)]">
                  Автор:
                </label>
                <input
                  type="text"
                  placeholder="Укажите создателя"
                  className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="block mt-3 text-[clamp(12px,3vw,20px)]">
                  Контактные данные:
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="block mt-3 text-[clamp(12px,3vw,20px)]">
                  Плата:
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    placeholder="Введите сумму"
                    className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none"
                  />
                  <button
                    onClick={() => setCurrency("руб.")}
                    className={`ml-2 px-2 py-1 rounded-lg ${
                      currency === "руб."
                        ? "bg-red-600"
                        : "bg-transparent border border-red-600"
                    }`}
                  >
                    руб.
                  </button>
                  <button
                    onClick={() => setCurrency("долл.")}
                    className={`ml-2 px-2 py-1 rounded-lg ${
                      currency === "долл."
                        ? "bg-red-600"
                        : "bg-transparent border border-red-600"
                    }`}
                  >
                    долл.
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-[clamp(12px,3vw,20px)]">
                  Требуемые навыки:
                </label>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-black rounded-lg">C++</span>
                  <span className="px-2 py-1 bg-[#8B0000] rounded-lg">
                    Python
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
            <h3 className="text-main-white text-[clamp(12px,3vw,20px) font-medium]">Описание</h3>

            <textarea className="bg-[#2E2E2E] w-full min-h-[265px] text-main-white mt-2 rounded-lg" name="" id=""></textarea>
        </div>

        <div className="flex gap-8 justify-center mt-[30px]">
            <button className="w-full max-w-[124px] h-[35px] bg-[#680202] rounded-lg text-main-white text-[clamp(12px,3vw,16px)] font-medium">Сохранить</button>
            <button className="w-full max-w-[124px] h-[35px] bg-[#2E2E2E] rounded-lg text-main-white text-[clamp(12px,3vw,16px)] font-medium">Отмена</button>
        </div>
      </form>
    </div>
  );
}
