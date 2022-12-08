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

SELECT ProductName, ProductCount,
CASE
    WHEN ProductCount = 1
        THEN 'Product is running out'
    WHEN ProductCount = 2
        THEN 'Few goods'
    WHEN ProductCount = 2
        THEN 'Product available'
    ELSE 'Lots of goods'
END AS Category
FROM Products;

SELECT ProductName, Manufacturer,
    IF(ProductCount > 3, 'Lots of goods', 'Few goods')
FROM Products;
DROP TABLE Clients;
CREATE TABLE Clients
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    Email VARCHAR(30) NULL,
    Phone VARCHAR(13) NULL 
    
);
INSERT INTO Clients (FirstName, LastName, Phone, Email)
VALUES ('Tom', 'Smith', '+3456789', NULL),
    ('Bob', 'Simpson', NULL, NULL);
SELECT FirstName, LastName,
    IFNULL(Phone, 'Undefined') AS Phone,
    IFNULL(Email, 'Unknown') AS Email
FROM Clients;

SELECT FirstName, LastName,
    COALESCE(Phone, Email, 'undefined') AS Contacts
FROM Clients;