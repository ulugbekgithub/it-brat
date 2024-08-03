import Sidebar from "../../components/sidebar";
import CenterMenu from "../../components/centerMenu";
import ProfileSidebar from "../../components/profileSidebar";
import Footer from "../../components/footer";
import logo from "../../assets/logo.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import {
  IoDocumentTextOutline,
  IoExitOutline,
  IoSearch,
  IoSettingsOutline,
} from "react-icons/io5";
import { GrPrevious } from "react-icons/gr";
import { BsChatLeftDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TiDocumentText } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import ProfileBurger from "../../components/profileBurger";

export default function Profile() {
  const navigate = useNavigate();
  const [accardionOpen, setAccardionOpen] = useState(false);
  const token = localStorage.getItem("accessToken");

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    if (!token) {
      navigate("/notFound");
    }
  }, []);

  const goToProject = () => {
    navigate("/profile/projects");
    setClick(false);
  };
  const goToResume = () => {
    navigate("/profile/resume");
    setClick(false);
  };

  const goToSearch = () => {
    navigate("/profile/search");
    setClick(false);
  };

  const goToProfile = () => {
    navigate("/profile/accaunt");
    setClick(false);
  };

  const goToChat = () => {
    navigate("/profile/chat");
    setClick(false);
  };
  const contentSidebar = (
    <>
      <div className="min-h-screen flex flex-row bg-main-black p-5 transition-transform duration-500 ease-in-out translate-y-3">
        <div className="flex flex-col items-center w-full max-w-[393px]  bg-main-black text-main-white overflow-hidden">
          <ul className="flex flex-col py-4 px-10 text-base">
            <li className="text-base">
              <a
                onClick={() => setAccardionOpen(!accardionOpen)}
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
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
                  <a
                    onClick={goToProject}
                    href="#"
                    className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
                  >
                    <span className="text-sm font-medium text-second-color">
                      Проекты
                    </span>
                  </a>
                  <a
                    onClick={goToResume}
                    href="#"
                    className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200  hover:text-main-red"
                  >
                    <span className="text-sm font-medium text-second-color">
                      Резюме
                    </span>
                  </a>
                </div>
              </div>
            </li>
            <li className="text-base">
              <a
                onClick={goToSearch}
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <IoSearch />
                </span>
                <span className="text-sm font-medium">Поиск</span>
              </a>
            </li>
            <li className="text-base">
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <TiDocumentText />
                </span>
                <span className="text-sm font-medium">Проекты</span>
              </a>
            </li>
            <li className="text-base">
              <a
                onClick={goToProfile}
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <CgProfile />
                </span>

                <span className="text-sm font-medium">Профиль</span>
              </a>
            </li>
            <li className="text-base">
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <IoDocumentTextOutline />
                </span>
                <span className="text-sm font-medium">Резюме</span>
              </a>
            </li>
            <li className="text-base">
              <a
                onClick={goToChat}
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <BsChatLeftDots />
                </span>
                <span className="text-sm font-medium">Чат</span>
              </a>
            </li>
          </ul>

          <div className="px-12 py-20">
            <ul>
              <li className="text-base">
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                    <IoSettingsOutline />
                  </span>
                  <span className="text-sm font-medium">Настройки</span>
                </a>
              </li>

              <li className="text-base">
                <a
                  href="#"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 hover:text-main-red"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
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
    </>
  );

  return (
    <div>
      <div className="w-full flex md:flex-row flex-col md:justify-between justify-center bg-main-black">
        <div className="">
          <div className="w-full md:hidden flex justify-between p-10">
            <div className="w-full max-w-[150px]">
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <button
              className="block md:hidden transition"
              onClick={handleClick}
            >
              {click ? (
                <RiCloseLargeLine color="white" size={25} />
              ) : (
                <BiMenuAltRight color="white" size={25} />
              )}
            </button>
          </div>
          {click && contentSidebar}
        </div>
        <div className="w-full max-w-[308px] md:block hidden">
          <Sidebar />
        </div>
        <div className="md:w-[calc(100%-616px)] w-full  md:p-0 p-10 bg-main-black">
          <CenterMenu />
        </div>
        <div className="w-full   max-w-[308px] bg-main-black md:block hidden">
          <ProfileSidebar />
        </div>
        <div className=" w-full max-w-[308px]  md:hidden flex  items-center absolute right-0 top-16">
          <div className="w-10 h-10 mb-[300px] mr-[-20px]  flex items-center justify-center bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
          <GrPrevious  color="white"/>
          </div>
          <ProfileBurger/>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-main-black">
        <div className="w-full max-w-[1196px]  flex justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
