DROP DATABASE IF EXISTS movies_db;

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE Top_movies(
Title VARCHAR(255),
Ratings  FLOAT,
Release_Date YEAR
);


INSERT INTO Top_movies(title, Ratings,Release_Date)
VALUES("The Train to Busan", 7.5 , 2016),
("Aladdin",8, 1992 ),
("Guardians of Guardians", 8, 2014),
("Coco", 8.4, 2017),
("Beauty and the Beast", 7.1 , 2017),
("The Little Mermaid", "7.5", 1989),
("Jumanji: The Next Level", 6.7 , 2019),
("World War Z", 7, 2013),
("Finding Nemo", 8.1, 2003),
("Spider-Man: Into the Spider-Verse", 8.4, 2018);

SELECT Title, Release_Date FROM Top_movies WHERE title LIKE "%s%" ORDER BY Release_Date ASC;
-- DELETE FROM Top_movies WHERE Title.INCLUDES('s');