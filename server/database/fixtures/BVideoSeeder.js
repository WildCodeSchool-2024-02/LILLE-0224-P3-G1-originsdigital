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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.magicmaman.com%2F%2Cen-images-retour-vers-le-futur-a-30-ans-que-sont-devenus-les-acteurs%2C3285680.asp&psig=AOvVaw1TTG-MfqYliwhafe6A5mM_&ust=1720779564374000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOj8kMjhnocDFQAAAAAdAAAAABAK",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.france.tv%2Ffilms%2F983-le-grand-bleu.html&psig=AOvVaw1mMsj2OVt3nvki1smendah&ust=1720779621913000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNi75-_hnocDFQAAAAAdAAAAABAk",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8mazN6qDxPk&psig=AOvVaw2A0JqmEO8ROwikVj8NDMYG&ust=1720779705238000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJC3yYrinocDFQAAAAAdAAAAABAQ",
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
        image_2:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DChcgxBAzrks&psig=AOvVaw0Thd7Tjk2wBansZjIlpwD6&ust=1720779746736000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOig2aninocDFQAAAAAdAAAAABAK",
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
        image_2:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Flescopainsd-abord.over-blog.com%2F2015%2F03%2Fla-boum-le-formidable-documentaire-de-1980-par-nath-didile.html&psig=AOvVaw3o4nMWM4usXlBuLUl1KH_X&ust=1720779814622000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODLycHinocDFQAAAAAdAAAAABAE",
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
        image_2:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJRfo_bNco6M&psig=AOvVaw1ny_GMQ23tu8yW47KTp-iV&ust=1720779850241000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID75NLinocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2F-%2Ffr%2Fdetail%2FCyrano-de-bergerac-version-restaur%25C3%25A9e%2F0M6MDS6FZ6BG1CCZX7CN93MRGX&psig=AOvVaw0Nvk7SniEpt8gSbT9tmVqF&ust=1720779884787000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC46-XinocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvl-media.fr%2F5-choses-a-savoir-sur-le-fabuleux-destin-damelie-poulain-avant-sa-ressortie-en-salles%2F&psig=AOvVaw0xtK7zLPCavCb0ccE1t6_7&ust=1720779917690000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjLw_HinocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dto-tCnJ0kkM&psig=AOvVaw1J9PohJSo4i8CJG5UkIZNq&ust=1720779951354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjXjYDjnocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.photowall.fr%2Fscarface-1-impressions-sur-toile&psig=AOvVaw02ALVuNowczQg_R75C_Lbf&ust=1720779971536000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD4lo_jnocDFQAAAAAdAAAAABAK",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffacts.net%2Fmovie%2F43-facts-about-the-movie-rain-man%2F&psig=AOvVaw3yXyhA744fCtUxeHf1A3wc&ust=1720780104364000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiOv8njnocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telerama.fr%2Fcinema%2Ffilms%2Fles-affranchis%2C1047.php&psig=AOvVaw3cT-C50vUqV3z_o4p8rdiV&ust=1720780189907000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJip6vHjnocDFQAAAAAdAAAAABAc",
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
        image_2:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quizzcinema.com%2Fle-silence-des-agneaux-1991-lanalyse-dun-classique-du-thriller%2F&psig=AOvVaw1OYqnzQSQy7BQLc4n1y0no&ust=1720780302068000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9zajknocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dvvx7m22GGtA&psig=AOvVaw0irB8T4GLyKQu0Rgi88HV9&ust=1720780344646000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjo1r3knocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.son-video.com%2F2023%2F11%2Ffriends-de-new-york-a-londres-voyage-sur-les-traces-dune-serie-legendaire%2F&psig=AOvVaw1_g0ZOfxvBiHZnMVIfOF9V&ust=1720780369234000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi3j8fknocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneyplus.com%2Ffr-fr%2Fseries%2Fx-files%2F5suiTvtcMtxC&psig=AOvVaw0tIFrJhF7sFDzIxNGmlbRT&ust=1720780551606000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDDiJ7lnocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneyplus.com%2Ffr-fr%2Fseries%2Fbuffy-contre-les-vampires%2FDmJepBrlNiUe&psig=AOvVaw1jP-rMxgTqZI5nFTThYT7v&ust=1720785571139000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDS4fj3nocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foxtel.com.au%2Fwatch%2Ftv-shows%2Fthe-sopranos.html&psig=AOvVaw1EfM4zhmy0UJtUWwsVgAmJ&ust=1720785592917000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC8v4T4nocDFQAAAAAdAAAAABAK",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmediatheques.roissypaysdefrance.fr%2Fcatalogue%2Fcoups-de-coeur%2F801-2024-05-07-10-18-52&psig=AOvVaw1usCUcktyN2Fgoh-J-Hbr_&ust=1720785637235000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMj69Jb4nocDFQAAAAAdAAAAABAJ",
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
        image_2: "c:UsersKarraAppDataLocalTempcaruso-franz-1695308651594.jpg",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneyplus.com%2Ffr-fr%2Fseries%2Fangel%2FbWP9cXCbGK9a&psig=AOvVaw0XVqYxMGty-TcE1GiqJ7ic&ust=1720785681207000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODtiqz4nocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sky.com%2Fwatch%2Fchannel%2Fsky-comedy%2Ffresh-prince-of-bel-air&psig=AOvVaw14L32kV37jFpGKG1QQEWIv&ust=1720785701799000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiPqLb4nocDFQAAAAAdAAAAABAE",
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
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cineserie.com%2Fseries%2F884616%2F&psig=AOvVaw1gXrqlFxb37rZboXeLMeQy&ust=1720785725571000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCmscH4nocDFQAAAAAdAAAAABAi",
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
