import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const context = createContext();

export function ContextProvider({ children }) {
  const [userName, setUserName] = useState("salut");

  const [style, setStyle] = useState(false);
  const [textDefile, setTexDefile] = useState("");

  const fctStyle = (title) => {
    setStyle(!style);
    setTexDefile(title);
  };
  if (style) {
    setTimeout(() => {
      setStyle(!style);
    }, 2500);
  }

  if (style) {
    setTimeout(() => {}, 800);
  }

  const contextValue = useMemo(
    () => ({ userName, setUserName, fctStyle, textDefile, style }),
    [userName, textDefile, style]
  );

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Mycontext = () => useContext(context);
