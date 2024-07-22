import "../components/Footer.css";
import Footer from "../components/Footer";
import Header from "../components/Header/header";
import Videoplayer from "../components/Videoplayer/Videoplayer";
import VideoplayerDescription from "../components/VideoplayerDescrirption/VideoplayerDescription";
import { Mycontext } from "../components/Context";

function PlayerPage() {
  const { footer, setFooter } = Mycontext();
  setTimeout(() => {
    setFooter("footer-player");
  }, 3000);
  return (
    <>
      <Header />
      <VideoplayerDescription id="top" />
      <Videoplayer />
      <div className={footer}>
        <Footer />
      </div>
    </>
  );
}
export default PlayerPage;
