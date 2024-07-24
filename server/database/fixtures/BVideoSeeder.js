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

      {
        titre: "Terminator 2 : le Jugement Dernier",
        release_date: "1991-10-16",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "James Cameron",
        duration: "2h17",
        synopsis:
          "En 2029, les survivants de l'apocalypse provoquée par les machines combattent ces dernières. Leur chef, John Connor, envoie dans le passé un Terminator pour protéger sa mère, Sarah Connor.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/22/09/27/12/58/1710433.jpg",
        image_2: "https://i.ytimg.com/vi/MgvVWCVp8MY/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=MgvVWCVp8MY&t=11s&ab_channel=RetroMovieTrailers",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "Le Cinquième élément",
        release_date: "1997-05-07",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Luc Besson",
        duration: "2h06",
        synopsis:
          "Au XXIIIe siècle, dans un univers étrange et coloré, où tout espoir de survie est impossible sans la découverte du cinquième élément, un héros affronte le mal pour sauver l'humanité.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/14/08/21/14/17/385506.jpg",
        image_2:
          "https://bourgogne-franche-comte.frmjc.org/wp-content/uploads/2021/06/cinquieme-element.jpg",
        link: "https://www.youtube.com/watch?v=ZqP2ofIIMRc&ab_channel=FilmsExclu",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "Jurassic Park",
        release_date: "1993-10-20",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Steven Spielberg",
        duration: "2h02",
        synopsis:
          "Le milliardaire John Hammond réussit à cloner des dinosaures à partir d'ADN récupéré dans un moustique fossilisé. Il crée un parc à thème unique mais, suite à un acte de sabotage, les créatures préhistoriques s'échappent, menaçant les visiteurs.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/20/07/21/16/53/1319265.jpg",
        image_2:
          "https://static.posters.cz/image/750/affiches-et-posters/jurassic-park-classic-logo-i57759.jpg",
        link: "https://www.youtube.com/watch?v=QWBKEmWWL38&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Le Roi Lion",
        release_date: "1994-11-23",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Roger Allers, Rob Minkoff",
        duration: "1h29",
        synopsis:
          "Sur les Hautes terres d’Afrique, le roi Mufasa règne avec sagesse. Son jeune fils Simba, destiné à lui succéder, doit faire face à de nombreuses épreuves, notamment l’ambition de son oncle Scar.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/22/09/20/12/10/2512840.jpg",
        image_2:
          "https://img36.tokyvideo.com/videos/373/373461/previews/previews_0006_custom_1698077130.363.jpg",
        link: "https://www.youtube.com/watch?v=lFzVJEksoDY&ab_channel=DisneyPlus",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "La Liste de Schindler",
        release_date: "1994-03-02",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Steven Spielberg",
        duration: "3h15",
        synopsis:
          "Evocation des années de guerre d'Oskar Schindler, industriel autrichien ayant sauvé des centaines de Juifs en les employant dans sa fabrique pendant la Seconde Guerre mondiale.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/19/03/14/10/37/5927961.jpg",
        image_2:
          "https://ds.static.rtbf.be/article/image/1920x1080/9/1/b/b0df46967b8ef41b029914b28affcbd6-1549961359.jpg",
        link: "https://www.youtube.com/watch?v=mxphAlJID9U&t=1s&ab_channel=UniversalPictures",
        rating: 4.6,
        status: "premium",
      },
      {
        titre: "Fight Club",
        release_date: "1999-11-10",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "David Fincher",
        duration: "2h19",
        synopsis:
          "Le narrateur, sans identité précise, rejoint un club clandestin dirigé par Tyler Durden où il redécouvre sa virilité et la communication à travers la violence.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/19/04/08/14/11/0688770.jpg",
        image_2:
          "https://www.lemagducine.fr/wp-content/uploads/2016/07/retro-fincher-fight-club-poster-cineserie.jpg",
        link: "https://www.youtube.com/watch?v=BdJKm16Co6M&ab_channel=20thCenturyStudios",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "La Ligne rouge",
        release_date: "1999-02-24",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Terrence Malick",
        duration: "2h50",
        synopsis:
          "Pendant la Guerre du Pacifique, l'armée américaine veut reprendre l'île de Guadalcanal aux Japonais. Un déserteur installé dans un village mélanésien doit réintégrer sa Compagnie, faisant face à un feu nourri lors de la bataille.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/16/08/02/14/43/484136.jpg",
        image_2:
          "https://proxymedia.woopic.com/api/v1/images/331%2FLALIGNEROUGW0022281_BAN1_2424_NEWTV_HD.jpg",
        link: "https://www.youtube.com/watch?v=y4ChQPbqlKw&ab_channel=RK",
        rating: 4.1,
        status: "premium",
      },
      {
        titre: "Braveheart",
        release_date: "1995-10-04",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Mel Gibson",
        duration: "2h45",
        synopsis:
          "À la fin du XIIIe siècle, William Wallace, après l'assassinat de sa femme par les Anglais, prend la tête d'une rébellion écossaise contre la domination anglaise pour la liberté de son pays. Mel Gibson joue le rôle principal et réalise ce film épique.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/73/51/89/19209164.jpg",
        image_2:
          "https://www.guide-irlande.com/wp-content/uploads/2022/09/braveheart-800x500.jpg",
        link: "https://www.youtube.com/watch?v=1NJO0jxBtMo&t=60s&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "Titanic",
        release_date: "1998-01-07",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "James Cameron",
        duration: "3h14",
        synopsis:
          "Southampton, 10 avril 1912. Le Titanic, le plus grand paquebot du monde, heurte un iceberg lors de son voyage inaugural. À bord, Jack et Rose tombent amoureux malgré les obstacles.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/10/16/06/0622119.jpg",
        image_2: "https://i.ebayimg.com/images/g/I6EAAOxyuCJRdKWo/s-l1200.webp",
        link: "https://www.youtube.com/watch?v=kVrqfYjkTdQ&t=44s&ab_channel=RottenTomatoesTrailers",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Matrix",
        release_date: "1999-06-23",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Lana Wachowski, Lilly Wachowski",
        duration: "2h15",
        synopsis:
          "Programmeur anonyme, Thomas Anderson devient Neo la nuit. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. Morpheus, convaincu que Neo est l'Élu, le guide dans une lutte contre la Matrice et ses agents.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/medias/04/34/49/043449_af.jpg",
        image_2: "https://static.posters.cz/image/hp/69061.jpg",
        link: "https://www.youtube.com/watch?v=vKQi3bBA1y8&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.4,
        status: "premium",
      },
      {
        titre: "Matrix Reloaded",
        release_date: "2003-05-16",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Lilly Wachowski, Lana Wachowski",
        duration: "2h18",
        synopsis:
          "Neo apprend à mieux contrôler ses dons naturels alors que Sion est sur le point de tomber sous l'assaut de l'Armée des Machines. Tous les espoirs reposent sur Neo, qui doit arrêter la guerre contre les Machines.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/53/34/affiche.jpg",
        image_2:
          "https://fallout-generation.com/stockage/cms/enregistrement/monthly_2020_11/829904973_MatrixReloaded-Imagedecouverture.jpg.3939297ff5b61a050db671cd976a9a97.jpg",
        link: "https://www.youtube.com/watch?v=kYzz0FSgpSU&ab_channel=RottenTomatoesClassicTrailers",
        rating: 3.7,
        status: "premium",
      },
      {
        titre: "Seven",
        release_date: "1996-01-31",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "David Fincher",
        duration: "2h10",
        synopsis:
          "Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a décidé de nettoyer la société des maux qui la rongent en commettant sept meurtres basés sur les sept péchés capitaux.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/91/33/19255605.jpg",
        image_2:
          "https://proxymedia.woopic.com/api/v1/images/331%2FSEVENXXXXXXW0201235_BAN1_2424_NEWTV_HD.jpg",
        link: "https://www.youtube.com/watch?v=znmZoVkCjpI&t=56s&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "The Dark Knight, Le Chevalier Noir",
        release_date: "2008-08-13",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Christopher Nolan",
        duration: "2h32",
        synopsis:
          "Batman, aidé par le lieutenant de police Jim Gordon et le procureur Harvey Dent, vise à éradiquer le crime organisé à Gotham City. Leur alliance est perturbée par le chaos déclenché par le Joker, un criminel redoutable.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/97/89/18949761.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/e87662a352309fdd7fe2056640476475ef321a77a4791ba340e9b2e441a2a500.jpg",
        link: "https://www.youtube.com/watch?v=EXeTwQWrcwY&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "Kill Bill: Volume 1",
        release_date: "2003-11-26",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Quentin Tarantino",
        duration: "1h52",
        synopsis:
          "Au cours d'une cérémonie de mariage en plein désert, un commando fait irruption dans la chapelle et tire sur les convives. Laissée pour morte, la Mariée enceinte retrouve ses esprits après un coma de quatre ans et cherche à se venger des membres du Détachement International des Vipères Assassines, dont leur chef Bill.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/13/44/18364816.jpg",
        image_2:
          "https://www.youtube.com/watch?v=7kSuas6mRpk&ab_channel=RottenTomatoesClassicTrailers",
        link: "https://www.youtube.com/watch?v=lwSysg9o7wE",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "WALL·E",
        release_date: "2008-07-30",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Andrew Stanton",
        duration: "1h37",
        synopsis:
          "WALL·E, un petit robot chargé de nettoyer la Terre abandonnée, développe une personnalité unique. Sa routine est bouleversée par l'arrivée d'une 'robote' nommée EVE. Tombant amoureux, WALL·E la suit dans l'espace pour vivre une aventure extraordinaire.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/93/01/18948378.jpg",
        image_2: "https://i.ytimg.com/vi/tumvppsv2zY/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=CZ1CATNbXg0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.4,
        status: "premium",
      },
      {
        titre: "Avatar",
        release_date: "2009-12-16",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "James Cameron",
        duration: "2h42",
        synopsis:
          "Sur la lointaine planète de Pandora, Jake Sully, un ancien marine paraplégique, est recruté pour participer au programme Avatar. Il découvre un monde extraordinaire et dangereux, et se retrouve pris dans un conflit entre les humains et les Na'vi, les habitants de Pandora.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/22/08/25/09/04/2146702.jpg",
        image_2:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmUn-Xi5dHlIWcd8hRBH5e_VtJWS8oQe-Puo90KVau2beAgxD7WE_R66ci3WN26MqKB82S_HVANytFVqlh8VdRHzI6s30k20xLTrWowbopWaGbcyQ3XOdD6mMf-h4t_ahuyfWoiCxmlPk/s1600/avatar-poster-wallpaper-3.jpg",
        link: "https://www.youtube.com/watch?v=5PSNL1qE6VY&ab_channel=20thCenturyStudios",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Le Voyage de Chihiro",
        release_date: "2002-04-10",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Hayao Miyazaki",
        duration: "2h05",
        synopsis:
          "Chihiro, une fillette de 10 ans, se retrouve seule dans un univers fantasmagorique après que ses parents aient été transformés en porcs. Aidée par Haku, elle doit trouver un moyen de briser le sortilège et de sauver ses parents.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/36/71/chihiro.jpg",
        image_2:
          "https://www.courte-focale.fr/wp-content/uploads/2011/10/Le-voyage-de-Chihiro1.jpg",
        link: "https://www.youtube.com/watch?v=5n56a9qZLf8&ab_channel=Cin%C3%A9Clip-TrailerFR",
        rating: 4.4,
        status: "premium",
      },
      {
        titre: "Gran Torino",
        release_date: "2009-02-25",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Clint Eastwood",
        duration: "1h56",
        synopsis:
          "Walt Kowalski, un vétéran de la guerre de Corée, se retrouve confronté à ses préjugés racistes lorsque son jeune voisin tente de voler sa précieuse voiture Gran Torino. Une amitié inattendue se développe alors entre eux, bouleversant les convictions de Walt.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/67/90/93/19057560.jpg",
        image_2:
          "https://tel.img.pmdstatic.net/pad/~2~backoffice~program~2a595a27013018f6.jpg/900x600/quality/80/gran-torino.jpg",
        link: "https://www.youtube.com/watch?v=RMhbr2XQblk&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "Harry Potter à l'école des sorciers",
        release_date: "2001-12-05",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Chris Columbus",
        duration: "2h32",
        synopsis:
          "Orphelin, Harry Potter découvre qu'il est le fils de deux puissants magiciens et qu'il possède des pouvoirs extraordinaires. Invité à intégrer Poudlard, la prestigieuse école de sorcellerie, il trouve enfin un foyer et une famille, et s'engage dans l'aventure de sa vie.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/18/07/02/17/25/3643090.jpg",
        image_2:
          "https://www.france.tv/image/vignette_16x9/2500/1406/4/e/b/d67c808e-vodvignette16x9f5bdc51d6a24c35a8d23e134ad979614c60510724f2a7f8e27a79a0cea8f2be4.jpg",
        link: "https://www.youtube.com/watch?v=VyHV0BRtdxo&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.1,
        status: "premium",
      },
      {
        titre: "Inglourious Basterds",
        release_date: "2009-08-19",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Quentin Tarantino",
        duration: "2h33",
        synopsis:
          "Dans la France occupée de 1940, Shosanna Dreyfus assiste à l'exécution de sa famille par le colonel nazi Hans Landa. Elle s'échappe à Paris et prend une nouvelle identité. Pendant ce temps, le lieutenant Aldo Raine forme un groupe de soldats juifs pour des missions punitives contre les nazis. Leurs destins se croisent lors d'une tentative d'assassinat des hauts dignitaires nazis dans un cinéma où Shosanna prépare sa vengeance.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/70/45/22/19123474.jpg",
        image_2:
          "https://www.cineteleandco.fr/wp-content/uploads/2022/11/vignette-min-2.jpg",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "L'Étrange Histoire de Benjamin Button",
        release_date: "2009-02-04",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "David Fincher",
        duration: "2h35",
        synopsis:
          "L'Étrange Histoire de Benjamin Button raconte la vie d'un homme né vieillard et qui rajeunit avec le temps. Il traverse les différentes époques de sa vie à l'envers, découvrant l'amour, la guerre et la solitude d'une existence unique.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/78/06/19028560.jpg",
        image_2:
          "https://www.france.tv/image/vignette_16x9/800/450/f/6/a/24dc4838-vodvignette16x925f1ffbdb23b96b1d89f724b3f3f8b5fc5dc24aa576d55a3e90c6d58c80b1a6f.jpg",
        link: "https://www.youtube.com/watch?v=lwSysg9o7wE",
        rating: 4.1,
        status: "premium",
      },
      {
        titre: "Star Wars: Episode III - La Revanche des Sith",
        release_date: "2005-05-18",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "George Lucas",
        duration: "2h20",
        synopsis:
          "La Guerre des Clones fait rage. Anakin Skywalker, séduit par le côté obscur de la Force, devient Dark Vador sous l'influence de Darth Sidious. Les Sith s'unissent pour exterminer les Jedi. Seuls rescapés du massacre, Yoda et Obi Wan se lancent à la poursuite des Sith.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/53/23/18423997.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D0DBB5FC46F5FD8B496F64325A7811DC439EBF4064AC419FBEDA4376DF765B7/scale?width=1200&aspectRatio=1.78&format=webp",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "Les Infiltrés",
        release_date: "2006-11-29",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Martin Scorsese",
        duration: "2h30",
        synopsis:
          "À Boston, la lutte entre la police et la pègre irlandaise s'intensifie. Billy Costigan, un policier infiltré, et Colin Sullivan, une taupe au sein de la police, mènent une double vie dangereuse. Chaque camp découvre qu'il héberge une taupe, déclenchant une course pour démasquer l'autre.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/36/21/63/18680971.jpg",
        image_2:
          "https://focus.telerama.fr/664x442/60/2024/03/12/507bc12a382b4169ad6baf88df304d6a.jpg/webp",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "Le Livre d'Eli",
        release_date: "2010-01-20",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Albert Hughes, Allen Hughes",
        duration: "1h50",
        synopsis:
          "Dans un futur post-apocalyptique, un homme nommé Eli traverse l'Amérique dévastée pour protéger un livre sacré qui contient les secrets pour sauver l'humanité. Sur son chemin, il doit faire face à des bandits et à un chef local tyrannique qui convoite son livre.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/73/75/37/19214558.jpg",
        image_2:
          "https://proxymedia.woopic.com/api/v1/images/331%2FLELIVREDELIW0107133_BAN1_2424_NEWTV.jpg",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.0,
        status: "premium",
      },
      {
        titre: "127 heures",
        release_date: "2011-02-23",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Danny Boyle",
        duration: "1h34",
        synopsis:
          "L'histoire vraie d'Aron Ralston, un alpiniste qui, après un accident dans un canyon isolé, se retrouve coincé et doit prendre une décision extrême pour survivre.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/79/51/17/19633720.jpg",
        image_2:
          "https://tel.img.pmdstatic.net/pad/~2~backoffice~program~281820b95f91071c.jpg/900x600/quality/80/127-heures.jpg",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 3.8,
        status: "premium",
      },
      {
        titre: "Dragons",
        release_date: "2010-03-31",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Chris Sanders, Dean DeBlois",
        duration: "1h33",
        synopsis:
          "L'histoire d'Harold, un jeune Viking qui change la perception de sa tribu envers les dragons après avoir rencontré un dragon amical.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/73/01/74/19343191.jpg",
        image_2:
          "https://smallthings.fr/wp-content/uploads/2014/06/DRAGONSfilm.jpg",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "The Social Network",
        release_date: "2010-10-13",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "David Fincher",
        duration: "2h00",
        synopsis:
          "Une soirée bien arrosée d'octobre 2003, Mark Zuckerberg, un étudiant, pirate le système informatique de l'Université de Harvard pour créer Facemash, une base de données de toutes les filles du campus. Cet événement marque la naissance de Facebook. Cette invention révolutionnaire engendre des conflits passionnés, mettant en cause les véritables paternités du réseau social planétaire.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/o_club-allocine-2024-310x420.png_0_se/medias/nmedia/18/78/52/54/19534550.jpg",
        image_2:
          "https://www.entrepreneur-facile.com/wp-content/uploads/2024/01/the-social-network-facebook-le-film.jpg",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.0,
        status: "premium",
      },
      {
        titre: "The Fighter",
        release_date: "2011-03-09",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "David O. Russell",
        duration: "1h55",
        synopsis:
          "L'histoire vraie de Micky Ward, un boxeur poids mi-moyen d'origine irlandaise issu d'une famille ouvrière. Sa carrière stagne en raison des influences négatives de son frère Dicky, ancien boxeur devenu toxicomane, et de sa mère Alice, qui gère maladroitement sa carrière. Avec l'aide de Charlène, une femme au caractère bien trempé, Micky tente de s'affranchir de sa famille pour réussir dans la boxe.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/82/89/54/19658171.jpg",
        image_2: "https://i.ytimg.com/vi/dzQ4Ybh-73U/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.0,
        status: "premium",
      },
      {
        titre: "Le Discours d'un roi",
        release_date: "2011-02-02",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Tom Hooper",
        duration: "1h58",
        synopsis:
          "L'histoire vraie du roi George VI qui surmonte son bégaiement avec l'aide de Lionel Logue, un orthophoniste aux méthodes peu conventionnelles, pour guider le Royaume-Uni pendant la Seconde Guerre mondiale.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/o_club-allocine-2024-310x420.png_0_se/medias/nmedia/18/82/28/51/19634452.jpg",
        image_2:
          "https://resize.prod.femina.ladmedia.fr/rblr/1200,806/img/var/2011-01/le-discours-d-un-roi-un-film-a-ne-pas-manquer-f1248edd47f5f1b5cd60003d5e03c6df7af56331.jpg",
        link: "https://www.youtube.com/watch?v=KnrRy6kSFF0&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Iron Man 2",
        release_date: "2010-04-28",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Jon Favreau",
        duration: "2h04",
        synopsis:
          "Tony Stark, désormais connu sous le nom d'Iron Man, refuse de partager la technologie de son armure avec l'armée américaine. Avec Pepper Potts et James 'Rhodey' Rhodes à ses côtés, il affronte de nouvelles forces puissantes.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/70/45/28/19408942.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CD23BFF8AB733DC687DC58A26D99693E00FFF1D151BD13DAE97A9C528801E54F/scale?width=1200&aspectRatio=1.78&format=webp",
        link: "https://www.youtube.com/watch?v=1eGZ-xmPQTE&ab_channel=SuperBeri",
        rating: 3.4,
        status: "premium",
      },
      {
        titre: "Tron l'héritage",
        release_date: "2011-02-09",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Joseph Kosinski",
        duration: "2h06",
        synopsis:
          "Sam Flynn, 27 ans, découvre l'univers numérique où son père vit depuis 25 ans. Avec l'aide de Quorra, ils s'engagent dans un voyage époustouflant pour échapper à ce monde plus avancé technologiquement et plus dangereux que jamais.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/71/75/38/19640130.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21E03231AFC71E9AEA2298930A029DA8210A270F8483EC5AE224985C2E9446D1/scale?width=1200&aspectRatio=1.78&format=webp",
        link: "https://www.youtube.com/watch?v=L9szn1QQfas&ab_channel=WaltDisneyStudios",
        rating: 3.3,
        status: "premium",
      },
      {
        titre: "Inception",
        release_date: "2010-07-21",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Christopher Nolan",
        duration: "2h28",
        synopsis:
          "Dom Cobb est un voleur expérimenté dans l'art de l'extraction, volant les secrets les plus précieux d'un individu en s'introduisant dans leur subconscient pendant qu'ils rêvent. Pour retrouver sa vie d'avant, il doit réussir l'inception : implanter une idée dans l'esprit d'un individu.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg",
        image_2:
          "https://static.hitek.fr/img/actualite/2015/06/fb_9389e514fca06a37ba2cba3493be1fbc-large.jpeg",
        link: "https://www.youtube.com/watch?v=YoHD9XEInc0&t=18s&ab_channel=RottenTomatoesClassicTrailers",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "The Town",
        release_date: "2010-09-15",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Ben Affleck",
        duration: "2h03",
        synopsis:
          "Doug MacRay, un criminel impénitent, est le leader d'une bande de braqueurs de banque. Lors de leur dernier casse, ils prennent en otage Claire Keesey, la directrice de la banque. Bien qu'elle soit relâchée indemne, Claire reste nerveuse. Une romance passionnée se développe entre elle et Doug, mettant leurs vies en danger.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/74/18/81/19489279.jpg",
        image_2:
          "https://focus.telerama.fr/664x442/60/2024/01/25/22123870_A8E5FA5962F799422F4C0F0E681FB539.jpg",
        link: "https://www.youtube.com/watch?v=FMfVh1H6Q3U&ab_channel=WarnerBros.France",
        rating: 3.9,
        status: "premium",
      },
      {
        titre: "South Park",
        release_date: "1997-08-13",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Trey Parker, Matt Stone",
        duration: "21 min",
        synopsis:
          "La petite ville de South Park dans le Colorado est le théâtre des aventures de Cartman, Stan, Kyle et Kenny, quatre enfants qui ont un langage un peu... décalé !",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/14/03/24/12/46/257044.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/a4bcfab0582505f3fb361846abe480a580ab84f10d4797825b0902484574f351.jpg",
        link: "https://www.youtube.com/watch?v=VAfy26xs6e0&ab_channel=SouthParkStudios",
        rating: 3.8,
        status: "premium",
      },
      {
        titre: "Batman",
        release_date: "1992-09-05",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Bill Finger, Bob Kane",
        duration: "22 min",
        synopsis:
          "Bruce Wayne le jour, Batman la nuit. En compagnie de son fidèle compagnon Robin, le justicier chauve-souris combat le crime à Gotham City.",
        image_1:
          "https://media.senscritique.com/media/000006473751/0/batman.jpg",
        image_2: "https://i.ytimg.com/vi/S1tkvVh6gb4/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=rrmUk2YUm14&ab_channel=WarnerBros.Entertainment",
        rating: 3.4,
        status: "premium",
      },
      {
        titre: "Stargate SG-1",
        release_date: "1997-07-27",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Brad Wright, Jonathan Glassner",
        duration: "42 min",
        synopsis:
          "Suite à la découverte de la 'Porte des étoiles', le colonel Jack O'Neill et son équipe partent à la découverte de mondes et civilisations inconnus...",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/14/15/57/3353242.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1645ba2c-dd75-4ee5-935e-6f61ea93ea06.__CR65,0,1164,720_PT0_SX970_V1___.jpg",
        link: "https://www.youtube.com/watch?v=bS-4JP9w49Q&ab_channel=MacPhoenix82",
        rating: 3.5,
        status: "premium",
      },
      {
        titre: "Le Caméléon",
        release_date: "1996-09-19",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Craig W. Van Sickle, Steven Long Mitchell",
        duration: "42 min",
        synopsis:
          "Jarod, un homme aux capacités intellectuelles extraordinaires, échappe au Centre qui l'a utilisé pour des simulations dangereuses. Il utilise ses dons pour aider les autres tout en recherchant sa famille, poursuivi par Sydney et Mlle Parker.",
        image_1:
          "https://www.ecranlarge.com/content/uploads/2019/11/uoajodzavic81e4awkoudt2m8e2-862.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/f9d9c5673b5d76598e770906c344521a0a205df7ace80fb5663b3df589fe7a8e.jpg",
        link: "https://www.youtube.com/watch?v=xtNYehpsBB4&ab_channel=Gaumont",
        rating: 3.3,
        status: "premium",
      },
      {
        titre: "Pokémon",
        release_date: "1997-04-01",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Satoshi Tajiri, Junichi Masuda, Ken Sugimori",
        duration: "22 min",
        synopsis:
          "Sacha est un jeune garçon qui vit dans le monde des Pokémon. Un Pokémon est une petite créature possédant divers pouvoirs. Le but de Sacha est de devenir maître Pokémon. Entouré de ses amis, il va vivre de nombreuses aventures et combattre la Team Rocket, des voleurs de Pokémon.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/68/50/47/18853623.jpg",
        image_2:
          "https://img.lemde.fr/2022/12/22/0/0/1730/1153/1440/960/60/0/e968e4d_1671703423578-b5e.jpeg",
        link: "https://www.youtube.com/watch?v=WgoPEnbV1LQ&ab_channel=MannySuarez",
        rating: 2.7,
        status: "premium",
      },
      {
        titre: "Highlander",
        release_date: "1992-10-03",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Gregory Widen",
        duration: "42 min",
        synopsis:
          "À la fin, il ne peut en rester qu'un ! Cousin de Connor McLeod, Duncan est lui aussi un immortel...",
        image_1:
          "https://www.crew-united.com/Media/Images/1118/1118697/1118697.entity.jpg",
        image_2:
          "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprmd.2Etmsimg.2Ecom.2Fassets.2Fp183900_b_h2_an.2Ejpg/1160x500/crop-from/top/quality/80/highlander.jpg",
        link: "https://www.youtube.com/watch?v=vT13a8KzBRM&ab_channel=StudiocanalUK",
        rating: 2.3,
        status: "premium",
      },
      {
        titre: "Beverly Hills",
        release_date: "1990-10-04",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Darren Star",
        duration: "42 min",
        synopsis:
          "Beverly Hills, Californie : un groupe de lycéens doit jongler entre amitié, amour, crises et drames, avant d'accéder à l'université puis d'entrer dans la vie adulte.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/23/12/05/14/58/2511483.jpg",
        image_2:
          "https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/series/beverly-hills/51796674-1-fre-FR/Que-sont-ils-devenus-les-acteurs-de-Beverly-Hills-90210.jpg",
        link: "https://www.youtube.com/watch?v=pJDyXBiUdf4&ab_channel=FilmVlogs",
        rating: 1.9,
        status: "premium",
      },
      {
        titre: "Dawson",
        release_date: "1998-01-20",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Kevin Williamson",
        duration: "42 min",
        synopsis:
          "À Capeside, Dawson découvre les aléas de l'adolescence et voit ses relations avec Joey et Pacey, ses amis de toujours, mises à rude épreuve.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/19/06/13/14/00/2099159.jpg",
        image_2:
          "https://images.lesindesradios.fr/fit-in/1100x2000/filters:format(webp)/radios/vibration/importrk/news/original/13291.jpeg",
        link: "https://www.youtube.com/watch?v=Ps7nWg6RBXs&ab_channel=angeljustin_427",
        rating: 2.2,
        status: "premium",
      },
      {
        titre: "One Piece",
        release_date: "1999-10-20",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Eiichiro Oda",
        duration: "25 min",
        synopsis:
          "Monkey D. Luffy rêve de devenir le roi des pirates en trouvant le légendaire trésor One Piece. Avec son équipage, il explore Grand Line et combat divers ennemis.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/19/08/09/14/53/1842996.jpg",
        image_2:
          "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
        link: "https://www.youtube.com/watch?v=LHTYpWI3S6Q&ab_channel=Cinema24Horas",
        rating: 3.9,
        status: "premium",
      },
      {
        titre: "Berserk",
        release_date: "1997-10-08",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Kentaro Miura",
        duration: "22 min",
        synopsis:
          "Un guerrier solitaire, se faisant appeler le 'Chevalier Noir', vit dans un monde impitoyable où les plus faibles ne survivent pas. Enfant, alors qu'il s'appelait encore Guts, il n'a connu que la violence, la haine et les armes.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/22/11/24/15/34/4534879.jpg",
        image_2:
          "https://www.nautiljon.com/images/galerie/04/84/berserk_376448.jpg",
        link: "https://www.youtube.com/watch?v=IXL5r3n862U&ab_channel=AnimeClips",
        rating: 3.5,
        status: "premium",
      },
      {
        titre: "Vampire Diaries",
        release_date: "2009-09-10",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Julie Plec, Kevin Williamson",
        duration: "42 min",
        synopsis:
          "Quatre mois après un accident tragique, Elena et son frère Jeremy essaient de s'adapter à leur nouvelle réalité. Elena est fascinée par Stefan et Damon Salvatore, deux frères vampires.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/15/10/05/10/33/221403.jpg",
        image_2:
          "https://www.lemagducine.fr/wp-content/uploads/2023/09/the-vampire-diaries-le-mag-critique.jpg",
        link: "https://www.youtube.com/watch?v=BmVmhjjkN4E&ab_channel=ElinaG",
        rating: 4.0,
        status: "premium",
      },
      {
        titre: "Gossip Girl",
        release_date: "2007-09-19",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Josh Schwartz, Stephanie Savage",
        duration: "42 min",
        synopsis:
          "La vie de la jeunesse dorée des élèves de deux écoles privées new-yorkaises, vue à travers les yeux ironiques d'une mystérieuse 'bloggeuse' surnommée Gossip Girl. Entre amour et amitié, chacun tente de tirer son épingle du jeu, mais rien n'est jamais simple derrière des apparences parfaites...",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/18/10/31/16/40/2925980.jpg",
        image_2:
          "https://assets.afcdn.com/story/20130224/16683_w1200h630c1.jpg",
        link: "https://www.youtube.com/watch?v=ai5hin7ffs0&ab_channel=RottenTomatoesTV",
        rating: 3.7,
        status: "premium",
      },
      {
        titre: "Breaking Bad",
        release_date: "2008-01-20",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Vince Gilligan",
        duration: "42 min",
        synopsis:
          "Walter White, un professeur de chimie atteint d'un cancer incurable, se lance dans la fabrication et la vente de méthamphétamine pour subvenir aux besoins de sa famille.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/18/12/11/3956503.jpg",
        image_2:
          "https://img.gaming.gentside.com/sto/tags/breaking-bad-6402981cde1dfb15bf589de2_1278d4a2cb82d030787460ba.jpg",
        link: "https://www.youtube.com/watch?v=HhesaQXLuRY&t=2s&ab_channel=TrailerBlend",
        rating: 4.7,
        status: "premium",
      },
      {
        titre: "Kaamelott",
        release_date: "2005-01-03",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Alexandre Astier, Alain Kappauf, Jean-Yves Robin",
        duration: "7 min",
        synopsis:
          "Le quotidien banal et burlesque du roi Arthur et des chevaliers de la Table ronde : quête du Graal, repas en famille et stratégie militaire.",
        image_1:
          "https://media.senscritique.com/media/000020082603/0/kaamelott.jpg",
        image_2:
          "https://static.hitek.fr/img/actualite/ill_m/30209847/illustr-avant-apres-kaamelott.jpg",
        link: "https://www.youtube.com/watch?v=o8358kIZ8EU&ab_channel=TMDBcontributor",
        rating: 4.1,
        status: "premium",
      },
      {
        titre: "Game of Thrones",
        release_date: "2011-04-11",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "D.B. Weiss, David Benioff",
        duration: "52 min",
        synopsis:
          "Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La Garde de Nuit n'a plus les ressources nécessaires pour assurer la sécurité de tous, et des complots et rivalités se jouent pour s'emparer du Trône de Fer.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/23/01/03/14/13/0717778.jpg",
        image_2:
          "https://www.viedegeek.fr/media/2012/03/Game-of-Thrones-game-of-thrones-20131987-1280-800.jpg",
        link: "https://www.youtube.com/watch?v=bjqEWgDVPe0&ab_channel=HBOUK",
        rating: 4.6,
        status: "premium",
      },
      {
        titre: "The Walking Dead",
        release_date: "2010-10-30",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Frank Darabont",
        duration: "44 min",
        synopsis:
          "Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes mené par l'officier Rick Grimes tente de survivre... Ensemble, ils vont devoir tant bien que mal faire face à ce nouveau monde devenu méconnaissable.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/22/08/29/18/20/3648785.jpg",
        image_2:
          "https://global-img.gamergen.com/the-walking-dead-saison-1-poster_0901023905.jpg",
        link: "https://www.youtube.com/watch?v=sfAc2U20uyg&ab_channel=TrailerBlend",
        rating: 4.4,
        status: "premium",
      },
      {
        titre: "The Leftovers",
        release_date: "2014-06-29",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Damon Lindelof, Tom Perrotta",
        duration: "60 min",
        synopsis:
          "Du jour au lendemain, 2% de la population mondiale disparaît mystérieusement, laissant leurs proches dans l'angoisse et le désespoir. Trois ans plus tard, la vie continue dans la petite ville de Mapleton, mais les cicatrices de la disparition sont toujours présentes.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/21/02/11/13/55/3189267.jpg",
        image_2:
          "https://resize.elle.fr/article_1280/var/plain_site/storage/images/loisirs/series/the-leftovers-un-premier-trailer-pour-la-saison-2-2958760/55211302-1-fre-FR/The-Leftovers-un-premier-trailer-pour-la-saison-2.jpg",
        link: "https://www.youtube.com/watch?v=FLT3YUALJno&ab_channel=SeriesTrailerMP",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Peaky Blinders",
        release_date: "2013-09-12",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Steven Knight",
        duration: "52 min",
        synopsis:
          "En 1919, à Birmingham, soldats, révolutionnaires politiques et criminels combattent pour se faire une place dans le paysage industriel de l'après-guerre. La famille Shelby, surnommée les Peaky Blinders, tire principalement son argent de paris et de vol.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/22/06/07/11/57/5231272.jpg",
        image_2:
          "https://actorsfactory-studio.fr/wp-content/uploads/2022/03/2-min-5.png",
        link: "https://www.youtube.com/watch?v=X3PGOaEfCmQ&ab_channel=LukeLewisVideoEditing",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "Vikings",
        release_date: "2013-03-03",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Michael Hirst",
        duration: "52 min",
        synopsis:
          "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/20/12/04/10/04/4859166.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/265d67318d99543d49dafeefedf9f4dfba7f677cc5dd7b4e4e39a780de949dd9.jpg",
        link: "https://www.youtube.com/watch?v=9GgxinPwAGc&ab_channel=RewatchAgain",
        rating: 4.4,
        status: "premium",
      },
      {
        titre: "Chernobyl",
        release_date: "2019-05-06",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Craig Mazin",
        duration: "58 min",
        synopsis:
          "26 avril 1986, l'histoire vraie de la pire catastrophe causée par l'homme et de ceux qui ont sacrifié leur vie pour sauver l'Europe du drame. L'explosion d'un réacteur à la centrale nucléaire de Tchernobyl, en Ukraine, a de terribles conséquences aussi bien sur le personnel de l'usine, que sur les équipes de secours, la population et l'environnement.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/23/01/03/14/05/3165194.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/e86e3ae26b4e16e7f2857a0a16f23bd43958295fb879b90c8c02d8abdd4b1bb9.jpg",
        link: "https://www.youtube.com/watch?v=s9APLXM9Ei8&ab_channel=HBO",
        rating: 4.6,
        status: "premium",
      },
      {
        titre: "L'Attaque des Titans",
        release_date: "2013-04-07",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Hajime Isayama",
        duration: "24 min",
        synopsis:
          "Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des Titans et les annihiler jusqu’au dernier.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/20/12/28/10/24/5603983.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/93c059c692eb775297fcaddf769414db826e0cb9e88414f8a41a5b41b18e7ca6.jpg",
        link: "https://www.youtube.com/watch?v=LV-nazLVmgo&ab_channel=BRASStv",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "Mr. Robot",
        release_date: "2015-06-24",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Sam Esmail",
        duration: "45 min",
        synopsis:
          "Elliot est un jeune programmeur anti-social qui souffre d'un trouble du comportement. Il travaille pour une firme de cyber-sécurité mais est recruté par Mr. Robot pour faire tomber une puissante entreprise.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/15/05/06/16/13/020977.jpg",
        image_2:
          "https://braindamaged.fr/wp-content/uploads/2015/06/mr-robot-dans-la-tete-dun-hacker-une-631x250.jpg",
        link: "https://www.youtube.com/watch?v=xIBiJ_SzJTA&ab_channel=AlchemistEskimo",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Westworld",
        release_date: "2016-10-02",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Jonathan Nolan, Lisa Joy",
        duration: "52 min",
        synopsis:
          "À Westworld, un parc d'attractions futuriste, les visiteurs paient pour revivre le frisson de la conquête de l'Ouest. Les androïdes créés pour ce monde commencent à adopter des comportements imprévisibles après une mise à jour.",
        image_1:
          "https://www.france.tv/image/carre/400/400/4/a/a/b4a2845b-vodcarre31d923bfc68a1e9ce71382b7f6d4c3c5a989f42dc2c82bc4983f30b8b1f1daa4.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/cebcaf7d85e3b6bfd95892809611de11cd74bd95bdf2a708ed87201df8a060f3._SX1080_FMjpg_.jpg",
        link: "https://www.youtube.com/watch?v=kEkZdgWu7mM&ab_channel=HBOUK",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Narcos",
        release_date: "2015-08-28",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Carlo Bernard, Chris Brancato, Doug Miro",
        duration: "52 min",
        synopsis:
          "Loin d’un simple biopic de Pablo Escobar, Narcos retrace la lutte acharnée des États-Unis et de la Colombie contre le cartel de la drogue de Medellín, l’organisation la plus lucrative et impitoyable de l’histoire criminelle moderne. En multipliant les points de vue — policier, politique, judiciaire et personnel — la série dépeint l’essor du trafic de cocaïne et le bras de fer sanglant engagé avec les narcotrafiquants.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/15/07/29/14/33/086520.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/c5731641a600188abd3fc6aff514a40eac842121b6d0f812e657659e52ff370a.jpg",
        link: "https://www.youtube.com/watch?v=LNqJnZl4imQ&ab_channel=NetflixFrance",
        rating: 4.4,
        status: "premium",
      },
      {
        titre: "Person of Interest",
        release_date: "2011-09-22",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Jonathan Nolan",
        duration: "42 min",
        synopsis:
          "Un agent paramilitaire de la CIA, présumé mort, est recruté par un millionnaire reclu pour travailler sur un projet top-secret : prévenir le crime avant qu'il ne se produise. Un programme ingénieux identifie chaque jour des personnes qui seront impliquées dans un crime.",
        image_1: "https://serieall.fr/images/shows/person-of-interest.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/513722b8dff999c5498a51ece44b3ded8d732c4d5206ce8cc0c3d3fc65d89875.jpg",
        link: "https://www.youtube.com/watch?v=WYDWSNMTauQ&ab_channel=LadyGisborne15",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Spartacus",
        release_date: "2010-01-22",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Steven S. DeKnight",
        duration: "42 min",
        synopsis:
          "C’est dans le sang et le sable des arènes que s’écrit la légende de Spartacus. Puissant guerrier Thrace trahi par un ambitieux légat romain, Spartacus est réduit en esclavage, contraint de devenir gladiateur s’il veut un jour revoir sa femme.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/21/01/29/17/37/5311898.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/e1c5254d7d479f2815a939a3f65c78a2eaa87acc2b634ebc35d4512cca5aa992.jpg",
        link: "https://www.youtube.com/watch?v=m2CqtNeRK_w&ab_channel=STARZ",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "Frères d'armes",
        release_date: "2001-09-09",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Steven Spielberg, Tom Hanks",
        duration: "60 min",
        synopsis:
          "Vivez la Seconde Guerre Mondiale aux côtés de la Easy Company, un groupe de soldats américains. Suivez-les depuis leur formation en 1942, jusqu'à la libération de l'Allemagne Nazie en 1945, en passant par leur parachutage en Normandie le 6 juin 1944.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/03/13/45/1573815.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/51dbe04287543222a6514c2353b1b648ab0fdc51279cd6dfa18ee188f4a2fca2.jpg",
        link: "https://www.youtube.com/watch?v=KKRBAFlN5ww&ab_channel=WarnerBros.Entertainment",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "Rome",
        release_date: "2005-08-28",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "John Milius, William J. MacDonald",
        duration: "52 min",
        synopsis:
          "Les destins de deux soldats romains et de leurs familles alors que la République Romaine est en train de s'effondrer en laissant peu à peu la place à un Empire.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/23/01/06/14/12/4097876.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/ca10f41a47eeeead6d2ada0eef81ded4bf9a06e574092ca12e23b9a88958db3f.jpg",
        link: "https://www.youtube.com/watch?v=VWSVSPaszJk&ab_channel=TopRatedTVShows",
        rating: 4.0,
        status: "premium",
      },
      {
        titre: "Dr House",
        release_date: "2004-11-16",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "David Shore",
        duration: "44 min",
        synopsis:
          "Le Dr Greg House est un médecin revêche qui ne fait confiance à personne, et encore moins à ses patients. Irrévérencieux et controversé, il est prêt à tout pour résoudre les cas médicaux les plus mystérieux et sauver des vies avec son équipe d'experts.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/22/04/01/11/50/1018209.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/68c18ff432fea7df044ac04cf195e31b7814d9320a77fb150557b8877ea40286.jpg",
        link: "https://www.youtube.com/watch?v=MczMB8nU1sY&ab_channel=iflixMalaysia",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Battlestar Galactica",
        release_date: "2004-10-18",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Glen A. Larson, Ronald D. Moore",
        duration: "42 min",
        synopsis:
          "Puissants robots, les Cylons règnent en maître sur l'univers. À bord du dernier vaisseau de guerre, le Galactica, des humains tentent de survivre en entreprenant le voyage de la dernière chance : trouver une légendaire planète appelée la Terre.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/19/09/02/10/57/3132882.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/2ce3e91d5fd57a5ccb1d00e8e0923b22defc59c159d5f81839632c72875dfa02.jpg",
        link: "https://www.youtube.com/watch?v=TnYsf2Yv8i8&ab_channel=devbobcz",
        rating: 3.8,
        status: "premium",
      },
      {
        titre: "24 heures chrono",
        release_date: "2001-11-06",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Joel Surnow, Robert Cochran",
        duration: "42 min",
        synopsis:
          "Responsable de la Cellule Anti-Terroriste de Los Angeles, Jack Bauer a 24 heures pour mener sa mission à bien et protéger les siens du danger qui les menacent...",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/21/01/29/17/22/0650437.jpg",
        image_2:
          "https://static1.purebreak.com/articles/5/14/76/5/@/21896-110-24-heures-chrono-580x0-1.jpg",
        link: "https://www.youtube.com/watch?v=-Tldme1j_Ec&t=1s&ab_channel=TJDW",
        rating: 3.7,
        status: "premium",
      },
      {
        titre: "Prison Break",
        release_date: "2005-08-29",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Paul Scheuring",
        duration: "42 min",
        synopsis:
          "Michael Scofield s'engage dans une véritable lutte contre la montre : son frère Lincoln est dans le couloir de la mort, en attente de son exécution. Persuadé de son innocence mais à court de solutions, Michael décide de se faire incarcérer à son tour dans le pénitencier d'état de Fox River pour organiser leur évasion...",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/17/05/22/16/49/588696.jpg",
        image_2: "https://i.servimg.com/u/f48/16/48/85/85/tm/saiso100.jpg",
        link: "https://www.youtube.com/watch?v=lLr8KuOM0hA",
        rating: 3.8,
        status: "premium",
      },
      {
        titre: "Sons of Anarchy",
        release_date: "2008-09-03",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Kurt Sutter",
        duration: "42 min",
        synopsis:
          "Afin de protéger leur ville des dealers et des entrepreneurs locaux, les membres d'un club de motos sont prêts à tout. Jax Teller est partagé entre l'amour qu'il porte à sa confrérie et l'appréhension grandissante qu'il nourrit en voyant l'anarchie et le banditisme qui règne dans son club...",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/21/01/29/17/41/0758046.jpg",
        image_2:
          "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprmd.2Etmsimg.2Ecom.2Fassets.2Fp7895131_b_h10_aa.2Ejpg/630x355/quality/80/sons-of-anarchy.jpg",
        link: "https://www.youtube.com/watch?v=-Nv9YrZr3wE&ab_channel=RewatchAgain",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Firefly",
        release_date: "2002-09-20",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Joss Whedon",
        duration: "42 min",
        synopsis:
          "Après une guerre civile, le capitaine Malcolm Reynolds et son équipage survivent à bord du vaisseau Serenity en effectuant diverses missions sans trop se soucier de la légalité.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/16/03/02/13/50/077597.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/09f6427daf610ccfa5e252fbe7b11e474d795d5182e3d953d0e13117eb64beab.jpg",
        link: "https://www.youtube.com/watch?v=oBZrZij2-g8&ab_channel=TopRatedTVShows",
        rating: 3.3,
        status: "premium",
      },
      {
        titre: "Supernatural",
        release_date: "2005-09-13",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Eric Kripke, McG",
        duration: "42 min",
        synopsis:
          "Deux frères parcourent les États-Unis pour traquer les forces du Mal. Ils espèrent par la même occasion mettre la main sur le démon responsable de la mort de leur mère, vingt ans plus tôt.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/18/12/26/00/30/2209565.jpg",
        image_2:
          "https://www.lemagducine.fr/wp-content/uploads/2014/08/supernatural-critique-series.jpg",
        link: "https://www.youtube.com/watch?v=zlJQSte3lW0&ab_channel=SupernaturalTvShow",
        rating: 3.9,
        status: "premium",
      },
      {
        titre: "Friday Night Lights",
        release_date: "2006-10-03",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Peter Berg",
        duration: "42 min",
        synopsis:
          "À Dillon, une petite ville du Texas, le championnat de football américain est pris très au sérieux. L'équipe du lycée est prometteuse, et chaque match est un événement pour la communauté.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/22/12/20/13/48/2308362.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/60b231f0b82aaea3bf835f5529009a4b3be93ddd1ce5cd6e52f3d1fa2c426584.jpg",
        link: "https://www.youtube.com/watch?v=qBARUXrzrIk&ab_channel=TopRatedTVShows",
        rating: 3.5,
        status: "premium",
      },
      {
        titre: "Fullmetal Alchemist",
        release_date: "2003-10-04",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Hiromu Arakawa",
        duration: "24 min",
        synopsis:
          "Après avoir perdu leur mère, Edward et Alphonse tentent de la ramener à la vie grâce à l'alchimie. Cependant, l'alchimie doit obéir à la loi de l'échange équivalent : l'objet transformé et l'objet issu de la transformation doivent être de masses équivalentes. Passer outre cette règle coûte très cher, et les frères Elric en feront les frais...",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/19/07/30/12/08/0075575.jpg",
        image_2:
          "https://imgmedia.larepublica.pe/640x371/larepublica/migration/images/WV6GG4SHGVF37HTQYI2V4ZTZKE.webp",
        link: "https://www.youtube.com/watch?v=asTxh9kuEvE&ab_channel=IGN",
        rating: 3.6,
        status: "premium",
      },
      {
        titre: "Mad Max: Fury Road",
        release_date: "2015-05-14",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "George Miller",
        duration: "2h00",
        synopsis:
          "Hanté par un lourd passé, Mad Max estime que le meilleur moyen de survivre est de rester seul. Cependant, il se retrouve embarqué par une bande qui parcourt la Désolation à bord d'un véhicule militaire piloté par l'Imperator Furiosa. Ils fuient la Citadelle où sévit le terrible Immortan Joe qui s'est fait voler un objet irremplaçable.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/15/04/14/18/30/215297.jpg",
        image_2:
          "https://focus.telerama.fr/664x442/60/2024/05/03/cafc63bcc5c941629369258e62fb7a23.jpg/webp",
        link: "https://www.youtube.com/watch?v=hEJnMQG9ev8&ab_channel=WarnerBros.Pictures",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "The Hunger Games",
        release_date: "2012-03-21",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Gary Ross",
        duration: "2h22",
        synopsis:
          "Chaque année, le Capitole oblige les douze districts de Panem à envoyer des jeunes pour concourir aux Hunger Games, une compétition où les tributs doivent s'affronter jusqu'à la mort. Katniss Everdeen se porte volontaire pour sauver sa sœur.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/85/51/91/20018884.jpg",
        image_2:
          "https://www.slate.fr/uploads/store/story_95085/large_landscape_95085.jpg",
        link: "https://www.youtube.com/watch?v=mfmrPu43DF8&ab_channel=LionsgateMovies",
        rating: 3.8,
        status: "premium",
      },
      {
        titre: "Ready Player One",
        release_date: "2018-03-28",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Steven Spielberg",
        duration: "2h20",
        synopsis:
          "En 2045, l'humanité trouve refuge dans l'OASIS, un univers virtuel créé par James Halliday. Ce dernier a caché un œuf de Pâques numérique dans l'OASIS, promettant sa fortune à celui qui le trouvera. Wade Watts se lance dans cette quête, découvrant un monde parallèle plein de dangers.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/18/02/14/09/15/3437390.jpg",
        image_2:
          "https://cdn.sortiraparis.com/images/80/57915/338417-ready-player-one-decouvrez-la-bande-annonce-du-nouveau-spielberg.jpg",
        link: "https://www.youtube.com/watch?v=cSp1dM2Vj48&ab_channel=WarnerBros.Pictures",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "La Planète des singes : Les Origines",
        release_date: "2011-08-10",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Rupert Wyatt",
        duration: "1h50",
        synopsis:
          "Des scientifiques testent un traitement contre la maladie d'Alzheimer sur des singes, augmentant leur intelligence. César, un jeune chimpanzé, mène une révolte contre les humains.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/84/60/29/19765980.jpg",
        image_2:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD7DC17CC47E4EF8FAC3E030AD5B7B99B4FCB7E7FEBD06D8287288A6FAF0D1BF/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
        link: "https://www.youtube.com/watch?v=Vn8GriIog1s&ab_channel=20thCenturyStudiosFR",
        rating: 4.1,
        status: "premium",
      },
      {
        titre: "Time Out",
        release_date: "2011-11-23",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Andrew Niccol",
        duration: "1h41",
        synopsis:
          "Dans un futur où le temps a remplacé l'argent, les hommes ne vieillissent plus après 25 ans. Ils doivent gagner du temps pour rester en vie. Un homme accusé à tort de meurtre prend la fuite avec une otage.",
        image_1:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/85/59/68/19816803.jpg",
        image_2:
          "https://proxymedia.woopic.com/api/v1/images/331%2FINTIMEXXXXXW0059488_BAN1_2424_NEWTV_HD.jpg",
        link: "https://www.youtube.com/watch?v=bVZsx_a488w&ab_channel=20thCenturyStudiosFR",
        rating: 3.5,
        status: "premium",
      },
      {
        titre: "Jujutsu Kaisen",
        release_date: "2020-10-03",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Gege Akutami",
        duration: "24 min",
        synopsis:
          "Yuji Itadori, un lycéen avec une force physique hors norme, découvre le monde des malédictions après avoir avalé le doigt d'un démon millénaire. Possédé par Ryômen Sukuna, il doit aider les exorcistes à retrouver tous les doigts de Sukuna pour éviter sa condamnation à mort.",
        image_1:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/20/09/14/10/31/4875617.jpg",
        image_2:
          "https://sm.ign.com/ign_in/screenshot/default/jujutsukaisen_vdeh.png",
        link: "https://www.youtube.com/watch?v=pkKu9hLT-t8&ab_channel=Crunchyroll",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "Hunter x Hunter (2011)",
        release_date: "2011-10-02",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Yoshihiro Togashi",
        duration: "22 min",
        synopsis:
          "Gon Freecss, 12 ans, décide de devenir Hunter pour retrouver son père. Il affronte des épreuves périlleuses, se lie d'amitié avec Kurapika, Leorio et Killua, et découvre le monde des Hunters.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/19/08/01/09/52/4803203.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/0b9e5665fcdd89c4fcfb124627da931ea025b72dd3af0742797b9af4d5e92284.jpg",
        link: "https://www.youtube.com/watch?v=d6kBeJjTGnY&ab_channel=vizmedia",
        rating: 4.5,
        status: "premium",
      },
      {
        titre: "Sword Art Online",
        release_date: "2012-07-08",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Reki Kawahara",
        duration: "24 min",
        synopsis:
          "En 2022, 10 000 joueurs se retrouvent piégés dans le jeu en réalité virtuelle Sword Art Online. Pour survivre, ils doivent terminer le jeu sans mourir dans la vraie vie. Kirito, un ex-bêta-testeur, tente de conquérir ce monde virtuel.",
        image_1:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/19/07/09/11/04/5921608.jpg",
        image_2: "https://i.ytimg.com/vi/L-n9dAQAUUA/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=GZswY9hW_Bg&ab_channel=Wakanim",
        rating: 4.2,
        status: "premium",
      },
      {
        titre: "One Punch Man",
        release_date: "2015-10-05",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Tomohiro Suzuki",
        duration: "24 min",
        synopsis:
          "Histoire de passer le temps, Saitama est devenu un héros. Trois années d’un entraînement spécial lui ont donné un pouvoir le rendant invincible. Mais Saitama est devenu si fort qu’un seul coup de poing lui suffit à terrasser chaque adversaire se présentant, aussi puissant soit-il.",
        image_1:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/17/02/27/17/41/046707.jpg",
        image_2:
          "https://fr.web.img5.acsta.net/newsv7/18/08/13/16/06/2876487.jpg",
        link: "https://www.youtube.com/watch?v=Poo5lqoWSGw&ab_channel=vizmedia",
        rating: 4.3,
        status: "premium",
      },
      {
        titre: "JoJo's Bizarre Adventure",
        release_date: "2012-10-06",
        post_date: "2024-06-15",
        typeID: "Série",
        director: "Hirohiko Araki",
        duration: "25 min",
        synopsis:
          "En Angleterre, dans les années 1880, Jonathan Joestar et Dio Brando, liés par une ancienne promesse, s'affrontent. Leur rivalité, marquée par la magie noire, se perpétue à travers les générations, touchant les descendants Joestar.",
        image_1:
          "https://fr.web.img3.acsta.net/c_310_420/pictures/20/03/10/12/07/4001550.jpg",
        image_2:
          "https://m.media-amazon.com/images/S/pv-target-images/ea0275b4205b07294cb7b2ea3f702454331fa4e60ce03e58085399bdd6d1d524.jpg",
        link: "https://www.youtube.com/watch?v=EO08vMz73YY&ab_channel=SupaAzarashi",
        rating: 4.1,
        status: "premium",
      },
      {
        titre: "Trainspotting",
        release_date: "1996-06-19",
        post_date: "2024-06-15",
        typeID: "Film",
        director: "Danny Boyle",
        duration: "1h34",
        synopsis:
          "Mark Renton, jeune toxicomane d’Édimbourg, tente de sortir de sa dépendance à l'héroïne tout en affrontant la réalité difficile de son entourage et de ses amis tout aussi accros.",
        image_1:
          "https://fr.web.img6.acsta.net/medias/nmedia/18/78/52/54/19534550.jpg",
        image_2:
          "https://fr.web.img2.acsta.net/r_1920_1080/pictures/18/03/27/16/17/4965868.jpg",
        link: "https://www.youtube.com/watch?v=lLr8KuOM0hA",
        rating: 4.3,
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
