import Header from "../components/Header/header";
import VideoCard from "../components/VideoCard/VideoCard";
// import Footer from "../components/Footer";
import ImageRandom from "../components/ImageRandom/ImageRandom";
import CardCaroussel from "../components/Carousels/CardCarousel";
import CardCarouselSeries from "../components/Carousels/CardCarouselSeries";
import "./PageBrowse.css";

function PageBrowse() {
  return (
    <>
      <Header />
      <div className="masque">.</div>
      <CardCaroussel />
      <ImageRandom />
      <CardCarouselSeries />
      <VideoCard />
      {/* { <Footer />} */}
    </>
  );
}

export default PageBrowse;
