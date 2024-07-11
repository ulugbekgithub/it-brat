import { FaCheck } from "react-icons/fa";

import bratgirl from "../assets/bratgirl.png";

export default function ForFreelance() {
  return (
    <div className="p-8">
      <ul className="flex flex-col gap-3 px-24">
        <li className="flex gap-2">
          <FaCheck size={20} color="red" />
          <span className="text-main-white text-xs font-light">
            регулярно обновляющаяся база проектов
          </span>
        </li>
        <li className="flex gap-2">
          <FaCheck size={20} color="red" />
          <span className="text-main-white text-xs font-light">
           возможность создавать команду
          </span>
        </li>
        <li className="flex gap-2">
          <FaCheck size={20} color="red" />
          <span className="text-main-white text-xs font-light">
            удобная платформа для ведения проектов
          </span>
        </li>
      </ul>
      <div className="px-10">
        <img src={bratgirl} alt="" />
      </div>
    </div>
  )
}
