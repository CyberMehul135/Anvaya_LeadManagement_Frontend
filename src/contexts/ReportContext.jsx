import { createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import useApiUrlContext from "./ApiUrlContext";

const ReportContext = createContext();

const useReportContext = () => useContext(ReportContext);

export default useReportContext;

export function ReportProvider({ children }) {
  const { API_URL } = useApiUrlContext();
  const {
    data: closedLeadsLastWeek,
    loading: closedLeadsLastWeekLoading,
    error: closedLeadsLastWeekError,
    fetchData: fetchClosedLeadsLastWeek,
  } = useFetch(`${API_URL}/api/report/last-week`);

  const {
    data: totalLeadsInPipeline,
    loading: totalLeadsInPipelineLoading,
    error: totalLeadsInPipelineError,
    fetchData: fetchTotalLeadsInPipeline,
  } = useFetch(`${API_URL}/api/report/pipeline`);

  const {
    data: leadCountByStatus,
    loading: leadCountByStatusLoading,
    error: leadCountByStatusError,
    fetchData: fetchLeadCountByStatus,
  } = useFetch(`${API_URL}/api/report/status-count`);

  const {
    data: leadCountByAgent,
    loading,
    error,
    fetchData,
  } = useFetch(`${API_URL}/api/report/agent-count`);

  return (
    <ReportContext.Provider
      value={{
        closedLeadsLastWeek,
        totalLeadsInPipeline,
        leadCountByStatus,
        leadCountByAgent,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}
