import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../Card/Card";

function CardCarousel() {
  return (
    <Carousel
      showArrows
      showStatus={false}
      showThumbs={false}
      emulateTouch
      infiniteLoop
      selectedItem={0}
      width="100%"
      autoPlay
    >
      <div style={{ display: "flex" }}>
        <Card
          title="Titre 1"
          releaseDate="Date de sortie 1"
          duration="Durée 1"
          director="Réalisateur 1"
          synopsis="Synopsis 1"
          imageUrl="https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg"
        />
        <Card
          title="Titre 2"
          releaseDate="Date de sortie 2"
          duration="Durée 2"
          director="Réalisateur 2"
          synopsis="Synopsis 2"
          imageUrl="https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg"
        />
        <Card
          title="Titre 3"
          releaseDate="Date de sortie 3"
          duration="Durée 3"
          director="Réalisateur 3"
          synopsis="Synopsis 3"
          imageUrl="https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg"
        />
      </div>
      <div style={{ display: "flex" }}>
        <Card
          title="Titre 4"
          releaseDate="Date de sortie 4"
          duration="Durée 4"
          director="Réalisateur 4"
          synopsis="Synopsis 4"
          imageUrl="https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg"
        />
        <Card
          title="Titre 5"
          releaseDate="Date de sortie 5"
          duration="Durée 5"
          director="Réalisateur 5"
          synopsis="Synopsis 5"
          imageUrl="https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg"
        />
        <Card
          title="Titre 6"
          releaseDate="Date de sortie 6"
          duration="Durée 6"
          director="Réalisateur 6"
          synopsis="Synopsis 6"
          imageUrl="https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg"
        />
      </div>
    </Carousel>
  );
}

export default CardCarousel;
