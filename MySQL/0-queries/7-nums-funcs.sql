SELECT ROUND(1234.567, 2),
 (SELECT ROUND(1234.567, -2));
SELECT TRUNCATE(1234.567, 2);
SELECT ABS(-123);
SELECT CEILING(-123.45),
 (SELECT CEILING(123.45));
 SELECT FLOOR(-123.45),
 (SELECT FLOOR(123.45));
 SELECT POWER(5, 2),
 (SELECT POWER(5, 3));
 SELECT SQRT(225);
SELECT SIGN(-5),
 (SELECT SIGN(7));
SELECT RAND();

CREATE TABLE Products
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(30) NOT NULL,
    Manufacturer VARCHAR(20) NOT NULL,
    ProductCount INT DEFAULT 0,
    Price DECIMAL NOT NULL
);
INSERT INTO Products (ProductName, Manufacturer, ProductCount, Price)
VALUES ('iPhone X', 'Apple', 2, 76000),
('iPhone 8', 'Apple', 2, 51000),
('iPhone 7', 'Apple', 5, 42000),
('Galaxy S9', 'Samsung', 2, 76000),
('Galaxy S8', 'Samsung', 1, 46000),
('Honor 10', 'Huawei', 2, 26000),
('Nokia 8', 'HMD Global', 6, 38000);
SELECT ProductName, ROUND(Price * ProductCount, 2)
FROM Products;