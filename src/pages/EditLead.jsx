import { useNavigate } from "react-router-dom";
import useSidebarContext from "../contexts/SidebarContext";
import Container from "../components/Containers/Container";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/header/Header";
import Button from "../components/Buttons/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LeadEditForm from "../components/LeadForm/LeadEditForm";

export default function EditLead() {
  const { isSidebarVisible } = useSidebarContext();
  const navigate = useNavigate();

  return (
    <Container className="w-full max-w-[1600px] mx-auto flex">
      <Sidebar />
      <Container
        className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
          isSidebarVisible ? "ml-64" : "ml-0"
        }`}
      >
        <Header />
        <main className="w-full h-fit min-h-[100vh] p-6 bg-surface-primary text-black">
          <Container className="flex justify-between items-center">
            <Button
              label="Back to Lead"
              icon={KeyboardBackspaceIcon}
              background="bg-surface-white hover:bg-surface-green"
              text="text-text-primary hover:text-text-white"
              handleClick={() => navigate(-1)}
            />
          </Container>
          <Container className="mt-6">
            <LeadEditForm />
          </Container>
        </main>
      </Container>
    </Container>
  );
}
