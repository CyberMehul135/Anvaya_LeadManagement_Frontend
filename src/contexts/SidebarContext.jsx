import { createContext, useContext, useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const SidebarContext = createContext();

const useSidebarContext = () => useContext(SidebarContext);

export default useSidebarContext;

export function SidebarProvider({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const { width } = useWindowSize();

  function sidebarInitialValue() {
    if (width <= 767) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
  }

  const setSidebarVisible = () => setIsSidebarVisible(!isSidebarVisible);

  useEffect(() => {
    sidebarInitialValue();
  }, [width]);

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, setSidebarVisible }}>
      {children}
    </SidebarContext.Provider>
  );
}
