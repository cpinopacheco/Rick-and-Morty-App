import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const data = {};
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };

export default AppContext;
