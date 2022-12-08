--- JOIN
DROP TABLE Orders;
DROP TABLE Customers;
DROP TABLE Employees;
DROP TABLE Products;

CREATE TABLE Products
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(30) NOT NULL,
    Manufacturer VARCHAR(20) NOT NULL,
    ProductCount INT DEFAULT 0,
    Price DECIMAL NOT NULL
);
CREATE TABLE Customers
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    AccountSum DECIMAL
);
CREATE TABLE Employees
(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(20) NOT NULL
);
CREATE TABLE Orders
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    ProductId INT NOT NULL,
    CustomerId INT NOT NULL,
    ProductCount INT DEFAULT 1,
    CreatedAt DATE NOT NULL,
    Price DECIMAL NOT NULL,
    FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE,
    FOREIGN KEY (CustomerId) REFERENCES Customers(Id) ON DELETE CASCADE
);
INSERT INTO Products (ProductName, Manufacturer, ProductCount, Price)
VALUES ('iPhone X', 'Apple', 2, 76000),
('iPhone 8', 'Apple', 2, 51000),
('iPhone 7', 'Apple', 5, 42000),
('Galaxy S9', 'Samsung', 2, 76000),
('Galaxy S8', 'Samsung', 1, 46000),
('Honor 10', 'Huawei', 2, 26000),
('Nokia 8', 'HMD Global', 6, 38000);
INSERT INTO Customers(Firstname) VALUES ('Tom'), ('Bob'), ('Sam');
INSERT INTO Orders (ProductId, CustomerId, CreatedAt, ProductCount, Price)
VALUES (
    (SELECT Id FROM Products WHERE ProductName = 'Galaxy S8'),
    (SELECT Id FROM Customers WHERE FirstName = 'Tom'),
    '2022-12-07',
    2,
    (SELECT Price FROM Products WHERE ProductName = 'Galaxy S8')
), (
    (SELECT Id FROM Products WHERE ProductName = 'iPhone X'),
    (SELECT Id FROM Customers WHERE FirstName = 'Tom'),
    '2022-12-05',
    1,
    (SELECT Price FROM Products WHERE ProductName = 'iPhone X')
), (
    (SELECT Id FROM Products WHERE ProductName = 'iPhone 8'),
    (SELECT Id FROM Customers WHERE FirstName = 'Bob'),
    '2022-12-05',
    1,
    (SELECT Price FROM Products WHERE ProductName = 'iPhone 8')
);
INSERT INTO Customers(FirstName, LastName, AccountSum)
VALUES
    ('Tom', 'Smith', 2000),
    ('Sam', 'Brown', 3000),
    ('Mark', 'Adams', 2500),
    ('Paul', 'Ins', 4200),
    ('John', 'Smith', 2800),
    ('Tim', 'Cook', 2800);
INSERT INTO Employees(FirstName, LastName)
VALUES
    ('Homer', 'Simpson'),
    ('Tom', 'Smith'),
    ('Mark', 'Adams'),
    ('Nick', 'Svenson');

-- IMPLICT JOIN
SELECT * FROM Orders, Customers;

SELECT * FROM Orders, Customers
WHERE Orders.CustomerId = Customers.Id;

SELECT Customers.FirstName, Products.ProductName, Orders.CreatedAt
FROM Orders, Customers, Products
WHERE Orders.CustomerId = Customers.Id AND Orders.ProductId = Products.Id;

SELECT C.FirstName, P.ProductName, O.CreatedAt
FROM Orders AS O, Customers AS C, Products AS P
WHERE O.CustomerId = C.Id AND O.ProductId = P.Id;

-- INNER JOIN
SELECT Orders.CreatedAt, Orders.ProductCount, Products.ProductName
FROM Orders
JOIN Products ON Products.Id = Orders.ProductId;
-- SHORT VARIANT
SELECT O.CreatedAt, O.ProductCount, P.ProductName
FROM Orders AS O
JOIN Products AS P ON P.Id = O.ProductId;
SELECT Orders.CreatedAt, Customers.FirstName, Products.ProductName
FROM Orders
JOIN Products ON Products.Id = Orders.ProductId
JOIN Customers ON Customers.Id = Orders.CustomerId;

-- OUTER JOIN
SELECT FirstName, CreatedAt, ProductCount, Price, ProductId
FROM Customers JOIN Orders
ON Orders.CustomerId = Customers.id;
SELECT FirstName, CreatedAt, ProductCount, Price, ProductId
FROM Customers LEFT JOIN Orders 
ON Orders.CustomerId = Customers.id;
SELECT Customers.FirstName, Orders.CreatedAt,
    Products.ProductName, Products.Manufacturer
FROM Orders
JOIN Products ON Orders.ProductId = Products.Id AND Products.Price > 45000
LEFT JOIN Customers ON Orders.CustomerId = Customers.Id
ORDER BY Orders.CreatedAt;

-- UNION
SELECT FirstName, LastName
FROM Customers
UNION SELECT FirstName, LastName FROM Employees;
-- ALL
SELECT FirstName, LastName
FROM Customers
UNION ALL SELECT FirstName, LastName 
FROM Employees
ORDER BY FirstName;
-- ONE TABLE
SELECT FirstName, LastName, AccountSum + AccountSum * 0.1 AS TotalSum
FROM Customers WHERE AccountSum < 3000
UNION SELECT FirstName, LastName, AccountSum + AccountSum * 0.3 AS TotalSum
FROM Customers WHERE AccountSum >= 3000;
