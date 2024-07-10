import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
export default function Header() {
  return (
    <div className="w-full  h-[130px] flex justify-center items-start p-5 bg-main-black">
      <div className="w-full max-w-[1196px] flex justify-between items-center">
        <div className="w-[196px] h-[32px]">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="md:flex gap-[60px] text-main-white lg:text-base text-xs hidden">
            <li>ГЛАВНАЯ</li>
            <li>О НАС</li>
            <li>КОНТАКТЫ</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="md:flex gap-[10px] items-center text-main-white hidden">
          <Link to={"/login"}>
            <span>Вход</span>
          </Link>

          <div className="w-[1px] h-[20px] bg-main-red"></div>
          <Link to={"/register"}>
          <span>Регистрация</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
