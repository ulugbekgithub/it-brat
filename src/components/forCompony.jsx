import { FaCheck } from "react-icons/fa";

import bratman from "../assets/bratman.png";

export default function ForCompony() {
  return (
    <div className="p-8">
      <ul className="flex flex-col gap-3 px-24">
        <li className="flex gap-2">
          <FaCheck size={20} color="red" />
          <span className="text-main-white text-xs font-light">
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
