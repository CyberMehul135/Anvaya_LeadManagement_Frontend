import { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import useLeadIdContext from "./LeadIdContext";
import useApiUrlContext from "./ApiUrlContext";

const LeadEditFormContext = createContext();

const useLeadEditFormContext = () => useContext(LeadEditFormContext);

export default useLeadEditFormContext;

export function LeadEditFormProvider({ children }) {
  const [leadEditForm, setLeadEditForm] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    status: "",
    priority: "",
    salesAgent: "",
    source: "",
    tags: [],
    timeToClose: 30,
    potentialValue: "",
    closedAt: "",
  });
  const { API_URL } = useApiUrlContext();
  const { pageLeadId } = useLeadIdContext();
  const { data, loading, error, fetchData } = useFetch(
    pageLeadId ? `${API_URL}/api/leads/${pageLeadId}` : null
  );

  function handleInputChange(e) {
    const { value, name } = e.target;
    setLeadEditForm((pre) => ({
      ...pre,
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    }));
  }

  function resetLeadEditForm() {
    setLeadEditForm({
      name: "",
      companyName: "",
      email: "",
      phone: "",
      status: "",
      priority: "",
      salesAgent: "",
      source: "",
      tags: [],
      timeToClose: 30,
      potentialValue: "",
    });
  }

  useEffect(() => {
    if (pageLeadId) fetchData();
  }, [pageLeadId]);

  useEffect(() => {
    if (data) {
      setLeadEditForm((pre) => ({
        ...pre,
        name: data.name,
        companyName: data.companyName,
        email: data.email,
        phone: data.phone,
        status: data.status,
        priority: data.priority,
        salesAgent: data.salesAgent,
        source: data.source,
        tags: data.tags,
        timeToClose: data.timeToClose,
        potentialValue: data.potentialValue,
        closedAt: data.closedAt,
      }));
    }
  }, [data]);

  return (
    <LeadEditFormContext.Provider
      value={{
        leadEditForm,
        handleInputChange,
        resetLeadEditForm,
      }}
    >
      {children}
    </LeadEditFormContext.Provider>
  );
}
