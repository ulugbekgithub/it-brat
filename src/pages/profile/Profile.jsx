import Sidebar from "../../components/sidebar";
import CenterMenu from "../../components/centerMenu";
import ProfileSidebar from "../../components/profileSidebar";
import Footer from "../../components/footer";
import logo from "../../assets/logo.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

export default function Profile() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className="w-full flex md:flex-row flex-col md:justify-between justify-center bg-main-black">
        <div className="">
          <div className="w-full md:hidden flex justify-between p-10">
            <div className="w-full max-w-[150px]">
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <button
              className="block md:hidden transition"
              onClick={handleClick}
            >
              {click ? (
                <RiCloseLargeLine color="white" size={25} />
              ) : (
                <BiMenuAltRight color="white" size={25} />
              )}
            </button>
          </div>
        </div>
        <div className="w-full max-w-[308px] md:block hidden">
          <Sidebar />
        </div>
        <div className="md:w-[calc(100%-616px)] w-full  md:p-0 p-10 bg-main-black">
          <CenterMenu />
        </div>
        <div className="w-full   max-w-[308px] bg-main-black md:block hidden">
          <ProfileSidebar />
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-main-black">
        <div className="w-full max-w-[1196px]  flex justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
