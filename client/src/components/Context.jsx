import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const context = createContext();

export function ContextProvider({ children }) {
  const [userName, setUserName] = useState("salut");
  const [videos, setVideos] = useState([]);
  const [notation, setNotation] = useState([]);
  const [animate, setAnimate] = useState("burger-mini");

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get("http://localhost:3310/api/videos");
      setVideos(response.data);
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchNotation = async () => {
      const response = await axios.get(
        "http://localhost:3310/api/videos/notation"
      );
      setNotation(response.data);
    };

    fetchNotation();
  }, []);

  const [style, setStyle] = useState(false);
  const [textDefile, setTexDefile] = useState("");
  const [menu, setMenu] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [container, setContainer] = useState(
    "videoplayer_description_container_none"
  );
  const [same, setSame] = useState("SameCategories-none");
  const [footer, setFooter] = useState("footer-player-none");
  const [iframe, setIframe] = useState("iframe_player_none");

  const fctStyle = (title) => {
    setTexDefile(title);
    setStyle(!style);
    setContainer("videoplayer_description_container_none");
    setSame("SameCategories-none");
    setFooter("footer-player-none");
    setIframe("iframe_player_none");
  };
  if (style) {
    setTimeout(() => {
      setStyle(!style);
    }, 2500);
  }

  const contextValue = useMemo(
    () => ({
      userName,
      setUserName,
      fctStyle,
      textDefile,
      style,
      videos,
      setVideos,
      animate,
      setAnimate,
      menu,
      setMenu,
      onBlur,
      setOnBlur,
      setTexDefile,
      notation,
      container,
      setContainer,
      same,
      setSame,
      footer,
      setFooter,
      iframe,
      setIframe,
    }),
    [
      userName,
      textDefile,
      style,
      videos,
      animate,
      menu,
      onBlur,
      container,
      same,
      footer,
      iframe,
    ]
  );

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Mycontext = () => useContext(context);
