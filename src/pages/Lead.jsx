import Button from "../components/Buttons/Button";
import Container from "../components/Containers/Container";
import Header from "../components/header/Header";
import LoadingBar from "../components/Loading/Loading";
import Sidebar from "../components/Sidebar/Sidebar";
import useLeadContext from "../contexts/LeadContext";
import useSidebarContext from "../contexts/SidebarContext";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DrawIcon from "@mui/icons-material/Draw";
import LeadDetails from "../components/LeadDetails/LeadDetails";
import { useNavigate, useParams } from "react-router-dom";
import ToastPopup from "../components/ToastPopup/ToastPopup";
import useLeadIdContext from "../contexts/LeadIdContext";
import { useEffect } from "react";

export default function Lead() {
  const { isSidebarVisible } = useSidebarContext();
  const { leads, leadsLoading, leadsError } = useLeadContext();
  const { setPageLeadId } = useLeadIdContext();
  const leadId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setPageLeadId(leadId.leadId);
  }, [leadId]);

  if (leadsError) return <p>Error while fetching data.</p>;
  if (leads) {
    return (
      <Container className="w-full max-w-[1600px] mx-auto flex">
        <Sidebar />
        <ToastPopup label="Lead updated successfully." />
        <Container
          className={`flex-1 transition-all ease-in duration-300 max-md:ml-0 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          }`}
        >
          <Header />
          <LoadingBar loading={leadsLoading} />
          <main className="w-full h-screen min-h-fit p-6 bg-surface-primary text-black">
            <Container className="flex justify-between items-center">
              <Button
                label="Back to Leads"
                icon={KeyboardBackspaceIcon}
                background="bg-surface-white hover:bg-surface-green"
                text="text-text-primary hover:text-text-white"
                handleClick={() => navigate(-1)}
              />
              <Button
                label="Edit Lead"
                icon={DrawIcon}
                handleClick={() => navigate("/leads/edit")}
              />
            </Container>
            <LeadDetails leadId={leadId.leadId} />
          </main>
        </Container>
      </Container>
    );
  }
}
