import useSidebarContext from "../../contexts/SidebarContext";
import SidebarBtn from "../../assets/sidebarBtn.svg?react";

export default function Header() {
  const { setSidebarVisible } = useSidebarContext();
  return (
    <header className="w-full h-14 px-6 flex items-center bg-surface-secondary border-b text-black">
      <div
        className="p-1.5 rounded-md group hover:bg-surface-green cursor-pointer"
        onClick={setSidebarVisible}
      >
        <SidebarBtn className="size-4 text-text-primary group-hover:text-text-white" />
      </div>
      {/* <h1 className="flex-1 text-center text-2xl font-bold tracking-wider ">
        DASHBOARD
      </h1> */}
    </header>
  );
}
