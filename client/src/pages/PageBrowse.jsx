import Header from "../components/Header/header";
import VideoCard from "../components/VideoCard/VideoCard";
// import Footer from "../components/Footer";
import ImageRandom from "../components/ImageRandom/ImageRandom";
import CardCaroussel from "../components/Carousels/CardCarousel";

function PageBrowse() {
  return (
    <>
      <Header />
      <CardCaroussel />
      <ImageRandom />
      <CardCaroussel />
      <VideoCard />
     {/* { <Footer />} */}
    </>
  );
}

export default PageBrowse;
