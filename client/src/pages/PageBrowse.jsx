import Header from "../components/Header/header";
import VideoCard from "../components/VideoCard/VideoCard";
import Footer from "../components/Footer";
import ImageRandom from "../components/ImageRandom/ImageRandom";

function PageBrowse() {
  return (
    <>
      <Header />
      <ImageRandom />
      <VideoCard />
      <Footer />
    </>
  );
}

export default PageBrowse;
