DROP DATABASE IF EXISTS cars_db;

CREATE DATABASE cars_db;

USE cars_db;

CREATE TABLE Top_Cars(
Make VARCHAR(255),
Model VARCHAR(255),
Car_Year YEAR,
Car_id INT AUTO_INCREMENT,
PRIMARY KEY(Car_id)
);

INSERT INTO Top_Cars(Make, Model, Car_Year, Car_id)
VALUES("Honda", "Fit", 2020, 1),
("Honda", "CR-V", 2020, 2),
("Kia", "Forte", 2020, 3);

INSERT INTO Top_Cars(Make, Model, Car_Year, Car_id)
VALUES("Jeep", "Wrangler", 2018,4),
("Acura", "Light", 2017,5);


INSERT INTO Top_Cars(Make, Model, Car_Year, Car_id)
VALUES("Lilz", "Sport", 2014,6),
("Totyota", "Light", 2012,7),
("Totyota", "Sport", 2017,8);


ALTER TABLE Top_Cars
ADD COLUMN prices FLOAT,
ADD COLUMN color VARCHAR(255);

UPDATE Top_Cars
SET prices = 27000, 
color = "yellow"
WHERE Car_id= 1;

UPDATE Top_Cars
SET prices = 37000, 
color = "red"
WHERE Car_id= 2;


UPDATE Top_Cars
SET prices = 25000, 
color = "white"
WHERE Car_id= 3;

UPDATE Top_Cars
SET prices = 15000, 
color = "black"
WHERE Car_id= 4;


UPDATE Top_Cars
SET prices = 23000, 
color = "black"
WHERE Car_id= 5;


UPDATE Top_Cars
SET prices = 24000, 
color = "red"
WHERE Car_id= 6;


UPDATE Top_Cars
SET prices = 18000, 
color = "white"
WHERE Car_id= 7;


UPDATE Top_Cars
SET prices = 27000, 
color = "gray"
WHERE Car_id= 8;

SELECT *,
CONCAT( Make, " ", Model ) AS Car_Name
FROM Top_Cars;


SELECT 
    Make, 
    COUNT(Make)
FROM
    Top_cars
GROUP BY Make
HAVING COUNT(Make) > 1;


SELECT * FROM Top_Cars;

