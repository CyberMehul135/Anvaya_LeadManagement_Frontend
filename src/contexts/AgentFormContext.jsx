import { createContext, useContext, useState } from "react";

const AgentFormContext = createContext();

const useAgentFormContext = () => useContext(AgentFormContext);

export default useAgentFormContext;

export function AgentFormProvider({ children }) {
  const [agentForm, setAgentForm] = useState({ name: "", email: "" });

  function handleAgentFormOnChange(e) {
    const { name, value } = e.target;
    setAgentForm((pre) => ({ ...pre, [name]: value }));
  }

  function resetAgentForm() {
    setAgentForm((pre) => ({ ...pre, name: "", email: "" }));
  }

  return (
    <AgentFormContext.Provider
      value={{ agentForm, handleAgentFormOnChange, resetAgentForm }}
    >
      {children}
    </AgentFormContext.Provider>
  );
}
