const AbstractSeeder = require("./AbstractSeeder");
const VideoSeeder = require("./B_VideoSeeder");
const GenreSeeder = require("./GenreSeeder");

class VideoGenreSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "video_genre",
      truncate: true,
      dependencies: [VideoSeeder, GenreSeeder],
    });
  }

  run() {
    const videoGenres = [
      {
        videoID: this.getRef("video_Les Aventuriers de l'Arche perdue")
          .insertId,
        genreID: this.getRef("genre_Aventure").insertId,
      },
      {
        videoID: this.getRef("video_Retour vers le futur").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Le Grand Bleu").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_La Ligne verte").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Gladiator").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_La Boum").insertId,
        genreID: this.getRef("genre_Comédie").insertId,
      },
      {
        videoID: this.getRef("video_Nikita").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Cyrano de Bergerac").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Le Fabuleux Destin d'Amélie Poulain")
          .insertId,
        genreID: this.getRef("genre_Comédie").insertId,
      },
      {
        videoID: this.getRef("video_Bienvenue chez les Ch'tis").insertId,
        genreID: this.getRef("genre_Comédie").insertId,
      },
      {
        videoID: this.getRef("video_Scarface").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Rain Man").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Les Affranchis").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Le Silence des Agneaux").insertId,
        genreID: this.getRef("genre_Thriller").insertId,
      },
      {
        videoID: this.getRef(
          "video_Le Seigneur des Anneaux : La Communauté de l'Anneau"
        ).insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_Friends").insertId,
        genreID: this.getRef("genre_Comédie").insertId,
      },
      {
        videoID: this.getRef("video_The X-Files").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Buffy the Vampire Slayer").insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_The Sopranos").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Lost").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_NYPD Blue").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Angel").insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_The Fresh Prince of Bel-Air").insertId,
        genreID: this.getRef("genre_Comédie").insertId,
      },
      {
        videoID: this.getRef("video_ER").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
    ];

    videoGenres.forEach((genre) => {
      this.insert(genre);
    });
  }
}

module.exports = VideoGenreSeeder;
