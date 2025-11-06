import useSidebarContext from "../../contexts/SidebarContext";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";

const NAV_OPTIONS = [
  { id: 1, name: "Dashboard", icon: HomeOutlinedIcon, path: "/" },
  { id: 2, name: "Leads", icon: PeopleAltOutlinedIcon, path: "/leads" },
  {
    id: 3,
    name: "Sales Agents",
    icon: AccountCircleOutlinedIcon,
    path: "/agent",
  },
  { id: 4, name: "Reports", icon: InsertChartOutlinedIcon, path: "/report" },
  { id: 5, name: "Settings", icon: SettingsOutlinedIcon, path: "/settings" },
];

export default function Sidebar() {
  const { isSidebarVisible, setSidebarVisible } = useSidebarContext();

  return (
    <aside
      className={`fixed z-50 left-0 top-0 h-screen bg-surface-darkblue overflow-hidden transition-all ease-in duration-300 ${
        isSidebarVisible ? "w-64" : "w-0"
      }`}
    >
      <header className="h-[89px] px-6 py-4 flex flex-col gap-2 border-b border-border-darkblue relative">
        <h2 className="text-2xl font-bold text-text-blue">Anvaya</h2>
        <p className="text-xs text-text-gray">CRM Dashboard</p>
        <p
          className="hidden max-md:block absolute right-4 top-6 text-text-white cursor-pointer"
          onClick={setSidebarVisible}
        >
          <DoDisturbOnOutlinedIcon className="!text-xl" />
        </p>
      </header>
      <div className="w-full h-fit p-2">
        <h5 className="h-8 px-2 text-xs text-text-gray font-medium flex items-center">
          Navigation
        </h5>
        <ul>
          {NAV_OPTIONS.map((nav) => (
            <li key={nav.id}>
              <NavLink
                className={({ isActive }) =>
                  `p-2 text-sm text-text-blue hover:text-text-white hover:bg-[#1D283A] flex gap-2 items-center group  cursor-pointer rounded-md
                ${isActive && "text-text-white bg-[#1D283A]"}`
                }
                to={nav.path}
              >
                <nav.icon className="!text-[20px]" />
                <span>{nav.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
