import AgentList from "../components/AgentList/AgentList";
import Container from "../components/Containers/Container";
import Header from "../components/header/Header";
import Heading1 from "../components/Headings/Heading1";
import LeadList from "../components/LeadList/LeadList";
import Sidebar from "../components/Sidebar/Sidebar";
import ToastPopup from "../components/ToastPopup/ToastPopup";
import useSidebarContext from "../contexts/SidebarContext";

export default function Settings() {
  const { isSidebarVisible } = useSidebarContext();
  return (
    <Container className="w-full max-w-[1600px] mx-auto flex relative">
      <Sidebar />
      <ToastPopup label="deleted successfully." />
      <Container
        className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
          isSidebarVisible ? "ml-64" : "ml-0"
        }`}
      >
        <Header />
        <main className="w-full h-fit min-h-screen p-6 bg-surface-primary text-black">
          <Container className="flex justify-between items-center">
            <Heading1 main="Settings" sub="Manage your CRM preferences" />
          </Container>
          <LeadList />
          <AgentList />
        </main>
      </Container>
    </Container>
  );
}
