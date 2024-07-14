import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="md:hidden block absolute top-16 w-full h-full left-0 right-0 bg-main-black transition">
        <ul className="text-center text-xl p-20 text-main-white">
          <li className="cursor-pointer hover:text-main-red my-4 py-4">
            ГЛАВНАЯ
          </li>
          <li className="cursor-pointer hover:text-main-red my-4 py-4">
            О НАС
          </li>
          <li className="cursor-pointer hover:text-main-red my-4 py-4">
            КОНТАКТЫ
          </li>
          <li className="cursor-pointer hover:text-main-red my-4 py-4">FAQ</li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="w-full  h-[130px] flex justify-center items-start p-5 bg-main-black">
      <div className="w-full max-w-[1196px] flex justify-between items-center">
        <div className="w-[196px] h-[32px]">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="md:flex gap-[60px] text-main-white lg:text-base text-xs hidden">
            <li className="cursor-pointer hover:text-main-red">ГЛАВНАЯ</li>
            <li className="cursor-pointer hover:text-main-red">О НАС</li>
            <li className="cursor-pointer hover:text-main-red">КОНТАКТЫ</li>
            <li className="cursor-pointer hover:text-main-red">FAQ</li>
          </ul>
        </div>
        <div className="md:flex gap-[10px] items-center text-main-white hidden">
          <Link to={"/login"}>
            <span className="cursor-pointer hover:text-main-red">Вход</span>
          </Link>

          <div className="w-[1px] h-[20px] bg-main-red"></div>
          <Link to={"/register"}>
            <span className="cursor-pointer hover:text-main-red">
              Регистрация
            </span>
          </Link>
        </div>
      </div>

      <div>{click && content}</div>
      <button className="block md:hidden transition" onClick={handleClick}>
        {click ? (
          <RiCloseLargeLine color="white" size={25} />
        ) : (
          <BiMenuAltRight color="white" size={25} />
        )}
      </button>
    </div>
  );
}
