import { createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import useAgentFormContext from "./AgentFormContext";
import { useNavigate } from "react-router-dom";
import useToastPopupContext from "./ToastPopupContext";
import useApiUrlContext from "./ApiUrlContext";

const AgentContext = createContext();

const useAgentContext = () => useContext(AgentContext);

export default useAgentContext;

export function AgentProvider({ children }) {
  const { API_URL } = useApiUrlContext();
  const { data, loading, error, fetchData } = useFetch(`${API_URL}/api/agents`);
  const { resetAgentForm } = useAgentFormContext();
  const { fireToastPopup } = useToastPopupContext();
  const navigate = useNavigate();

  async function addAgent(newAgent) {
    try {
      const response = await axios.post(`${API_URL}/api/agents`, newAgent);
      fetchData();
      resetAgentForm();
      navigate(-1);
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

  return (
    <AgentContext.Provider
      value={{
        agents: data,
        agentsLoading: loading,
        agentsError: error,
        fetchData,
        addAgent,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
}
