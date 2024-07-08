import { IoSearch} from "react-icons/io5";
import { Outlet } from "react-router-dom";



export default function CenterMenu() {
  return (
    <div className="">
        <div className="p-1 relative">
            <IoSearch color="white" className="absolute top-12 left-12"/>
            <input className="w-[85%] m-8 p-2 px-10 rounded-xl bg-[#101010] text-main-white" type="text" placeholder="Поиск" />
        </div>


        
        
       <div className="h-[calc(100vh-120px)] overflow-y-auto">
       <Outlet/>
       </div>

    </div>
  )
}
