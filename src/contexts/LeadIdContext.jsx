import { useState } from "react";
import { createContext, useContext } from "react";

const LeadIdContext = createContext();

const useLeadIdContext = () => useContext(LeadIdContext);

export default useLeadIdContext;

export function LeadIdProvider({ children }) {
  const [pageLeadId, setPageLeadId] = useState(null);

  return (
    <LeadIdContext.Provider value={{ pageLeadId, setPageLeadId }}>
      {children}
    </LeadIdContext.Provider>
  );
}
