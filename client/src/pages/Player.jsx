import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import CardPlan from "../components/Home/CardPlan";
import Videoplayer from "../components/Videoplayer/Videoplayer";
import VideoplayerDescription from "../components/VideoplayerDescrirption/VideoplayerDescription";


function PlayerPage() {
    return (
      <>
        <Header />
        <VideoplayerDescription />
        <Videoplayer />
        <CardPlan />
        <Footer />        
      </>
    );
  }
  export default PlayerPage;
  