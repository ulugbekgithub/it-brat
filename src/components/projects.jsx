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
                className="bg-cover bg-center w-[298px] h-[335px]"
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                }}
              >

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
