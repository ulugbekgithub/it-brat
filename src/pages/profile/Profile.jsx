import Sidebar from "../../components/sidebar";
import CenterMenu from "../../components/centerMenu";
import ProfileSidebar from "../../components/profileSidebar";
import Footer from "../../components/footer";

export default function Profile() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[308px]">
          <Sidebar />
        </div>
        <div className="w-[calc(100%-616px)]  bg-main-black">
          <CenterMenu />
        </div>
        <div className="w-[308px] bg-main-black">
          <ProfileSidebar />
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-main-black">
        <div className="w-full max-w-[1196px] flex justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
