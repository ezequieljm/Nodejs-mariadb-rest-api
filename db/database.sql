CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    employee_id INT(11) AUTO_INCREMENT,
    firstname VARCHAR(45) NOT NULL,
    lastname VARCHAR(45) NOT NULL,
    salary FLOAT(8,2) NOT NULL,
    PRIMARY KEY (employee_id)
);

INSERT INTO employees ()
VALUES(1,'Elon', 'Musk', 999999.99);

INSERT INTO employees 
VALUES(DEFAULT, 'Alisson', 'Banner', 250000.00),
(DEFAULT, 'Melody', 'Marks', 150000.99),
(DEFAULT, 'Lena', 'Paul', 200000.79),
(DEFAULT, 'Mia', 'Melano', 100000.45);