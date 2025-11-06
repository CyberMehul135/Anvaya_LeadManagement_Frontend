import Container from "../components/Containers/Container";
import Header from "../components/header/Header";
import Heading1 from "../components/Headings/Heading1";
import Sidebar from "../components/Sidebar/Sidebar";
import useSidebarContext from "../contexts/SidebarContext";

export default function Settings() {
  const { isSidebarVisible } = useSidebarContext();
  return (
    <Container className="w-full max-w-[1600px] mx-auto flex relative">
      <Sidebar />
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
          <Container className="p-6 mt-6 bg-surface-secondary border border-border-default rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">General Setting</h3>
            <p className="text-base text-text-secondary">
              Setting configuration coming soon...
            </p>
          </Container>
        </main>
      </Container>
    </Container>
  );
}
