import { useEffect, useState } from "react";
import "./Videoplayer.css";
import { useParams } from "react-router-dom";
import { Mycontext } from "../Context";

function Videoplayer() {
  const [info, setInfo] = useState();

  const { iframe, setIframe } = Mycontext();
  const [iframeId, setIframeId] = useState("iframe-video-none");

  const { id } = useParams();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200 && window.innerWidth >= 1024) {
      setIframeId("iframe-video-youtube");
    } else {
      setIframeId("iframe-video-none");
    }
  });

  useEffect(() => {
    fetch(`http://localhost:3310/api/videos/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        const splitUrl = response[0].link
          .split("=")[1]
          .split("_")[0]
          .split("&")[0];
        setInfo(splitUrl);
      });
  }, [id]);

  setTimeout(() => {
    setIframe("iframe_player");
  }, 1000);
  return (
    <iframe
      className={iframe}
      width="100%"
      height="250px"
      title="video"
      src={`https://www.youtube.com/embed/${info && info}`}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      id={iframeId}
    >
      {" "}
    </iframe>
  );
}

export default Videoplayer;
