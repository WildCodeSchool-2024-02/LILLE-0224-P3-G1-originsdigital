import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const context = createContext();

export function ContextProvider({ children }) {
  const [userName, setUserName] = useState("salut");

  const contextValue = useMemo(() => ({ userName, setUserName }), [userName]);

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Mycontext = () => useContext(context);
