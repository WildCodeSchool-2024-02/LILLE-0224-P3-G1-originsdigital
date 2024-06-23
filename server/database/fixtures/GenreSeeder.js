const AbstractSeeder = require("./AbstractSeeder");

class GenreSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "genre", truncate: true });
  }

  run() {
    const genres = [
      {
        name: "Action",
      },
      {
        name: "Aventure",
      },
      {
        name: "Animation",
      },
      {
        name: "Biopic",
      },
      {
        name: "Comédie",
      },
      {
        name: "Documentaire",
      },
      {
        name: "Drame",
      },
      {
        name: "Famille",
      },
      {
        name: "Fantastique",
      },
      {
        name: "Film Noir",
      },
      {
        name: "Guerre",
      },
      {
        name: "Historique",
      },
      {
        name: "Horreur",
      },
      {
        name: "Musical",
      },
      {
        name: "Mystère",
      },
      {
        name: "Romance",
      },
      {
        name: "Science-fiction",
      },
      {
        name: "Sport",
      },
      {
        name: "Thriller",
      },
      {
        name: "Western",
      },
    ];

    genres.forEach((genre) => {
      const genreWithRefName = {
        ...genre,
        refName: `genre_${genre.name}`,
      };

      this.insert(genreWithRefName);
    });
  }
}

module.exports = GenreSeeder;
