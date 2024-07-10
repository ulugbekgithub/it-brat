import { ServiceData } from "../constants";

export default function Projects() {
  return (
    <div className="px-5">
      <div className="">
        <h1 className="text-main-white text-3xl font-semibold">Проекты</h1>

        <div className="w-full h-full grid grid-cols-2 gap-5 py-3">
          {ServiceData.map((item) => (
            <div key={item.title} className="w-full h-full">
              <div
                className="bg-cover flex items-end bg-center w-[358px] h-[405px]"
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                }}
              >
                <div className="w-full relative flex flex-col gap-5 p-5">
                  <h1 className="text-xl text-main-white font-semibold lg:text-2xl">
                    {item.title}
                  </h1>
                  <div className="flex items-end justify-between">
                  <p className="lg:text-[18px] text-second-color">
                    от <br />
                    {item.price} р.
                  </p>
                  <a className="text-main-red underline" href="">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
