import logo from "../assets/logo.png";

import {
  IoSearch,
  IoSettingsOutline,
  IoDocumentTextOutline,
  IoExitOutline,
} from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BsChatLeftDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [accardionOpen, setAccardionOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen flex flex-row bg-main-black p-5">
        <div className="flex flex-col w-full max-w-[393px]  bg-[#101010] text-main-white rounded-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <div className="p-10">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <ul className="flex flex-col py-4 px-10">
            <li>
              <a
                onClick={() => setAccardionOpen(!accardionOpen)}
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <AiOutlineHeart color="red" />
                </span>
                <span className="text-sm font-medium">Избранное</span>
              </a>

              <div
                className={`px-12 grid overflow-hidden transition-all duration-300 ease-in-out ${
                  accardionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <Link to={"/profile/projects"}>
                    <a
                      href="#"
                      className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                    >
                      <span className="text-sm font-medium text-second-color">
                        Проекты
                      </span>
                    </a>
                  </Link>
                  <Link to={"/profile/rezume"}>
                    <a
                      href="#"
                      className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                    >
                      <span className="text-sm font-medium text-second-color">
                        Резюме
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link to={"/profile/search"}>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <IoSearch />
                  </span>
                  <span className="text-sm font-medium">Поиск</span>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <TiDocumentText />
                </span>
                <span className="text-sm font-medium">Проекты</span>
              </a>
            </li>
            <li>
              <Link to={"/profile/account"}>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <CgProfile />
                  </span>

                  <span className="text-sm font-medium">Профиль</span>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <IoDocumentTextOutline />
                </span>
                <span className="text-sm font-medium">Резюме</span>
              </a>
            </li>
            <li>
              <Link to={"/profile/chat"}>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <BsChatLeftDots />
                  </span>
                  <span className="text-sm font-medium">Чат</span>
                </a>
              </Link>
            </li>
          </ul>

          <div className="px-12 py-20">
            <ul>
              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <IoSettingsOutline />
                  </span>
                  <span className="text-sm font-medium">Настройки</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <IoExitOutline color="red" />
                  </span>
                  <span className="text-sm font-medium text-main-red">
                    Выход
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
