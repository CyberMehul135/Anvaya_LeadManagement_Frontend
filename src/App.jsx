import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leads from "./pages/Leads";
import Lead from "./pages/Lead";
import AddLead from "./pages/AddLead";
import EditLead from "./pages/EditLead";
import SalesAgent from "./pages/SalesAgent";
import AddSalesAgent from "./pages/AddSalesAgent";
import Report from "./pages/Report";
import Settings from "./pages/Settings";
import { SidebarProvider } from "./contexts/SidebarContext";
import { LeadProvider } from "./contexts/LeadContext";
import { FilterProvider } from "./contexts/FilterContext";
import { AgentProvider } from "./contexts/AgentContext";
import { LeadDetailsProvider } from "./contexts/LeadDetailsContext";
import { LeadFormProvider } from "./contexts/LeadFormContext";
import { CommentFormProvider } from "./contexts/CommentFormContext";
import { CommentProvider } from "./contexts/CommentContext";
import { AgentFormProvider } from "./contexts/AgentFormContext";
import { ReportProvider } from "./contexts/ReportContext";
import { LeadEditFormProvider } from "./contexts/LeadEditFormContext";
import { LeadIdProvider } from "./contexts/LeadIdContext";
import { ToastPopupProvider } from "./contexts/ToastPopupContext";
import { ApiUrlProvider } from "./contexts/ApiUrlContext";

function App() {
  return (
    <BrowserRouter>
      <ApiUrlProvider>
        <ToastPopupProvider>
          <LeadIdProvider>
            <LeadEditFormProvider>
              <ReportProvider>
                <AgentFormProvider>
                  <CommentFormProvider>
                    <CommentProvider>
                      <FilterProvider>
                        <AgentProvider>
                          <LeadFormProvider>
                            <LeadProvider>
                              <LeadDetailsProvider>
                                <SidebarProvider>
                                  <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/leads" element={<Leads />} />
                                    <Route
                                      path="/leads/:leadId"
                                      element={<Lead />}
                                    />
                                    <Route
                                      path="/leads/new"
                                      element={<AddLead />}
                                    />
                                    <Route
                                      path="/leads/edit"
                                      element={<EditLead />}
                                    />
                                    <Route
                                      path="/agent"
                                      element={<SalesAgent />}
                                    />
                                    <Route
                                      path="/agent/new"
                                      element={<AddSalesAgent />}
                                    />
                                    <Route
                                      path="/report"
                                      element={<Report />}
                                    />
                                    <Route
                                      path="/settings"
                                      element={<Settings />}
                                    />
                                  </Routes>
                                </SidebarProvider>
                              </LeadDetailsProvider>
                            </LeadProvider>
                          </LeadFormProvider>
                        </AgentProvider>
                      </FilterProvider>
                    </CommentProvider>
                  </CommentFormProvider>
                </AgentFormProvider>
              </ReportProvider>
            </LeadEditFormProvider>
          </LeadIdProvider>
        </ToastPopupProvider>
      </ApiUrlProvider>
    </BrowserRouter>
  );
}
export default App;
