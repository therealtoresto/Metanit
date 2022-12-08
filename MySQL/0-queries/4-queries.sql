-- SUBQUERY IN SELECT
DROP TABLE Products;
DROP TABLE Orders;
CREATE TABLE Products
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(30) NOT NULL,
    Manufacturer VARCHAR(20) NOT NULL,
    ProductCount INT DEFAULT 0,
    Price DECIMAL NOT NULL
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
-- WHERE
SELECT * FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);
-- IN
SELECT * FROM Products
WHERE Id IN (SELECT ProductId FROM Orders);
-- NOT
SELECT * FROM Products
WHERE Id NOT IN (SELECT ProductId FROM Orders);
-- ALL / SOME / ANY
SELECT * FROM Products
WHERE Price < ALL(SELECT Price FROM Products WHERE Manufacturer = 'Apple');
SELECT * FROM Products
WHERE Price < (SELECT MIN(Price) FROM Products WHERE Manufacturer = 'Apple');
SELECT * FROM Products
WHERE Price < ANY(SELECT Price FROM Products WHERE Manufacturer = 'Apple');
SELECT * FROM Products
WHERE Price < (SELECT MAX(Price) FROM Products WHERE Manufacturer = 'Apple');
SELECT *,
(SELECT ProductName FROM Products WHERE Id = Orders.ProductId) AS Product
FROM Orders;

-- SUBQUERY IN INSERT
INSERT INTO Orders (ProductId, CreatedAt, ProductCount, Price)
VALUES
(
    (SELECT Id FROM Products WHERE ProductName = 'Galaxy S8'),
    '2022-02-01',
    2,
    (SELECT Price FROM Products WHERE ProductName = 'Galaxy S8')
);

-- SUBQUERY IN UPDATE (SET / WHERE)
UPDATE Orders
SET ProductCount = ProductCount + 2
WHERE ProductId IN (SELECT Id FROM Products WHERE Manufacturer = 'Apple');

UPDATE Orders
SET Price = (SELECT Price FROM Products WHERE Id = Orders.ProductId) + 3000
WHERE Id = 1;

-- SUBQUERY IN DELETE
DELETE FROM Orders
WHERE ProductId = (SELECT Id FROM Products WHERE ProductName = 'Galaxy S8');

-- EXIST OPERATOR
SELECT * FROM Products
WHERE EXISTS
    (SELECT * FROM Orders WHERE Orders.ProductId = Products.Id);
SELECT * FROM Products
WHERE NOT EXISTS
    (SELECT * FROM Orders WHERE Orders.ProductId = Products.Id);
SELECT * FROM Products
WHERE Id NOT IN (SELECT ProductId FROM Orders);

SELECT * FROM Products;
SELECT * FROM Orders;