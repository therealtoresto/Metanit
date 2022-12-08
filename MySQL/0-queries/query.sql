-- CREATE / USE / DELETE DATABASE
CREATE DATABASE productsdb;

CREATE DATABASE IF NOT EXISTS productsdb;

USE productsdb;

DROP DATABASE productsdb;

-- FOREIGN, PRIMARY KEYS CONSTRAINTS, REFERENCES, ON DELETE  
CREATE TABLE Customers
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Age INT DEFAULT 18 CHECK(Age > 0 AND Age < 100),
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    Email VARCHAR(30) NULL UNIQUE CHECK(Email != ''),
    Phone VARCHAR(13) NULL UNIQUE CHECK(Phone != '')
    CONSTRAINT customers_pk PRIMARY KEY(Id),
    CONSTRAINT customer_phone_uq UNIQUE(Phone),
    CONSTRAINT customer_age_chk CHECK(Age > 0 AND Age < 100)
);

CREATE TABLE Orders
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    ProductId INT NOT NULL,
    ProductCount INT DEFAULT 1,
    CreatedAt DATE NOT NULL,
    Price DECIMAL NOT NULL,
    CONSTRAINT orders_customers_fk
    FOREIGN KEY (ProductId) REFERENCES Products (Id) ON DELETE CASCADE
);

-- RENAME / CLEAR / DELETE TABLE
RENAME TABLE Customers TO Clients;

TRUNCATE TABLE Clients;

DROP TABLE Clients;

-- MODIFY TABLE
CREATE TABLE OrderLines
(
    OrderId INT,
    ProductId INT,
    Quantity INT,
    Price MONEY,
    PRIMARY KEY(OrderId, ProductId)
);

ALTER TABLE Customers
ADD Address Varchar(50) NULL;

ALTER TABLE Customers
DROP COLUMN Address;

ALTER TABLE Customers
ALTER COLUMN Age SET DEFAULT 22;

ALTER TABLE Customers
MODIFY COLUMN FirstName CHAR(100) NULL;

ALTER TABLE Orders
ADD CONSTRAINT orders_customers_fk
ADD FOREIGN KEY(CustomerId) REFERENCES Customers(Id);

ALTER TABLE Orders
DROP FOREIGN KEY orders_customers_fk;

-- INSERT VALUES
CREATE TABLE Products
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(30) NOT NULL,
    Manufacturer VARCHAR(20) NOT NULL,
    ProductCount INT DEFAULT 0,
    Price DECIMAL NOT NULL
);

ALTER TABLE Products
ADD PRIMARY KEY (Id);

ALTER TABLE Products
DROP PRIMARY KEY;

DROP TABLE Orders;

INSERT Products(ProductName, Manufacturer, ProductCount, Price)
VALUES ('iPhone X', 'Apple', 5, 76000);

INSERT Products(ProductName, Manufacturer, Price)
VALUES ('Galaxy S9', 'Samsung', 63000);

INSERT Products(ProductName, Manufacturer, Price, ProductCount)
VALUES ('Nokia 9', 'HDM Global', 41000, DEFAULT);

INSERT Products(ProductName, Manufacturer, Price, ProductCount)
VALUES ('iPhone XS', 'Apple', 86000, NULL);

INSERT Products(ProductName, Manufacturer, Price, ProductCount)
VALUES
('iPhone 8', 'Apple', 51000, 3),
('P20 Lite', 'Huawei', 34000, 4),
('Galaxy S8', 'Samsung', 46000, 2);

-- SELECT VALUES
SELECT * FROM Products;

SELECT ProductName, Price FROM Products;

SELECT ProductName AS Title, Price * ProductCount AS TotalSum
FROM Products;

SELECT * FROM Products
WHERE Manufacturer = 'Samsung' AND Price > 50000;

SELECT * FROM Products
WHERE Manufacturer = 'Samsung' OR Price > 50000;

SELECT * FROM Products
WHERE NOT Manufacturer = 'Samsung';

SELECT * FROM Products
WHERE Manufacturer = 'Samsung' OR NOT Price > 30000 AND ProductCount > 2;

SELECT * FROM Products
WHERE Manufacturer = 'Samsung' OR NOT (Price > 30000 AND ProductCount > 2);

-- UPDATE VALUES
UPDATE Products
SET Price = Price + 3000;

UPDATE Products
SET Manufacturer = 'Samsung Inc.'
WHERE Manufacturer = 'Samsung';

UPDATE Products
SET Manufacturer = 'Samsung',
    ProductCount = ProductCount + 3
WHERE Manufacturer = 'Samsung Inc.';

