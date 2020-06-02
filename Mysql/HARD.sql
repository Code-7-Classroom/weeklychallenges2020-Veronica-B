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

ALTER TABLE Top_movies
ADD COLUMN Director_First_Name VARCHAR(255),
ADD COLUMN Director_Last_Name VARCHAR(255);

UPDATE Top_movies
SET Director_First_Name = "Yeon", 
Director_Last_Name = "Sang-ho"
WHERE title= "The Train to Busan";

UPDATE Top_movies
SET Director_First_Name = "Guy", 
Director_Last_Name = "Richie"
WHERE title= "Aladdin";

UPDATE Top_movies
SET Director_First_Name = "James", 
Director_Last_Name = "Gunn"
WHERE title= "Guardians of Guardians";

UPDATE Top_movies
SET Director_First_Name = "Adrian", 
Director_Last_Name = "Molina"
WHERE title= "Coco";

UPDATE Top_movies
SET Director_First_Name = "Bill", 
Director_Last_Name = "Condon"
WHERE title= "Beauty and the Beast";

UPDATE Top_movies
SET Director_First_Name = "Ron", 
Director_Last_Name = "Clements"
WHERE title= "The Little Mermaid";


UPDATE Top_movies
SET Director_First_Name = "Jake", 
Director_Last_Name = "Kasdan"
WHERE title= "Jumanji: The Next Level";

UPDATE Top_movies
SET Director_First_Name = "Marc", 
Director_Last_Name = "Forster"
WHERE title= "World War Z";

UPDATE Top_movies
SET Director_First_Name = "Andrew", 
Director_Last_Name = "Stanton"
WHERE title= "Finding Nemo";

UPDATE Top_movies
SET Director_First_Name = "Peter", 
Director_Last_Name = "Ramsey"
WHERE title= "Spider-Man: Into the Spider-Verse";

ALTER TABLE Top_movies
ADD COLUMN Director_Full_Name VARCHAR(255);


SELECT *,
CONCAT( Director_First_Name, " ", Director_Last_Name ) AS Full_Name
FROM Top_movies;

SELECT Director_Last_Name FROM Top_Movies ORDER BY Director_Last_Name DESC;

SELECT Director_Last_Name
FROM Top_movies
WHERE Director_Last_Name REGEXP '^[.*[abcdefghijklmnopq].*$]' 
AND Director_Last_Name NOT REGEXP '^[.*[rstuvwxyz].*$]'
LIMIT 3;
SELECT * FROM Top_movies;

