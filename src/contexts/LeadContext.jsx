import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import useFilterContext from "./FilterContext";
import useLeadFormContext from "./LeadFormContext";
import axios from "axios";
import useToastPopupContext from "./ToastPopupContext";
import useApiUrlContext from "./ApiUrlContext";

const LeadContext = createContext();

const useLeadContext = () => useContext(LeadContext);

export default useLeadContext;

export function LeadProvider({ children }) {
  const { API_URL } = useApiUrlContext();
  const { filters } = useFilterContext();
  const { data, loading, error, fetchData } = useFetch(
    `${API_URL}/api/leads?${filters}`
  );
  const { resetLeadForm } = useLeadFormContext();
  const { fireToastPopup } = useToastPopupContext();
  const navigate = useNavigate();

  async function addLead(newLead) {
    try {
      const response = await axios.post(`${API_URL}/api/leads`, newLead);
      fetchData();
      resetLeadForm();
      fireToastPopup();
    } catch (error) {
      if (error.response) {
        // (400, 404, etc.)
        console.error("Backend Error:", error.response.data.error);
      } else {
        // network issue etc.
        console.error("Network Error:", error.message);
      }
    }
  }

  async function updateLead(leadId, dataToUpdate) {
    try {
      const payLoad = {
        ...dataToUpdate,
        closedAt: dataToUpdate.closedAt === "" ? null : dataToUpdate.closedAt,
      };
      const response = await axios.post(
        `${API_URL}/api/leads/${leadId}`,
        payLoad
      );
      fetchData();
      navigate(-1);
      fireToastPopup();
    } catch (error) {
      if (error.response) {
        console.error("Backend Error:", error.response.data.error);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  }

  async function deleteLead(leadId) {
    try {
      const response = await axios.delete(`${API_URL}/api/leads/${leadId}`);
      fetchData();
    } catch (error) {
      if (error.response) {
        console.error("Backend Error:", error.response.data.error);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <LeadContext.Provider
      value={{
        leads: data,
        leadsLoading: loading,
        leadsError: error,
        addLead,
        updateLead,
        deleteLead,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}
