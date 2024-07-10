import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const context = createContext();

export function ContextProvider({ children }) {
  const [userName, setUserName] = useState("salut");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get("http://localhost:3310/api/videos");
      setVideos(response.data);
    };

    fetchVideos();
  }, []);

  const contextValue = useMemo(
    () => ({ userName, setUserName, videos, setVideos }),
    [userName, videos]

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
