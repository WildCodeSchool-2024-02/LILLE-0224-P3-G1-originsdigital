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
        titre: 'Les Aventuriers de l\'Arche perdue',
        release_date: '1981-09-16',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Steven Spielberg',
        duration: '1h55',
        synopsis: 'Indiana Jones, un archéologue aventurier, part à la recherche de l\'Arche d\'Alliance avant que les nazis ne s\'en emparent.',
        image: 'https://images.allocine.fr/medias/nmedia/18/36/01/18/20048688.jpg',
        link: 'https://www.youtube.com/watch?v=vbE_xOb4HhI',
        rating: 4.7,
        status: 'free'
      },
      {
        titre: 'Retour vers le futur',
        release_date: '1985-10-30',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Robert Zemeckis',
        duration: '1h56',
        synopsis: 'Marty McFly, un adolescent des années 80, est accidentellement envoyé en 1955 dans une machine à voyager dans le temps inventée par le Dr Emmett Brown.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/99/25/18770157.jpg',
        link: 'https://www.youtube.com/watch?v=qvsgGtivCgs',
        rating: 4.8,
        status: 'free'
      },
      {
        titre: 'Le Grand Bleu',
        release_date: '1988-05-11',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Luc Besson',
        duration: '2h48',
        synopsis: 'Jacques Mayol et Enzo Molinari, amis d\'enfance, deviennent rivaux dans des compétitions de plongée en apnée.',
        image: 'https://images.allocine.fr/medias/nmedia/18/36/08/70/18875092.jpg',
        link: 'https://www.youtube.com/watch?v=Aj4xtPRejto',
        rating: 4.5,
        status: 'free'
      },
      {
        titre: 'La Ligne verte',
        release_date: '2000-03-01',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Frank Darabont',
        duration: '3h09',
        synopsis: 'Paul Edgecomb, gardien-chef dans un pénitencier, rencontre John Coffey, un colosse accusé de meurtre mais doté d\'un don mystérieux.',
        image: 'https://images.allocine.fr/medias/nmedia/00/02/24/58/69119562_af.jpg',
        link: 'https://www.youtube.com/watch?v=uDybmxbKf4Y',
        rating: 4.8,
        status: 'free'
      },
      {
        titre: 'Gladiator',
        release_date: '2000-06-20',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Ridley Scott',
        duration: '2h35',
        synopsis: 'Maximus, général romain trahi et réduit en esclavage, devient gladiateur et cherche à se venger de l\'empereur Commodus.',
        image: 'https://images.allocine.fr/medias/nmedia/00/02/53/45/affiche2.jpg',
        link: 'https://www.youtube.com/watch?v=owK1qxDselE',
        rating: 4.7,
        status: 'free'
      },
      {
        titre: 'La Boum',
        release_date: '1980-12-17',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Claude Pinoteau',
        duration: '1h50',
        synopsis: 'Vic, une adolescente de 13 ans, fait face aux hauts et aux bas de la vie à l\'école, en famille et dans ses relations amoureuses.',
        image: 'https://images.allocine.fr/medias/nmedia/00/02/48/82/la_boum.jpg',
        link: 'https://www.youtube.com/watch?v=5u7m2A6YOc4',
        rating: 4.4,
        status: 'free'
      },
      {
        titre: 'Nikita',
        release_date: '1990-02-21',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Luc Besson',
        duration: '1h58',
        synopsis: 'Une jeune femme criminelle est recrutée par une agence gouvernementale secrète pour devenir une assassin de premier ordre.',
        image: 'https://images.allocine.fr/medias/nmedia/00/02/48/84/nikita.jpg',
        link: 'https://www.youtube.com/watch?v=iw-BxY5xtb4',
        rating: 4.6,
        status: 'free'
      },
      {
        titre: 'Cyrano de Bergerac',
        release_date: '1990-03-28',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Jean-Paul Rappeneau',
        duration: '2h18',
        synopsis: 'L\'histoire du poète et soldat Cyrano de Bergerac, qui aide un jeune homme timide à courtiser la femme qu\'il aime en secret.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/99/17/19904644.jpg',
        link: 'https://www.youtube.com/watch?v=hbT1F9KvPf8',
        rating: 4.7,
        status: 'free'
      },
      {
        titre: 'Le Fabuleux Destin d\'Amélie Poulain',
        release_date: '2001-04-25',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Jean-Pierre Jeunet',
        duration: '2h02',
        synopsis: 'Amélie, une jeune serveuse dans un café de Montmartre, décide de changer la vie de ceux qui l\'entourent pour le mieux.',
        image: 'https://images.allocine.fr/medias/nmedia/00/02/24/55/69120973_af.jpg',
        link: 'https://www.youtube.com/watch?v=HUECWi5pX7o',
        rating: 4.7,
        status: 'free'
      },
      {
        titre: 'Bienvenue chez les Ch\'tis',
        release_date: '2008-02-20',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Dany Boon',
        duration: '1h46',
        synopsis: 'Un directeur de poste du sud de la France est muté contre son gré dans le nord, où il découvre les mœurs locales avec humour et tendresse.',
        image: 'https://images.allocine.fr/medias/nmedia/18/64/65/98/18944583.jpg',
        link: 'https://www.youtube.com/watch?v=l5YqJpk2c-E',
        rating: 4.6,
        status: 'free'
      },
      {
        titre: 'Scarface',
        release_date: '1983-12-09',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Brian De Palma',
        duration: '2h50',
        synopsis: 'En 1980 à Miami, un immigrant cubain déterminé prend le contrôle d\'un cartel de drogue et succombe à la cupidité.',
        image: 'https://images.allocine.fr/medias/nmedia/00/02/55/52/scarface.jpg',
        link: 'https://www.youtube.com/watch?v=7pQQHnqBa2E',
        rating: 4.8,
        status: 'free'
      },
      {
        titre: 'Rain Man',
        release_date: '1988-12-16',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Barry Levinson',
        duration: '2h13',
        synopsis: 'Un jeune homme égoïste découvre que son père décédé a laissé sa fortune à un frère autiste qu\'il ne connaissait pas et entreprend un voyage à travers le pays avec lui.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/19/92/19878474.jpg',
        link: 'https://www.youtube.com/watch?v=KKC3W0awjm0',
        rating: 4.7,
        status: 'free'
      },
      {
        titre: 'Les Affranchis',
        release_date: '1990-09-19',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Martin Scorsese',
        duration: '2h26',
        synopsis: 'L\'histoire d\'Henry Hill et de sa vie dans la mafia, couvrant sa relation avec sa femme Karen et ses partenaires du crime Jimmy Conway et Tommy DeVito.',
        image: 'https://images.allocine.fr/medias/nmedia/18/36/00/95/19884323.jpg',
        link: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y',
        rating: 4.8,
        status: 'free'
      },
      {
        titre: 'Le Silence des Agneaux',
        release_date: '1991-02-14',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Jonathan Demme',
        duration: '1h58',
        synopsis: 'Une jeune recrue du FBI doit demander l\'aide d\'un détenu psychiatre cannibale pour attraper un autre tueur en série.',
        image: 'https://images.allocine.fr/medias/nmedia/18/36/12/34/19872254.jpg',
        link: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o',
        rating: 4.8,
        status: 'free'
      },
      {
        titre: 'Le Seigneur des Anneaux : La Communauté de l\'Anneau',
        release_date: '2001-12-19',
        post_date: '2024-06-15',
        typeID: 'Film',
        director: 'Peter Jackson',
        duration: '2h58',
        synopsis: 'Un jeune hobbit nommé Frodon doit détruire un anneau maléfique dans les feux de la Montagne du Destin, accompagné d\'une communauté de héros.',
        image: 'https://images.allocine.fr/medias/nmedia/00/02/52/70/affiche2.jpg',
        link: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
        rating: 4.9,
        status: 'free'
      },
      {
        titre: 'Friends',
        release_date: '1994-09-22',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'David Crane, Marta Kauffman',
        duration: '22 min',
        synopsis: 'Suivez les péripéties de six amis dans la ville de New York, alors qu\'ils font face aux aléas de la vie et de l\'amour.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/75/74/19259354.jpg',
        link: 'https://www.youtube.com/watch?v=hDNNmeeJs1Q',
        rating: 4.9,
        status: 'free'
      },
      {
        titre: 'The X-Files',
        release_date: '1993-09-10',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'Chris Carter',
        duration: '45 min',
        synopsis: 'Les agents du FBI, Fox Mulder et Dana Scully, enquêtent sur des affaires non résolues impliquant des phénomènes paranormaux.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/75/40/19559964.jpg',
        link: 'https://www.youtube.com/watch?v=rbBX6aEzEz8',
        rating: 4.8,
        status: 'free'
      },
      {
        titre: 'Buffy the Vampire Slayer',
        release_date: '1997-03-10',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'Joss Whedon',
        duration: '42 min',
        synopsis: 'Buffy Summers, une adolescente, est la dernière d\'une lignée de chasseuses de vampires. Elle doit protéger le monde des forces du mal.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/76/03/19259352.jpg',
        link: 'https://www.youtube.com/watch?v=WR3J-v7QXXw',
        rating: 4.7,
        status: 'free'
      },
      {
        titre: 'The Sopranos',
        release_date: '1999-01-10',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'David Chase',
        duration: '55 min',
        synopsis: 'Tony Soprano, un parrain de la mafia du New Jersey, tente de jongler entre les exigences de sa famille et celles de son organisation criminelle.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/75/81/19259355.jpg',
        link: 'https://www.youtube.com/watch?v=wrNwE3KlAWU',
        rating: 4.9,
        status: 'free'
      },
      {
        titre: 'Lost',
        release_date: '2004-09-22',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'J.J. Abrams, Damon Lindelof',
        duration: '42 min',
        synopsis: 'Les survivants du crash du vol Oceanic 815 sont coincés sur une île mystérieuse, où ils doivent faire face à des événements inexplicables et des secrets enfouis.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/75/80/19259356.jpg',
        link: 'https://www.youtube.com/watch?v=hU0QZQRTNr0',
        rating: 4.8,
        status: 'free'
      },
      {
        titre: 'NYPD Blue',
        release_date: '1993-09-21',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'Steven Bochco, David Milch',
        duration: '45 min',
        synopsis: 'Les détectives du 15e arrondissement de la NYPD enquêtent sur des homicides dans leur district.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/75/40/19559964.jpg',
        link: 'https://www.youtube.com/watch?v=bPiSZXt5kJ4',
        rating: 3.7,
        status: 'free'
      },
      {
        titre: 'Angel',
        release_date: '1999-10-05',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'Joss Whedon, David Greenwalt',
        duration: '42 min',
        synopsis: 'Le vampire Angel cherche à se racheter pour ses crimes passés en aidant ceux qui en ont besoin à Los Angeles.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/76/03/19259352.jpg',
        link: 'https://www.youtube.com/watch?v=ZYYkPppfsS4',
        rating: 3.9,
        status: 'free'
      },
      {
        titre: 'The Fresh Prince of Bel-Air',
        release_date: '1990-09-10',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'Andy Borowitz, Susan Borowitz',
        duration: '23 min',
        synopsis: 'Un adolescent de Philadelphie est envoyé vivre chez ses riches parents à Bel-Air, où il découvre un nouveau mode de vie.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/75/74/19259354.jpg',
        link: 'https://www.youtube.com/watch?v=1nCqRmx3Dnw',
        rating: 4.9,
        status: 'free'
      },
      {
        titre: 'ER',
        release_date: '1994-09-19',
        post_date: '2024-06-15',
        typeID: 'Série',
        director: 'Michael Crichton',
        duration: '44 min',
        synopsis: 'Le quotidien des médecins et des infirmières d\'un service d\'urgence à Chicago.',
        image: 'https://images.allocine.fr/medias/nmedia/18/35/75/55/19259357.jpg',
        link: 'https://www.youtube.com/watch?v=A_g8M4wMGow',
        rating: 4.2,
        status: 'free'
      },
      
      // Ajoutez d'autres films de manière similaire
    ];

    // Iterate over the array and insert each video into the 'video' table
    videos.forEach((video) => {
      this.insert(video); // Insert into video table
    });
  }
}

// Export the VideoSeeder class
module.exports = VideoSeeder;
