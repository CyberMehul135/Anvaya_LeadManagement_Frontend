import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons/Button";
import Container from "../components/Containers/Container";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import useSidebarContext from "../contexts/SidebarContext";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AgentForm from "../components/AgentForm/AgentForm";

export default function AddSalesAgent() {
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
              label="Back to Leads"
              icon={KeyboardBackspaceIcon}
              background="bg-surface-white hover:bg-surface-green"
              text="text-text-primary hover:text-text-white"
              handleClick={() => navigate(-1)}
            />
          </Container>
          <Container className="mt-6">
            <AgentForm />
          </Container>
        </main>
      </Container>
    </Container>
  );
}
