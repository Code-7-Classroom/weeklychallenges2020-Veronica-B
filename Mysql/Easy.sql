DROP DATABASE IF EXISTS books_db;

CREATE DATABASE books_db;

USE books_db;

CREATE TABLE Top_books(
Title VARCHAR(255),
Author_First_Name VARCHAR(255),
Author_Last_Name  VARCHAR(255),
Publish_Date YEAR
);

INSERT INTO Top_books(title, Author_First_Name, Author_Last_Name, Publish_Date)
VALUES("Good Omens", "Neil", "Gaiman", 2020),
("The Mark Of Athena", "Rick", " Riordan", 2012),
("World War Z", "Max","Brooks", 2006),
("The Zombie Survivial", "Max", "Brooks", 2003),
("Poor Unfortune Soul", "Serena", "Valentino", "2016");

INSERT INTO Top_books(title, Author_First_Name, Author_Last_Name, Publish_Date)
VALUES("Awake", "Natasha", "Preston", 2015),
("The Cellar", "Natasha", "Preston", 2014);

DELETE FROM Top_books ORDER BY Publish_Date ASC LIMIT 1;
SELECT COUNT(*) FROM Top_books;
SELECT * FROM Top_books;