UPDATE Products
SET ProductCount = DEFAULT
WHERE Manufacturer = 'Huawei';

-- DELETE VALUES
DELETE FROM Products
WHERE Manufacturer = 'Huawei';

DELETE FROM Products
WHERE Manufacturer = 'Apple' AND Price < 60000;

DELETE FROM Products;

-- QUERIES
-- UNIQUE VALUES
SELECT DISTINCT Manufacturer, ProductCount FROM Products;

-- IN / BETWEEN / LIKE / REGEXP / IS NULL
SELECT * FROM Products
WHERE Manufacturer IN ('Samsung', 'HTC', 'Huawei');

SELECT * FROM Products
WHERE Manufacturer NOT IN ('Samsung', 'HTC', 'Huawei');

SELECT * FROM Products
WHERE Price BETWEEN 20000 AND 50000;

SELECT * FROM Products
WHERE Price NOT BETWEEN 20000 AND 50000;

SELECT * FROM Products
WHERE ProductName LIKE 'iPhone%';

SELECT * FROM Products
WHERE ProductName REGEXP '^iPhone|^Galaxy';

SELECT * FROM Products
WHERE ProductCount IS NULL;

-- ORDER BY [DESK/ASK] / LIMIT
SELECT * FROM Products
ORDER BY Price;

SELECT ProductName, ProductCount * Price AS TotalSum
FROM Products
ORDER BY TotalSum DESC;

SELECT ProductName, Price, Manufacturer
FROM Products
ORDER BY Manufacturer ASC, ProductName DESC;

SELECT * FROM Products
LIMIT 3;

SELECT * FROM Products
ORDER BY ProductName
LIMIT 2, 3;

-- AGGREGATE FUNCTIONS: AVG / SUM / MIN / MAX / COUNT [ALL / DISTINCT]
SELECT AVG(Price) AS Average_Price FROM Products;

SELECT AVG(Price) FROM Products
WHERE Manufacturer = 'Apple';

SELECT COUNT(Manufacturer) FROM Products;

SELECT MIN(Price), MAX(Price) FROM Products;

SELECT SUM(ProductCount) FROM Products;

SELECT COUNT(DISTINCT Manufacturer) FROM Products;

SELECT COUNT(*) AS ProdCount,
    SUM(ProductCount) AS TotalCount,
    MIN(Price) AS MinPrice,
    MAX(Price) AS MaxPrice,
    AVG(Price) AS AvgPrice
FROM Products;

-- GROUP BY / HAVING
SELECT Manufacturer, COUNT(*) AS ModelsCount
FROM Products
GROUP BY Manufacturer
HAVING COUNT(*) > 1;

-- SUBQUERY
INSERT INTO Products (ProductName, Manufacturer, ProductCount, Price)
VALUES ('iPhone X', 'Apple', 2, 76000),
('iPhone 8', 'Apple', 2, 51000),
('iPhone 7', 'Apple', 5, 42000),
('Galaxy S9', 'Samsung', 2, 76000),
('Galaxy S8', 'Samsung', 1, 46000),
('Honor 10', 'Huawei', 2, 26000),
('Nokia 8', 'HMD Global', 6, 38000);

INSERT INTO Orders (ProductId, CreatedAt, ProductCount, Price)
VALUES (
    (SELECT Id FROM Products WHERE ProductName = 'Galaxy S8'),
    '2022-12-07',
    2,
    (SELECT Price FROM Products WHERE ProductName = 'Galaxy S8')
), (
    (SELECT Id FROM Products WHERE ProductName = 'iPhone X'),
    '2022-12-05',
    1,
    (SELECT Price FROM Products WHERE ProductName = 'iPhone X')
), (
    (SELECT Id FROM Products WHERE ProductName = 'iPhone 8'),
    '2022-12-05',
    1,
    (SELECT Price FROM Products WHERE ProductName = 'iPhone 8')
);

SELECT * FROM Orders
WHERE Price = (SELECT MIN(Price) FROM Orders);

-- CORRELATED SUBQUERY
SELECT CreatedAt, Price,
    (SELECT ProductName FROM Products
    WHERE Products.Id = Orders.ProductId) AS Product
FROM Orders;

SELECT ProductName, Manufacturer, Price,
    (SELECT AVG(Price) FROM Products AS SubProds
    WHERE SubProds.Manufacturer = Prods.Manufacturer) AS AvgPrice
FROM Products AS Prods
WHERE Price >
    (SELECT AVG(Price) FROM Products AS SubProds
    WHERE SubProds.Manufacturer = Prods.Manufacturer);