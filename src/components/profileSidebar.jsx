import {
  IoExitOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export default function ProfileSidebar() {


  return (
    <div className="bg-main-black">
      <div className="min-h-screen flex flex-row bg-main-black p-5">
        <div className="flex flex-col w-full max-w-[393px]  bg-[#101010] text-main-white rounded-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <div className="w-full flex justify-between p-5">
              <IoExitOutline size={23} className="cursor-pointer" />
              <div className="flex gap-3">
                <IoNotificationsOutline size={23} className="cursor-pointer" />
                <IoSettingsOutline size={23} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <ul className="flex flex-col py-6 px-12">
            <li>
              <div className="w-[80px] h-[80px] rounded-full border-2 border-main-red mx-auto"></div>
            </li>
            <li>
              <h2 className="text-center">Маргарита</h2>
            </li>
            <li>
              <span className="text-second-color">Программист</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
