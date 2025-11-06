import { createContext, useContext, useState } from "react";

const LeadDetailsContext = createContext();

const useLeadDetailsContext = () => useContext(LeadDetailsContext);

export default useLeadDetailsContext;

export function LeadDetailsProvider({ children }) {
  const [status, setStatus] = useState([
    { _id: "New", name: "New" },
    { _id: "Contacted", name: "Contacted" },
    { _id: "Qualified", name: "Qualified" },
    { _id: "Proposal Sent", name: "Proposal Sent" },
    { _id: "Closed", name: "Closed" },
  ]);

  const [priority, setPriority] = useState([
    { _id: "High", name: "High" },
    { _id: "Medium", name: "Medium" },
    { _id: "Low", name: "Low" },
  ]);

  const [source, setSource] = useState([
    { _id: "Website", name: "Website" },
    { _id: "Referral", name: "Referral" },
    { _id: "Cold Call", name: "Cold Call" },
    { _id: "Advertisement", name: "Advertisement" },
    { _id: "Email", name: "Email" },
    { _id: "Other", name: "Other" },
  ]);

  return (
    <LeadDetailsContext.Provider
      value={{ status, setStatus, priority, setPriority, source, setSource }}
    >
      {children}
    </LeadDetailsContext.Provider>
  );
}
