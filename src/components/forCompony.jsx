import { FaCheck } from "react-icons/fa";

import bratman from "../assets/bratman.png";

export default function ForCompony() {
  return (
    <div className="p-8 flex flex-col items-center">
      <ul className="flex flex-col whitespace-nowrap  gap-3 ">
        <li className="flex gap-2">
          <FaCheck size={20} color="red" />
          <span className=" text-main-white text-xs font-light">
            быстрый поиск профессианальной команды или специалиста
          </span>
        </li>
        <li className="flex gap-2">
          <FaCheck size={20} color="red" />
          <span className="text-main-white text-xs font-light">
            удобный формат связи и работы
          </span>
        </li>
        <li className="flex gap-2">
          <FaCheck size={20} color="red" />
          <span className="text-main-white text-xs font-light">
            гарантия результата
          </span>
        </li>
      </ul>
      <div className="px-10">
        <img src={bratman} alt="" />
      </div>
    </div>
  );
}
