import "./Videoplayer.css";

function Videoplayer() {
  return (
    <div className="video_player_container">
      <iframe
        className="video_player"
        src="https://www.youtube.com/embed/xLWxiDO2WT0?autoplay=1&mute=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Player"
      />
    </div>
  );
}

export default Videoplayer;
