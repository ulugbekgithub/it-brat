import Charts from "../components/charts";

export default function ProfileBurger() {
  return (
    <div className="">
      <div className="min-h-screen flex flex-row p-5">
        <div className="flex flex-col max-w-[393px]  h-full w-full bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-main-white rounded-3xl overflow-hidden">
          <ul className="flex flex-col py-6 px-12">
            <li>
              <div className="w-[80px] h-[80px] rounded-full border-2 border-main-red mx-auto cursor-pointer"></div>
            </li>
            <li>
              <h2 className="text-center">Маргарита</h2>
            </li>
            <li className="text-center">
              <span className="text-second-color">Программист</span>
            </li>
          </ul>

          <div className="p-2">
            <Charts />
          </div>

          <div className="w-full h-20 px-5">
            <div className="flex justify-between">
              <span className="text-main-white text-xs">Уведомления</span>
              <a href="" className="text-main-red text-xs underline">
                Все
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
