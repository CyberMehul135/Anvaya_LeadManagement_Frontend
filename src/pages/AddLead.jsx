import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons/Button";
import Header from "../components/header/Header";
import LeadForm from "../components/LeadForm/LeadForm";
import Sidebar from "../components/Sidebar/Sidebar";
import useSidebarContext from "../contexts/SidebarContext";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ToastPopup from "../components/ToastPopup/ToastPopup";

export default function AddLead() {
  const { isSidebarVisible } = useSidebarContext();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full max-w-[1600px] mx-auto flex">
        <Sidebar />
        <ToastPopup label="Lead created successfully." />
        <div
          className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          }`}
        >
          <Header />
          <main className="w-full h-fit p-6 bg-surface-primary text-black">
            <Button
              label="Back to Leads"
              icon={KeyboardBackspaceIcon}
              background="bg-surface-white hover:bg-surface-green"
              text="text-text-primary hover:text-text-white"
              handleClick={() => navigate(-1)}
            />
            <LeadForm />
          </main>
        </div>
      </div>
    </div>
  );
}
