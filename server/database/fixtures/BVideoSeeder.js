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
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/00/02/49/18/affiche.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C3C42036AB9CD409644A1401B83F52AD448CD178535149DBF34C048CBD0760C/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
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
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/22/07/22/15/00/2862661.jpg",
        image_2:
          "http://culturaddict.com/wp-content/uploads/2020/03/retour-evr-sle-futur-1-945x473.jpg",
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
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/14/08/21/14/09/379570.jpg",
        image_2:
          "https://www.france.tv/image/vignette_16x9/800/450/b/e/7/a750cadd-vodvignette16x9cdce630b34e28a1fbfa2cc2dac910866113aeb9d2c2029efe68f109dfec8f7eb.jpg",
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
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/fa559292d365cfde60c232a83063261274d4422496c9b06904790ac42b71c5a3.jpg",
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
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/68/64/41/19254510.jpg",
        image_2: "https://i.ytimg.com/vi/ChcgxBAzrks/maxresdefault.jpg",
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
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/62/90/68/18658418.jpg",
        image_2: "https://i38.servimg.com/u/f38/15/85/23/92/image10.jpg",
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
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/14/08/21/14/11/304073.jpg",
        image_2: "https://i.ytimg.com/vi/DAk853qXxIw/maxresdefault.jpg",
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
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/18/10/26/15/47/5187909.jpg",
        image_2:
          "https://www.francebleu.fr/s3/cruiser-production/2017/02/d5add49a-d907-4009-b377-dda2fbc00c0f/1200x680_cyranoaffichefilm.jpg",
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
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/img/14/28/14285c344d92ed68b26bffc6afbca358.jpg",
        image_2:
          "https://vl-media.fr/wp-content/uploads/2024/06/Le-Fabuleux-destin-dAmelie-Poulain-1140x694.jpg",
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
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/64/74/53/18889951.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/4c79789dbad3249ae53f0cc639e4f10a29b6f9aa4ed702e0bec01af5f17ee48d.jpg",
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
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/210/485/21048559_20131010181109755.jpg",
        image_2:
          "https://www.tableaux-xxl.be/webshop/TAPETE/Papier-peint-Scarface--T_scarfaceplakat_0.jpg",
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
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/65/43/69/19254800.jpg",
        image_2:
          "https://facts.net/wp-content/uploads/2023/06/43-facts-about-the-movie-rain-man-1687347732.jpg",
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
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/56/92/aff.jpg",
        image_2:
          "https://focus.telerama.fr/664x442/60/2024/03/12/0bcd008f1759445485f0154b08293aea.jpg",
        link: "https://www.youtube.com/watch?v=2ilzidi_J8Q&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.8,
        status: "premium",
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
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/20/09/07/15/49/4218638.jpg",
        image_2: "https://i.ytimg.com/vi/sA7_xhdrTAo/maxresdefault.jpg",
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
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/16/27/69218096_af.jpg",
        image_2:
          "https://proxymedia.woopic.com/api/v1/images/331%2FLESEIGNEURDW0200618_BAN1_2424_NEWTV_HD.jpg",
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
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/18/11/13/14/05/2764761.jpg",
        image_2:
          "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/friends-feature-image.jpg",
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
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/15/12/02/17/27/123504.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B88651E95E652B927F5B2C4A81CD4DD83CE10EC4350333862A5D68AB823392BE/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
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
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/19/08/21/09/12/5177711.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09C3A502134141D293D36DC90D2F08C818D03720BDBC6D56960BE3A65477F49F/scale?width=1200&aspectRatio=1.78&format=webp",
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
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/23/01/03/14/33/4278301.jpg",
        image_2:
          "https://images1.resources.foxtel.com.au/store2/mount1/16/2/9b6v7.jpg",
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
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/74/41/16/19779367.jpg",
        image_2:
          "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2Enews.2F2018.2F01.2F12.2Fde23e216-09b5-4025-adaf-aa100c283792.2Ejpeg/900x506/quality/70/comment-se-finit-la-serie-lost.jpg",
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
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/22/01/03/16/19/2443988.jpg",
        image_2:
          "https://assets-prd.ignimgs.com/2023/09/21/caruso-franz-1695308651594.jpg",
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
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/21/04/26/16/05/5824438.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/11E73140636D28CD70FC8E7150E65CA498D8353E20E7B816F9DEF236B39E5275/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
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
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/21/01/05/18/10/0510470.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/bbdb5917be0f05ead90efa0f9958c544516c32db310e4b95170289a9afa4741a.jpg",
        link: "https://www.youtube.com/watch?v=_u6vYpbfCmQ&ab_channel=SoulMediaDenmark",
        rating: 4.9,
        status: "premium",
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
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/19/08/27/10/31/1817615.jpg",
        image_2:
          "https://3.bp.blogspot.com/-GugHVN0olNw/VED2k1BrdhI/AAAAAAAAEQQ/gRhUEvJkw48/s1600/ER%2BUrgencias.jpg",
        link: "https://www.youtube.com/watch?v=q6Qgrb8lP4k&ab_channel=SoulMediaDenmark",
        rating: 4.2,
        status: "premium",
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
