import { useNavigate } from "react-router-dom";
import AgentCard from "../components/AgentCard/AgentCard";
import Button from "../components/Buttons/Button";
import Container from "../components/Containers/Container";
import Header from "../components/header/Header";
import Heading1 from "../components/Headings/Heading1";
import LoadingBar from "../components/Loading/Loading";
import Sidebar from "../components/Sidebar/Sidebar";
import useAgentContext from "../contexts/AgentContext";
import useSidebarContext from "../contexts/SidebarContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ToastPopup from "../components/ToastPopup/ToastPopup";

export default function SalesAgent() {
  const { isSidebarVisible } = useSidebarContext();
  const { agents, agentsLoading, agentsError } = useAgentContext();
  const navigate = useNavigate();

  if (agentsError) return <p>Error while fetching agents.</p>;
  if (agents) {
    return (
      <Container className="w-full max-w-[1600px] mx-auto flex">
        <Sidebar />
        <ToastPopup label="Agent created successfully." />
        <Container
          className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          }`}
        >
          <LoadingBar loading={agentsLoading} />
          <Header />
          <main className="w-full h-fit min-h-[100vh] p-6 bg-surface-primary text-black">
            <Container className="flex justify-between items-center">
              <Heading1 main="Sales Agent" sub="Manage your sales team" />
              <Button
                label="Add New Agent"
                icon={AddOutlinedIcon}
                handleClick={() => navigate("/agent/new")}
              />
            </Container>
            <Container className="mt-6 grid gap-5 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {agents.length > 0 ? (
                agents.map((agent) => (
                  <AgentCard key={agent._id} agent={agent} />
                ))
              ) : (
                <p>No Agents Found.</p>
              )}
            </Container>
          </main>
        </Container>
      </Container>
    );
  }
}
