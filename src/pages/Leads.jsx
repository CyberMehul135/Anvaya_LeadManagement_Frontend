import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import useSidebarContext from "../contexts/SidebarContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LeadCard from "../components/Leadcard/LeadCard";
import FilterByStatus from "../components/Filters/FilterByStatus";
import FilterByAgent from "../components/Filters/FilterByAgent";
import useLeadContext from "../contexts/LeadContext";
import LoadingBar from "../components/Loading/Loading";
import Heading1 from "../components/Headings/Heading1";
import Button from "../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import Container from "../components/Containers/Container";
import Sort from "../components/Sort/Sort";

export default function Leads() {
  const { isSidebarVisible } = useSidebarContext();
  const { leads, leadsLoading, leadsError } = useLeadContext();
  const navigate = useNavigate();

  if (leadsError) return <p>Errro while fetching data.</p>;

  if (leads) {
    return (
      <Container className="w-full max-w-[1600px] mx-auto flex relative">
        <Sidebar />
        <Container
          className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          }`}
        >
          <LoadingBar loading={leadsLoading} />
          <Header />
          <main className="w-full h-fit p-6 bg-surface-primary text-black">
            <Container className="flex justify-between items-center">
              <Heading1
                main="All Leads"
                sub="Manage and track all your leads"
              />
              <Button
                label="Add New Lead"
                icon={AddOutlinedIcon}
                handleClick={() => navigate("/leads/new")}
              />
            </Container>

            <Container className="mt-6 flex gap-2 max-md:flex-col">
              <FilterByStatus />
              <FilterByAgent />
              <Sort />
            </Container>

            <Container className="mt-4 grid gap-4 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {leads && leads.length > 0 ? (
                leads.map((lead) => <LeadCard key={lead._id} lead={lead} />)
              ) : (
                <p>No card found.</p>
              )}
            </Container>
          </main>
        </Container>
      </Container>
    );
  }
}
