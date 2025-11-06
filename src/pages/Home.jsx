import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import useLeadContext from "../contexts/LeadContext";
import StatOverview from "../components/StatCard/StatOverview";
import LeadCardOverview from "../components/Leadcard/LeadCardOverview";
import useSidebarContext from "../contexts/SidebarContext";
import LoadingBar from "../components/Loading/Loading";
import Heading1 from "../components/Headings/Heading1";
import Button from "../components/Buttons/Button";
import Container from "../components/Containers/Container";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isSidebarVisible } = useSidebarContext();
  const { leads, leadsLoading, leadsError } = useLeadContext();
  const navigate = useNavigate();
  console.log(leads);

  if (leadsError) return <p>Error while fetching data.</p>;

  if (leads) {
    return (
      <Container className="w-full max-w-[1600px] mx-auto flex">
        <Sidebar />
        <Container
          className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          }`}
        >
          <Header />
          <LoadingBar loading={leadsLoading} />
          <main className="w-full h-fit p-6 bg-surface-primary text-black">
            <Container className="flex justify-between items-center">
              <Heading1 main="Dashboard" sub="Welcome to Anvaya CRM" />
              <Button
                label="Add New Lead"
                icon={AddOutlinedIcon}
                handleClick={() => navigate("/leads/new")}
              />
            </Container>

            <StatOverview leads={leads} />

            <Container className="mt-6">
              <LeadCardOverview />
            </Container>
          </main>
        </Container>
      </Container>
    );
  }
}
