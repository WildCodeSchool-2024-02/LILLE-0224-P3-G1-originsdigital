CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE moderator (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
lastname VARCHAR(255) NOT NULL,
firstname VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
status BOOLEAN NOT NULL);


CREATE TABLE genre (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL);

CREATE TABLE video (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255),
    release_date DATE,
    post_date DATE,
    typeID VARCHAR(50),
    director VARCHAR(255),
    duration VARCHAR(50),
    synopsis TEXT,
    image VARCHAR(255),
    link VARCHAR(255),
    rating FLOAT,
    status VARCHAR(50)
);

CREATE TABLE video_genre (
    videoID INT,
    genreID INT,
    PRIMARY KEY (videoID, genreID),
    FOREIGN KEY (videoID) REFERENCES video(id),
    FOREIGN KEY (genreID) REFERENCES genre(id)
);

CREATE TABLE compte (
id INT AUTO_INCREMENT PRIMARY KEY,
role VARCHAR(255) NOT NULL,
adminID INT,
usersID INT,
moderatorID INT,
FOREIGN KEY (adminID) REFERENCES admin(id),
FOREIGN KEY (usersID) REFERENCES users(id),
FOREIGN KEY (moderatorID) REFERENCES moderator(id)
);

CREATE TABLE operation_moderation (
operationID INT AUTO_INCREMENT PRIMARY KEY,
moderatorID INT,
compteID INT,
operationType VARCHAR(50),
FOREIGN KEY (moderatorID) REFERENCES moderator(id),
FOREIGN KEY (compteID) REFERENCES compte(id)
);

CREATE TABLE operation_video (
    operationID INT AUTO_INCREMENT PRIMARY KEY,
    compteID INT,
    videoID INT,
    operationType VARCHAR(50),
    operationDate DATETIME,
    FOREIGN KEY (compteID) REFERENCES compte(id), 
    FOREIGN KEY (videoID) REFERENCES video(id)
);




INSERT INTO admin (username, password) VALUES ('admin1', 'password1'), ('admin2', 'password2');

INSERT INTO moderator (username, password) VALUES ('moderator1', 'password1'), ('moderator2', 'password2');

INSERT INTO video (titre, release_date, post_date, typeID, director, duration, synopsis, image, link, rating, status) VALUES
('Les Aventuriers de l\'Arche perdue', '1981-09-16', '2024-06-15', 'Film', 'Steven Spielberg', '1h55', 'Indiana Jones, un archéologue aventurier, part à la recherche de l\'Arche d\'Alliance avant que les nazis ne s\'en emparent.', 'https://images.allocine.fr/medias/nmedia/18/36/01/18/20048688.jpg', 'https://www.youtube.com/watch?v=vbE_xOb4HhI', 4.7, 'free'),
('Retour vers le futur', '1985-10-30', '2024-06-15', 'Film', 'Robert Zemeckis', '1h56', 'Marty McFly, un adolescent des années 80, est accidentellement envoyé en 1955 dans une machine à voyager dans le temps inventée par le Dr Emmett Brown.', 'https://images.allocine.fr/medias/nmedia/18/35/99/25/18770157.jpg', 'https://www.youtube.com/watch?v=qvsgGtivCgs', 4.8, 'free'),
('Le Grand Bleu', '1988-05-11', '2024-06-15', 'Film', 'Luc Besson', '2h48', 'Jacques Mayol et Enzo Molinari, amis d\'enfance, deviennent rivaux dans des compétitions de plongée en apnée.', 'https://images.allocine.fr/medias/nmedia/18/36/08/70/18875092.jpg', 'https://www.youtube.com/watch?v=Aj4xtPRejto', 4.5, 'free'),
('La Ligne verte', '2000-03-01', '2024-06-15', 'Film', 'Frank Darabont', '3h09', 'Paul Edgecomb, gardien-chef dans un pénitencier, rencontre John Coffey, un colosse accusé de meurtre mais doté d\'un don mystérieux.', 'https://images.allocine.fr/medias/nmedia/00/02/24/58/69119562_af.jpg', 'https://www.youtube.com/watch?v=uDybmxbKf4Y', 4.8, 'free'),
('Gladiator', '2000-06-20', '2024-06-15', 'Film', 'Ridley Scott', '2h35', 'Maximus, général romain trahi et réduit en esclavage, devient gladiateur et cherche à se venger de l\'empereur Commodus.', 'https://images.allocine.fr/medias/nmedia/00/02/53/45/affiche2.jpg', 'https://www.youtube.com/watch?v=owK1qxDselE', 4.7, 'free');

