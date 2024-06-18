
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