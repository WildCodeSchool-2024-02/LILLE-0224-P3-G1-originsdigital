const AbstractSeeder = require("./AbstractSeeder");
const VideoSeeder = require("./BVideoSeeder");
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
      {
        videoID: this.getRef("video_Terminator 2 : le Jugement Dernier")
          .insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Le Cinquième élément").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Jurassic Park").insertId,
        genreID: this.getRef("genre_Aventure").insertId,
      },
      {
        videoID: this.getRef("video_Le Roi Lion").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_La Liste de Schindler").insertId,
        genreID: this.getRef("genre_Biopic").insertId,
      },
      {
        videoID: this.getRef("video_Fight Club").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_La Ligne rouge").insertId,
        genreID: this.getRef("genre_Guerre").insertId,
      },
      {
        videoID: this.getRef("video_Braveheart").insertId,
        genreID: this.getRef("genre_Historique").insertId,
      },
      {
        videoID: this.getRef("video_Titanic").insertId,
        genreID: this.getRef("genre_Romance").insertId,
      },
      {
        videoID: this.getRef("video_Matrix").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Matrix Reloaded").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Seven").insertId,
        genreID: this.getRef("genre_Thriller").insertId,
      },
      {
        videoID: this.getRef("video_The Dark Knight, Le Chevalier Noir")
          .insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Kill Bill: Volume 1").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_WALL·E").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Avatar").insertId,
        genreID: this.getRef("genre_Aventure").insertId,
      },
      {
        videoID: this.getRef("video_Le Voyage de Chihiro").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Gran Torino").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Harry Potter à l'école des sorciers")
          .insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_Inglourious Basterds").insertId,
        genreID: this.getRef("genre_Guerre").insertId,
      },
      {
        videoID: this.getRef("video_L'Étrange Histoire de Benjamin Button")
          .insertId,
        genreID: this.getRef("genre_Romance").insertId,
      },
      {
        videoID: this.getRef("video_Le Livre d'Eli").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_127 heures").insertId,
        genreID: this.getRef("genre_Biopic").insertId,
      },
      {
        videoID: this.getRef("video_Dragons").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_The Social Network").insertId,
        genreID: this.getRef("genre_Biopic").insertId,
      },
      {
        videoID: this.getRef("video_The Fighter").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Le Discours d'un roi").insertId,
        genreID: this.getRef("genre_Historique").insertId,
      },
      {
        videoID: this.getRef("video_Iron Man 2").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Tron l'héritage").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Inception").insertId,
        genreID: this.getRef("genre_Thriller").insertId,
      },
      {
        videoID: this.getRef("video_The Town").insertId,
        genreID: this.getRef("genre_Thriller").insertId,
      },
      {
        videoID: this.getRef("video_South Park").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Batman").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Stargate SG-1").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Le Caméléon").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Pokémon").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Highlander").insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_Beverly Hills").insertId,
        genreID: this.getRef("genre_Romance").insertId,
      },
      {
        videoID: this.getRef("video_Dawson").insertId,
        genreID: this.getRef("genre_Romance").insertId,
      },
      {
        videoID: this.getRef("video_One Piece").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Berserk").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Vampire Diaries").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Gossip Girl").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Breaking Bad").insertId,
        genreID: this.getRef("genre_Thriller").insertId,
      },
      {
        videoID: this.getRef("video_Kaamelott").insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_Game of Thrones").insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_The Walking Dead").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_The Leftovers").insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_Peaky Blinders").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Vikings").insertId,
        genreID: this.getRef("genre_Historique").insertId,
      },
      {
        videoID: this.getRef("video_Chernobyl").insertId,
        genreID: this.getRef("genre_Historique").insertId,
      },
      {
        videoID: this.getRef("video_L'Attaque des Titans").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Mr. Robot").insertId,
        genreID: this.getRef("genre_Thriller").insertId,
      },
      {
        videoID: this.getRef("video_Narcos").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Person of Interest").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Spartacus").insertId,
        genreID: this.getRef("genre_Historique").insertId,
      },
      {
        videoID: this.getRef("video_Frères d'armes").insertId,
        genreID: this.getRef("genre_Guerre").insertId,
      },
      {
        videoID: this.getRef("video_Rome").insertId,
        genreID: this.getRef("genre_Historique").insertId,
      },
      {
        videoID: this.getRef("video_Dr House").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
      {
        videoID: this.getRef("video_Battlestar Galactica").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_24 heures chrono").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Prison Break").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Sons of Anarchy").insertId,
        genreID: this.getRef("genre_Thriller").insertId,
      },
      {
        videoID: this.getRef("video_Firefly").insertId,
        genreID: this.getRef("genre_Science-fiction").insertId,
      },
      {
        videoID: this.getRef("video_Supernatural").insertId,
        genreID: this.getRef("genre_Fantastique").insertId,
      },
      {
        videoID: this.getRef("video_Friday Night Lights").insertId,
        genreID: this.getRef("genre_Sport").insertId,
      },
      {
        videoID: this.getRef("video_Fullmetal Alchemist").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Mad Max: Fury Road").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_The Hunger Games").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Ready Player One").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_La Planète des singes : Les Origines")
          .insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Time Out").insertId,
        genreID: this.getRef("genre_Action").insertId,
      },
      {
        videoID: this.getRef("video_Jujutsu Kaisen").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Hunter x Hunter (2011)").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Sword Art Online").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_One Punch Man").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_JoJo's Bizarre Adventure").insertId,
        genreID: this.getRef("genre_Animation").insertId,
      },
      {
        videoID: this.getRef("video_Trainspotting").insertId,
        genreID: this.getRef("genre_Drame").insertId,
      },
    ];

    videoGenres.forEach((genre) => {
      this.insert(genre);
    });
  }
}

module.exports = VideoGenreSeeder;
