import { createContext, useContext, useState } from "react";

const ToastPopupContext = createContext();

const useToastPopupContext = () => useContext(ToastPopupContext);

export default useToastPopupContext;

export function ToastPopupProvider({ children }) {
  const [isToastPopupVisible, setIsToastPopupVisible] = useState(false);

  function fireToastPopup() {
    setTimeout(() => {
      setIsToastPopupVisible(true);
    }, [1]);
    setTimeout(() => {
      setIsToastPopupVisible(false);
    }, 3000);
  }

  return (
    <ToastPopupContext.Provider value={{ isToastPopupVisible, fireToastPopup }}>
      {children}
    </ToastPopupContext.Provider>
  );
}
