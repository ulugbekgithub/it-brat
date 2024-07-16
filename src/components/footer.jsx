import logo from "../assets/logo.png";

import { BiLogoTelegram } from "react-icons/bi";
import { SlSocialVkontakte } from "react-icons/sl";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="w-full max-w-[1196px] flex flex-col-reverse items-center  gap-20 md:flex-row  mt-[200px] pb-12">
      <div className="w-1/2 flex justify-between">
        <div>
          <ul className="flex flex-col gap-2 p-5 text-[clamp(8px,3vw,14px)]">
            <li className="text-main-white">
              <h3>МЕНЮ</h3>
            </li>
            <li className="text-second-color">Главная</li>
            <li className="text-second-color">О нас</li>
            <li className="text-second-color">Контакты</li>
            <li className="text-second-color">FAQ</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 p-5 text-[clamp(8px,3vw,14px)]">
            <li className="text-main-white">
              <h3>О ПРОЕКТЕ</h3>
            </li>
            <li className="text-second-color">Пользовательское соглашение</li>
            <li className="text-second-color">Правила</li>
            <li className="text-second-color">Помощь</li>
            <li className="text-second-color">Услуги</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <ul className="text-[clamp(8px,3vw,14px)]">
          <li className="w-[196px] h-[32px]">
            <img src={logo} alt="logo" />
          </li>
          <li className="text-second-color mt-[29px]">
            Следи за нами в соц. сетях:
          </li>
          <li className="flex gap-6 mt-[12px]">
            <BiLogoTelegram size={30} color="white" />
            <SlSocialVkontakte size={30} color="white" />
            <PiInstagramLogoFill size={30} color="white" />
          </li>
        </ul>
      </div>
    </div>
  );
}
