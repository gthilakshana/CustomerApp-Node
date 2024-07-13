DROP DATABASE IF EXISTS node_customer;
CREATE DATABASE IF NOT EXISTS node_customer;
USE node_customer;
//==================
CREATE TABLE IF NOT EXISTS customer(
    nic VARCHAR(20) PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    address VARCHAR(100) NOT NULL,
    salary DOUBLE
);
 SHOW TABLES;
 DESC customer;
 INSERT INTO customer VALUES
('95','Gavrawa','Matara','4500000'),
('65','Thilakshana','Colombo','2500000'),
('75','Pradeep','Thihagoda','6500000')

SELECT * FROM customer;