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
  );

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Mycontext = () => useContext(context);
