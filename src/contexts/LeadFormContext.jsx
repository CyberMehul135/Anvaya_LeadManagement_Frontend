import { createContext, useContext, useState } from "react";

const LeadFormContext = createContext();

const useLeadFormContext = () => useContext(LeadFormContext);

export default useLeadFormContext;

export function LeadFormProvider({ children }) {
  const [leadForm, setLeadForm] = useState({
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

  function handleInputChange(e) {
    const { value, name } = e.target;
    setLeadForm((pre) => ({
      ...pre,
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    }));
  }

  function resetLeadForm() {
    setLeadForm({
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

  return (
    <LeadFormContext.Provider
      value={{ leadForm, handleInputChange, resetLeadForm }}
    >
      {children}
    </LeadFormContext.Provider>
  );
}
