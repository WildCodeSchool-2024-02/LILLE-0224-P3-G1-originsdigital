import { useEffect, useState } from "react";
import "./Videoplayer.css";
import { useParams } from "react-router-dom";

function Videoplayer() {
  const [info, setInfo] = useState();
  const [iframe, setIframe] = useState("iframe_player_none");
  
  const { id } = useParams();
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
  }, []);
  setTimeout(()=>{
    setIframe("iframe_player")
  },1000)
  return (
    <iframe
      className={iframe}
      width="100%"
      height="250px"
      title="video"
      src={`https://www.youtube.com/embed/${info && info}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
      {" "}
    </iframe>
  );
}

export default Videoplayer;
