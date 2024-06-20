
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


CREATE TABLE user_data (
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
user_dataID INT,
moderatorID INT,
FOREIGN KEY (adminID) REFERENCES admin(id),
FOREIGN KEY (user_dataID) REFERENCES user_data(id),
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