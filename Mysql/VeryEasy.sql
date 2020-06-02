DROP DATABASE IF EXISTS cars_db;

CREATE DATABASE cars_db;

USE cars_db;

CREATE TABLE Top_Cars(
Make VARCHAR(255),
Model VARCHAR(255),
Car_Year YEAR
);

INSERT INTO Top_Cars(Make, Model, Car_Year)
VALUES("Honda", "Fit", 2020),
("Honda", "CR-V", 2020),
("Kia", "Forte", 2020);

INSERT INTO Top_Cars(Make, Model, Car_Year)
VALUES("Jeep", "Wrangler", 2018),
("Acura", "Light", 2017);

SELECT * FROM Top_Cars;
