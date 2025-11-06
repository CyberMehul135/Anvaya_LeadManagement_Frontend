import { createContext, useContext } from "react";

const ApiUrlContext = createContext();

const useApiUrlContext = () => useContext(ApiUrlContext);

export default useApiUrlContext;

export function ApiUrlProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  return (
    <ApiUrlContext.Provider value={{ API_URL }}>
      {children}
    </ApiUrlContext.Provider>
  );
}