INSERT INTO video (titre, release_date, post_date, typeID, director, duration, synopsis, image, link, rating, status) VALUES
('La Boum', '1980-12-17', '2024-06-15', 'Film', 'Claude Pinoteau', '1h50', 'Vic, une adolescente de 13 ans, fait face aux hauts et aux bas de la vie à l\'école, en famille et dans ses relations amoureuses.', 'https://images.allocine.fr/medias/nmedia/00/02/48/82/la_boum.jpg', 'https://www.youtube.com/watch?v=5u7m2A6YOc4', 4.4, 'free'),
('Nikita', '1990-02-21', '2024-06-15', 'Film', 'Luc Besson', '1h58', 'Une jeune femme criminelle est recrutée par une agence gouvernementale secrète pour devenir une assassin de premier ordre.', 'https://images.allocine.fr/medias/nmedia/00/02/48/84/nikita.jpg', 'https://www.youtube.com/watch?v=iw-BxY5xtb4', 4.6, 'free'),
('Cyrano de Bergerac', '1990-03-28', '2024-06-15', 'Film', 'Jean-Paul Rappeneau', '2h18', 'L\'histoire du poète et soldat Cyrano de Bergerac, qui aide un jeune homme timide à courtiser la femme qu\'il aime en secret.', 'https://images.allocine.fr/medias/nmedia/18/35/99/17/19904644.jpg', 'https://www.youtube.com/watch?v=hbT1F9KvPf8', 4.7, 'free'),
('Le Fabuleux Destin d\'Amélie Poulain', '2001-04-25', '2024-06-15', 'Film', 'Jean-Pierre Jeunet', '2h02', 'Amélie, une jeune serveuse dans un café de Montmartre, décide de changer la vie de ceux qui l\'entourent pour le mieux.', 'https://images.allocine.fr/medias/nmedia/00/02/24/55/69120973_af.jpg', 'https://www.youtube.com/watch?v=HUECWi5pX7o', 4.7, 'free'),
('Bienvenue chez les Ch\'tis', '2008-02-20', '2024-06-15', 'Film', 'Dany Boon', '1h46', 'Un directeur de poste du sud de la France est muté contre son gré dans le nord, où il découvre les mœurs locales avec humour et tendresse.', 'https://images.allocine.fr/medias/nmedia/18/64/65/98/18944583.jpg', 'https://www.youtube.com/watch?v=l5YqJpk2c-E', 4.6, 'free');

INSERT INTO video (titre, release_date, post_date, typeID, director, duration, synopsis, image, link, rating, status) VALUES
('Scarface', '1983-12-09', '2024-06-15', 'Film', 'Brian De Palma', '2h50', 'En 1980 à Miami, un immigrant cubain déterminé prend le contrôle d\'un cartel de drogue et succombe à la cupidité.', 'https://images.allocine.fr/medias/nmedia/00/02/55/52/scarface.jpg', 'https://www.youtube.com/watch?v=7pQQHnqBa2E', 4.8, 'free'),
('Rain Man', '1988-12-16', '2024-06-15', 'Film', 'Barry Levinson', '2h13', 'Un jeune homme égoïste découvre que son père décédé a laissé sa fortune à un frère autiste qu\'il ne connaissait pas et entreprend un voyage à travers le pays avec lui.', 'https://images.allocine.fr/medias/nmedia/18/35/19/92/19878474.jpg', 'https://www.youtube.com/watch?v=KKC3W0awjm0', 4.7, 'free'),
('Les Affranchis', '1990-09-19', '2024-06-15', 'Film', 'Martin Scorsese', '2h26', 'L\'histoire d\'Henry Hill et de sa vie dans la mafia, couvrant sa relation avec sa femme Karen et ses partenaires du crime Jimmy Conway et Tommy DeVito.', 'https://images.allocine.fr/medias/nmedia/18/36/00/95/19884323.jpg', 'https://www.youtube.com/watch?v=qo5jJpHtI1Y', 4.8, 'free'),
('Le Silence des Agneaux', '1991-02-14', '2024-06-15', 'Film', 'Jonathan Demme', '1h58', 'Une jeune recrue du FBI doit demander l\'aide d\'un détenu psychiatre cannibale pour attraper un autre tueur en série.', 'https://images.allocine.fr/medias/nmedia/18/36/12/34/19872254.jpg', 'https://www.youtube.com/watch?v=W6Mm8Sbe__o', 4.8, 'free'),
('Le Seigneur des Anneaux : La Communauté de l\'Anneau', '2001-12-19', '2024-06-15', 'Film', 'Peter Jackson', '2h58', 'Un jeune hobbit nommé Frodon doit détruire un anneau maléfique dans les feux de la Montagne du Destin, accompagné d\'une communauté de héros.', 'https://images.allocine.fr/medias/nmedia/00/02/52/70/affiche2.jpg', 'https://www.youtube.com/watch?v=V75dMMIW2B4', 4.9, 'free');

INSERT INTO users (lastname, firstname, email, username, password, status) VALUES
('Dupont', 'Jean', 'jean.dupont@example.com', 'jdupont', 'password123', 1),
('Martin', 'Marie', 'marie.martin@example.com', 'mmartin', 'password123', 1),
('Leroy', 'Julien', 'julien.leroy@example.com', 'jleroy', 'password123', 1),
('Moreau', 'Sophie', 'sophie.moreau@example.com', 'smoreau', 'password123', 1),
('Fournier', 'Lucas', 'lucas.fournier@example.com', 'lfournier', 'password123', 1),
('Dubois', 'Claire', 'claire.dubois@example.com', 'cdubois', 'password123', 1),
('Lambert', 'Antoine', 'antoine.lambert@example.com', 'alambert', 'password123', 1),
('Rousseau', 'Emma', 'emma.rousseau@example.com', 'erousseau', 'password123', 1),
('Lefevre', 'David', 'david.lefevre@example.com', 'dlefevre', 'password123', 1),
('Perrin', 'Julie', 'julie.perrin@example.com', 'jperrin', 'password123', 1);

INSERT INTO genre (name) VALUES
('Action'),
('Aventure'),
('Guerre'),
('Sci-Fi');