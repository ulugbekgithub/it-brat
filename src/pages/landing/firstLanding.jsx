import Header from "../../components/header";
import "./firstLanding.css";
import account from "../../assets/accountIcon.png";
import rezume from "../../assets/rezumeIcon.png";
import search from "../../assets/searchIcon.png";
import commandMan from "../../assets/commandMan.webp";
import bratman from "../../assets/bratman.png";
import bratgirl from "../../assets/bratgirl.png";

import { DirectionData, Rezume1Data, Rezume2Data } from "../../constants";

import { GrLinkNext } from "react-icons/gr";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Footer from "../../components/footer";
import DesktopSwiper from "../../components/desktopSwiper";

export default function FirstLanding() {
  return (
    <div>
      <Header />
      <div className="w-full h-[800px] flex justify-center items-center bg-photo">
        <div className="w-full max-w-[1096px] h-full flex flex-col justify-around p-5">
          <div>
            <h1 className="w-full max-w-[1026px]  leading-[68px] text-5xl font-bold text-main-white">
              НАХОДИТЕСЬ В ПОИСКЕ ИНТЕРЕСНОГО{" "}
              <span className="text-main-red">ПРОЕКТА</span> ИЛИ{" "}
              <span className="text-main-red">КОМАНДЫ</span>?
            </h1>
            <p className="w-full max-w-[446px] leading-[23px] text-lg text-second-color whitespace-normal">
              Объединяйтесь в команды, создавайте проекты, выбирайте лучших из
              лучших. ITBRAT – здесь вы найдете именно то, что вам нужно.
            </p>
          </div>

          <div className="flex flex-col gap-[31px]">
            <button className="w-full max-w-[346px] h-[70px] bg-main-black text-main-white border-[3px] border-solid border-main-red rounded">
              <span className="font-bold">НАЙТИ ПРОЕКТ</span>
            </button>
            <button className="w-full max-w-[346px] h-[70px] bg-main-red text-main-black rounded box-shadow">
              <span className="font-bold">НАЙТИ КОМАНДУ</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[441px] flex justify-center items-center bg-main-black">
        <div className="w-full max-w-[1258px] min-h-[323px] absolute top-[900px] p-5 flex flex-col items-center md:flex-row md:justify-around bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70  border-gray-100">
          <div className="w-full max-w-[224px] min-h-[226px] text-center ">
            <div className="w-[100px] h-[73.44px] mx-auto mb-10">
              <img src={account} alt="account" />
            </div>
            <h4 className="text-main-white mb-3">СОЗДАЙТЕ АККАУНТ</h4>
            <p className="text-second-color text-center">
              Зарегистрируйтесь и заполните профиль в личном кабинете
            </p>
          </div>
          <div className="w-[224px] h-[226px] text-center">
            <div className="w-[100px] h-[73.44px] mx-auto mb-10">
              <img src={rezume} alt="rezume" />
            </div>
            <h4 className="text-main-white mb-3">ЗАПОЛНИТЕ РЕЗЮМЕ</h4>
            <p className="text-second-color text-center">
              Укажите свои навыки и предпочтения
            </p>
          </div>
          <div className="w-[224px] h-[226px] text-center ">
            <div className="w-[100px] h-[73.44px] mx-auto mb-10">
              <img src={search} alt="search" />
            </div>
            <h4 className="text-main-white mb-3">ИЩИТЕ И СОЗДАВАЙТЕ</h4>
            <p className="w-[200px] text-second-color text-center">
              Ищите интересные проекты и команду или создавайте свои
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center bg-texture">
        <h2 className="w-full max-w-[500px] min-h-[122px] text-5xl font-bold text-main-white text-center">
          НАЙДИТЕ <span className="text-main-red">КОМАНДУ</span>
          <span className="text-main-red"> МЕЧТЫ</span> ЗДЕСЬ
        </h2>
        <div className="w-full max-w-[1196px] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col-reverse md:flex-row">
            <div className=" min-h-[600px] flex items-end">
              <img className="w-full" src={commandMan} alt="commandMan" />
            </div>
            <div>
              <div className="w-[50%] flex flex-col items-center ">
                <div className="flex gap-[35px]">
                  <div className="p-5 box-shadow">
                    <span className="text-main-red text-5xl font-extrabold">
                      500+
                    </span>
                    <p className="text-main-white text-2xl font-light">
                      соискателей
                    </p>
                  </div>
                  <div className="p-5 box-shadow">
                    <span className="text-main-red text-5xl font-extrabold">
                      300+
                    </span>
                    <p className="text-main-white text-2xl font-light">
                      размещенных проектов
                    </p>
                  </div>
                </div>
                <div className="flex gap-[35px] mt-[35px]">
                  <div className="p-5 box-shadow">
                    <span className="text-main-red text-5xl font-extrabold">
                      50+
                    </span>
                    <p className="text-main-white text-2xl font-light">
                      категорий
                    </p>
                  </div>
                  <div className="p-5 box-shadow">
                    <span className="text-main-red text-5xl font-extrabold">
                      1000+
                    </span>
                    <p className="text-main-white text-2xl font-light">
                      резюме
                    </p>
                  </div>
                </div>

                <p className="text-second-color text-base font-light w-full  min-h-[120px] mt-[35px]">
                  Найти единомышленников-экспертов просто! ITBRAT - надежная
                  платформа для поиска профессионалов и совместной реализации
                  задуманных проектов разных направлений. Наша система
                  обеспечивает простой и эффективный способ объединения
                  фрилансеров, где каждый эксперт может найти идеального
                  партнера для воплощения своих идей.
                </p>

                <p className="text-second-color text-base font-light w-full  min-h-[100px] mt-[29px]">
                  Ищете другие предложения? <br /> Вы также можете ознакомиться
                  с нашим сервисом{" "}
                  <span className="text-main-red">«ITStock»</span> <br />{" "}
                  «ITStock» - готовая база проектов для специалистов разных
                  направлений. Получите возможность работать с крупной
                  корпорацией, крутую команду и профессиональные проекты.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[890px] p-5 flex flex-col justify-center items-center">
            <h3 className="text-main-white text-center text-5xl font-bold">
              ПРЕИМУЩЕСТВА <span className="text-main-red">ITBRAT</span>
            </h3>
            <div className="w-full max-w-[1196px] flex justify-between items-center mt-[42px]">
              <div className="w-full max-w-[491px] min-h-[600px] flex flex-col justify-between items-center pt-5 text-center itbrat-box">
                <span className="text-main-white text-3xl font-semibold">
                  Для компаний
                </span>
                <div className="w-full max-w-[373px] min-h-[467px] pt-5">
                  <img className="mt-12" src={bratman} alt="bratman" />
                </div>
              </div>
              <div className="w-full max-w-[491px] min-h-[600px] flex flex-col justify-between items-center pt-5 text-center itbrat-box">
                <span className="text-main-white text-3xl font-semibold">
                  Для фрилансеров
                </span>
                <div className="w-full max-w-[373px] h-[467px] pt-5">
                  <img className="mt-9" src={bratgirl} alt="bratgirl" />
                </div>
              </div>
            </div>
            <button className="w-[283px] h-[62px] bg-main-red text-main-white text-2xl font-bold mt-12  box-shadow">
              Присоединиться
            </button>
          </div>

          <DesktopSwiper />

          

          <div>
            <h1 className="text-main-white text-center text-5xl font-bold">
              МНОЖЕСТВО{" "}
              <span className="text-main-red text-5xl font-bold">
                НАПРАВЛЕНИЙ
              </span>
            </h1>
            <p className="text-second-color text-xl font-light text-center mt-[7px]">
              Дизайн, разработка и многое другое
            </p>
          </div>

          <div className="w-full h-[500px] grid grid-cols-2 md:grid-cols-4 gap-[44px] mt-[58px] p-5">
            {DirectionData.map((item) => (
              <div
                key={item.title}
                className=" bg-cover bg-center  direction-box-shadow"
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
            ))}
          </div>
          <button className="w-full max-w-[283px] h-[62px] rounded-md bg-main-red text-main-white text-2xl font-bold mt-[69px] box-shadow">
            Больше категорий
          </button>

          <div className="w-full h-[1024px] flex justify-between items-center">
            <div>
              <h1 className="text-main-white text-5xl font-bold">
                ЛУЧШИЕ <span className="text-main-red">РЕЗЮМЕ</span>
              </h1>
            </div>
            <div className="flex gap-5 ">
              <div className="w-full h-[950px] flex flex-col gap-7 overflow-y-scroll scrollbar-custom">
                {Rezume1Data.map((item) => (
                  <div className="relative" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="absolute bottom-0">
                      <div className="flex justify-between p-3 h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100">
                        <div>
                          <h5 className="text-main-white">{item.name}</h5>
                          <span className="text-second-color">{item.job}</span>
                        </div>
                        <div className="ml-52 cursor-pointer">
                          <GrLinkNext color="white" size={50} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-[950px] flex flex-col gap-7 overflow-y-scroll scrollbar-custom">
                {Rezume2Data.map((item) => (
                  <div className="relative " key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="flex justify-between absolute bottom-0">
                      <div className="flex p-3 h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70">
                        <div>
                          <h5 className="text-main-white">{item.name}</h5>
                          <span className="text-second-color">{item.job}</span>
                        </div>
                        <div className="px-[137.5px] cursor-pointer">
                          <GrLinkNext color="white" size={50} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[567px] ">
            <div className="w-full max-w-[1128px] min-h-[320px] p-5 bg-[#101010] flex flex-col justify-around mt-[50px]">
              <div className="text-center">
                <h1 className="text-main-white text-5xl font-bold">
                  БОЛЬШЕ ИНТЕРЕСНЫХ ПРОЕКТОВ
                </h1>
                <p className="text-second-color text-xl font-light">
                  Подпишись на рассылку и получай новости одним из первых
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-evenly">
                <input
                  className="w-full max-w-[658px] h-[54px] text-second-color bg-[#343434] rounded-md p-3"
                  type="text"
                  placeholder="Введите Email"
                />
                <button className="w-full  md:max-w-[277px] h-[54px] text-main-white text-xl font-bold bg-main-red rounded-md box-shadow">
                  Подписаться
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
