import Header from "../components/Header/header";
import VideoCard from "../components/VideoCard/VideoCard";
import ImageRandom from "../components/ImageRandom/ImageRandom";
import CardCaroussel from "../components/Carousels/CardCarousel";
import CardCarouselSeries from "../components/Carousels/CardCarouselSeries";
import "./PageBrowse.css";
import Footer from "../components/Footer";

function PageBrowse() {
  return (
    <>
      <Header />
      <div className={window.innerWidth >= 1024 ? "masque-none" : "masque"}>
        .
      </div>
      <CardCaroussel />
      <ImageRandom />
      <CardCarouselSeries />
      <VideoCard />
      <Footer />
    </>
  );
}

export default PageBrowse;
