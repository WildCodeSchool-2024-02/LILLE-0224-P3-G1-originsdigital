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
        link: "https://www.youtube.com/watch?v=_-CT5kC-W6g&ab_channel=vegas",
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
