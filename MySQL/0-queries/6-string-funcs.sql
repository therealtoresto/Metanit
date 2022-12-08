-- FUNCTIONS FOR STRINGS
SELECT CONCAT('Tom', ' ', 'Smith');
SELECT CONCAT_WS(' '. 'Tom', 'Smith', 'Age:', 34);
SELECT LENGTH('Tom Smith');
SELECT LTRIM(' Apple');
SELECT RTRIM('Apple     ');
SELECT TRIM(' Apple ');
SELECT LOCATE('om', 'Tom Smith');
SELECT LEFT('Apple', 3);
SELECT RIGHT('Apple', 3);
SELECT SUBSTRING('Galaxy S8 Plus', 8),
 (SELECT SUBSTRING('Galaxy S8 Plus', 8, 2));
 SELECT SUBSTRING_INDEX('Galaxy S8 Plus', ' ', 1),
 (SELECT SUBSTRING_INDEX('Galaxy S8 Plus', ' ', 2)),
  (SELECT SUBSTRING_INDEX('Galaxy S8 Plus', ' ', -2));
SELECT REPLACE('Galaxy S8 Plus', 'S8 Plus', 'Note 8');
SELECT INSERT('Galaxy S9', 8, 3, 'Note 9');
SELECT REVERSE('123456789');
SELECT LOWER('Apple');
SELECT UPPER('Apple');
SELECT SPACE(8);
SELECT REPEAT('iPhone', 5);
SELECT LPAD('Tom Smith', 13, '*');
SELECT RPAD('Tom Smith', 13, '*');
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
SELECT UPPER(LEFT(Manufacturer, 2)) AS Abbreviation,
    CONCAT(ProductName, ' - ', Manufacturer) AS FullProdName
FROM Products
ORDER BY Abbreviation;