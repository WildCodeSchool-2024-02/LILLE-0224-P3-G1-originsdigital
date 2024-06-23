const AbstractSeeder = require("./AbstractSeeder");

class VideoSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "video", truncate: true });
  }

  // The run method - Populate the 'video' table with data
  run() {
    // Array of video data to be inserted
    const videos = [
      {
        titre: "Les Aventuriers de l'Arche perdue",
        release_date: "1981-09-16",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Steven Spielberg",
        duration: "1h55",
        synopsis:
          "Indiana Jones, un archéologue aventurier, part à la recherche de l'Arche d'Alliance avant que les nazis ne s'en emparent.",
        image:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/00/02/49/18/affiche.jpg",
        link: "https://www.youtube.com/watch?v=JdKKkWHx8pQ&ab_channel=ParamountPicturesFranceVid%C3%A9o%C3%A0laDemande",
        rating: 4.7,
        status: "free",
      },
      {
        titre: "Retour vers le futur",
        release_date: "1985-10-30",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Robert Zemeckis",
        duration: "1h56",
        synopsis:
          "Marty McFly, un adolescent des années 80, est accidentellement envoyé en 1955 dans une machine à voyager dans le temps inventée par le Dr Emmett Brown.",
        image:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/22/07/22/15/00/2862661.jpg",
        link: "https://www.youtube.com/watch?v=saCXL-Xfbwk&ab_channel=ilovewaterslides",
        rating: 4.8,
        status: "free",
      },
      {
        titre: "Le Grand Bleu",
        release_date: "1988-05-11",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Luc Besson",
        duration: "2h48",
        synopsis:
          "Jacques Mayol et Enzo Molinari, amis d'enfance, deviennent rivaux dans des compétitions de plongée en apnée.",
        image:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/14/08/21/14/09/379570.jpg",
        link: "https://www.youtube.com/watch?v=WNkIjVyf3UQ&ab_channel=MadmanFilms",
        rating: 4.5,
        status: "free",
      },
      {
        titre: "La Ligne verte",
        release_date: "2000-03-01",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Frank Darabont",
        duration: "3h09",
        synopsis:
          "Paul Edgecomb, gardien-chef dans un pénitencier, rencontre John Coffey, un colosse accusé de meurtre mais doté d'un don mystérieux.",
        image:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg",
        link: "https://www.youtube.com/watch?v=8mazN6qDxPk&ab_channel=Bandes-annonces%7CVF%26VOSTF4KHDHQ",
        rating: 4.8,
        status: "free",
      },
      {
        titre: "Gladiator",
        release_date: "2000-06-20",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Ridley Scott",
        duration: "2h35",
        synopsis:
          "Maximus, général romain trahi et réduit en esclavage, devient gladiateur et cherche à se venger de l'empereur Commodus.",
        image:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/68/64/41/19254510.jpg",
        link: "https://www.youtube.com/watch?v=P5ieIbInFpg&ab_channel=ParamountMovies",
        rating: 4.7,
        status: "free",
      },
      {
        titre: "La Boum",
        release_date: "1980-12-17",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Claude Pinoteau",
        duration: "1h50",
        synopsis:
          "Vic, une adolescente de 13 ans, fait face aux hauts et aux bas de la vie à l'école, en famille et dans ses relations amoureuses.",
        image:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/62/90/68/18658418.jpg",
        link: "https://www.youtube.com/watch?v=9r6ZgxgvUQ4&ab_channel=Gaumont",
        rating: 4.4,
        status: "free",
      },
      {
        titre: "Nikita",
        release_date: "1990-02-21",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Luc Besson",
        duration: "1h58",
        synopsis:
          "Une jeune femme criminelle est recrutée par une agence gouvernementale secrète pour devenir une assassin de premier ordre.",
        image:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/14/08/21/14/11/304073.jpg",
        link: "https://www.youtube.com/watch?v=JRfo_bNco6M&ab_channel=MadmanFilms",
        rating: 4.6,
        status: "free",
      },
      {
        titre: "Cyrano de Bergerac",
        release_date: "1990-03-28",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Jean-Paul Rappeneau",
        duration: "2h18",
        synopsis:
          "L'histoire du poète et soldat Cyrano de Bergerac, qui aide un jeune homme timide à courtiser la femme qu'il aime en secret.",
        image:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/18/10/26/15/47/5187909.jpg",
        link: "hhttps://www.youtube.com/watch?v=fJyaXzAmYPs&ab_channel=BritishSecretAgent007",
        rating: 4.7,
        status: "free",
      },
      {
        titre: "Le Fabuleux Destin d'Amélie Poulain",
        release_date: "2001-04-25",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Jean-Pierre Jeunet",
        duration: "2h02",
        synopsis:
          "Amélie, une jeune serveuse dans un café de Montmartre, décide de changer la vie de ceux qui l'entourent pour le mieux.",
        image:
          "https://fr.web.img6.acsta.net/c_310_420/img/14/28/14285c344d92ed68b26bffc6afbca358.jpg",
        link: "https://www.youtube.com/watch?v=HUECWi5pX7o&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.7,
        status: "free",
      },
      {
        titre: "Bienvenue chez les Ch'tis",
        release_date: "2008-02-20",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Dany Boon",
        duration: "1h46",
        synopsis:
          "Un directeur de poste du sud de la France est muté contre son gré dans le nord, où il découvre les mœurs locales avec humour et tendresse.",
        image:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/64/74/53/18889951.jpg",
        link: "https://www.youtube.com/watch?v=OycTfchnopU&ab_channel=FilmsExclu",
        rating: 4.6,
        status: "free",
      },
      {
        titre: "Scarface",
        release_date: "1983-12-09",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Brian De Palma",
        duration: "2h50",
        synopsis:
          "En 1980 à Miami, un immigrant cubain déterminé prend le contrôle d'un cartel de drogue et succombe à la cupidité.",
        image:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/210/485/21048559_20131010181109755.jpg",
        link: "https://www.youtube.com/watch?v=7pQQHnqBa2E&ab_channel=FaceOff",
        rating: 4.8,
        status: "free",
      },
      {
        titre: "Rain Man",
        release_date: "1988-12-16",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Barry Levinson",
        duration: "2h13",
        synopsis:
          "Un jeune homme égoïste découvre que son père décédé a laissé sa fortune à un frère autiste qu'il ne connaissait pas et entreprend un voyage à travers le pays avec lui.",
        image:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/65/43/69/19254800.jpg",
        link: "https://www.youtube.com/watch?v=dBSstaTiq14&ab_channel=TrailersVOST",
        rating: 4.7,
        status: "free",
      },
      {
        titre: "Les Affranchis",
        release_date: "1990-09-19",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Martin Scorsese",
        duration: "2h26",
        synopsis:
          "L'histoire d'Henry Hill et de sa vie dans la mafia, couvrant sa relation avec sa femme Karen et ses partenaires du crime Jimmy Conway et Tommy DeVito.",
        image:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/56/92/aff.jpg",
        link: "https://www.youtube.com/watch?v=2ilzidi_J8Q&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.8,
        status: "free",
      },
      {
        titre: "Le Silence des Agneaux",
        release_date: "1991-02-14",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Jonathan Demme",
        duration: "1h58",
        synopsis:
          "Une jeune recrue du FBI doit demander l'aide d'un détenu psychiatre cannibale pour attraper un autre tueur en série.",
        image:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/20/09/07/15/49/4218638.jpg",
        link: "https://www.youtube.com/watch?v=6iB21hsprAQ&ab_channel=AmazonMGMStudios",
        rating: 4.8,
        status: "free",
      },
      {
        titre: "Le Seigneur des Anneaux : La Communauté de l'Anneau",
        release_date: "2001-12-19",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Peter Jackson",
        duration: "2h58",
        synopsis:
          "Un jeune hobbit nommé Frodon doit détruire un anneau maléfique dans les feux de la Montagne du Destin, accompagné d'une communauté de héros.",
        image:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/16/27/69218096_af.jpg",
        link: "https://www.youtube.com/watch?v=vvx7m22GGtA&t=1s&ab_channel=BandesAnnoncesActuetR%C3%A9tro",
        rating: 4.9,
        status: "free",
      },
      {
        titre: "Friends",
        release_date: "1994-09-22",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "David Crane, Marta Kauffman",
        duration: "22 min",
        synopsis:
          "Suivez les péripéties de six amis dans la ville de New York, alors qu'ils font face aux aléas de la vie et de l'amour.",
        image:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/18/11/13/14/05/2764761.jpg",
        link: "https://www.youtube.com/watch?v=IEEbUzffzrk&ab_channel=WS",
        rating: 4.9,
        status: "free",
      },
      {
        titre: "The X-Files",
        release_date: "1993-09-10",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Chris Carter",
        duration: "45 min",
        synopsis:
          "Les agents du FBI, Fox Mulder et Dana Scully, enquêtent sur des affaires non résolues impliquant des phénomènes paranormaux.",
        image:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/15/12/02/17/27/123504.jpg",
        link: "https://www.youtube.com/watch?v=KKziOmsJxzE&t=1s&ab_channel=TVPromos",
        rating: 4.8,
        status: "free",
      },
      {
        titre: "Buffy the Vampire Slayer",
        release_date: "1997-03-10",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Joss Whedon",
        duration: "42 min",
        synopsis:
          "Buffy Summers, une adolescente, est la dernière d'une lignée de chasseuses de vampires. Elle doit protéger le monde des forces du mal.",
        image:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/19/08/21/09/12/5177711.jpg",
        link: "https://www.youtube.com/watch?v=0a5olD2kjpU&ab_channel=GB",
        rating: 4.7,
        status: "free",
      },
      {
        titre: "The Sopranos",
        release_date: "1999-01-10",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "David Chase",
        duration: "55 min",
        synopsis:
          "Tony Soprano, un parrain de la mafia du New Jersey, tente de jongler entre les exigences de sa famille et celles de son organisation criminelle.",
        image:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/23/01/03/14/33/4278301.jpg",
        link: "https://www.youtube.com/watch?v=Q8cBFvpqmH0&ab_channel=ClarkTrailer",
        rating: 4.9,
        status: "free",
      },
      {
        titre: "Lost",
        release_date: "2004-09-22",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "J.J. Abrams, Damon Lindelof",
        duration: "42 min",
        synopsis:
          "Les survivants du crash du vol Oceanic 815 sont coincés sur une île mystérieuse, où ils doivent faire face à des événements inexplicables et des secrets enfouis.",
        image:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/74/41/16/19779367.jpg",
        link: "https://www.youtube.com/watch?v=KTu8iDynwNc&t=67s&ab_channel=TrailerBlend",
        rating: 4.8,
        status: "free",
      },
      {
        titre: "NYPD Blue",
        release_date: "1993-09-21",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Steven Bochco, David Milch",
        duration: "45 min",
        synopsis:
          "Les détectives du 15e arrondissement de la NYPD enquêtent sur des homicides dans leur district.",
        image:
          "https://images.allocine.fr/medias/nmedia/18/35/75/40/19559964.jpg",
        link: "https://www.youtube.com/watch?v=3aHL5ZP5qsw&ab_channel=WhatIFindOnVHS",
        rating: 3.7,
        status: "free",
      },
      {
        titre: "Angel",
        release_date: "1999-10-05",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Joss Whedon, David Greenwalt",
        duration: "42 min",
        synopsis:
          "Le vampire Angel cherche à se racheter pour ses crimes passés en aidant ceux qui en ont besoin à Los Angeles.",
        image:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/21/04/26/16/05/5824438.jpg",
        link: "https://www.youtube.com/watch?v=rwgxne3tzZw&ab_channel=BuffyverseTrailers",
        rating: 3.9,
        status: "free",
      },
      {
        titre: "The Fresh Prince of Bel-Air",
        release_date: "1990-09-10",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Andy Borowitz, Susan Borowitz",
        duration: "23 min",
        synopsis:
          "Un adolescent de Philadelphie est envoyé vivre chez ses riches parents à Bel-Air, où il découvre un nouveau mode de vie.",
        image:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/21/01/05/18/10/0510470.jpg",
        link: "https://www.youtube.com/watch?v=_u6vYpbfCmQ&ab_channel=SoulMediaDenmark",
        rating: 4.9,
        status: "free",
      },
      {
        titre: "ER",
        release_date: "1994-09-19",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Michael Crichton",
        duration: "44 min",
        synopsis:
          "Le quotidien des médecins et des infirmières d'un service d'urgence à Chicago.",
        image:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/19/08/27/10/31/1817615.jpg",
        link: "https://www.youtube.com/watch?v=q6Qgrb8lP4k&ab_channel=SoulMediaDenmark",
        rating: 4.2,
        status: "free",
      },
    ];

    videos.forEach((video) => {
      const videoWithRefName = {
        ...video,
        refName: `video_${video.titre}`,
      };

      this.insert(videoWithRefName);
    });
  }
}

// Export the VideoSeeder class
module.exports = VideoSeeder;
