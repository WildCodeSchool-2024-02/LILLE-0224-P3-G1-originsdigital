import { useState } from "react";
import Header from "../components/Header/header";
import VideoCard from "../components/VideoCard/VideoCard";
// import Footer from "../components/Footer";
import ImageRandom from "../components/ImageRandom/ImageRandom";
import CardCaroussel from "../components/Carousels/CardCarousel";
import CardCarouselSeries from "../components/Carousels/CardCarouselSeries";

import "./PageBrowse.css";

function PageBrowse() {
  const [name, setName] = useState("masque");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1 && window.innerWidth >= 1024) {
      setName("masque1024");
    } else {
      setName("masque");
    }
  });
  return (
    <>
      <Header />
      <div className={name}>.</div>
      <CardCaroussel />
      <ImageRandom />
      <CardCarouselSeries />
      <VideoCard />
      {/* { <Footer />} */}
    </>
  );
}

export default PageBrowse;
