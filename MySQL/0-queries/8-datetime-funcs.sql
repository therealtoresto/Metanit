SELECT NOW();
SELECT SYSDATE();
SELECT CURRENT_TIMESTAMP();
SELECT CURRENT_DATE();
SELECT CURDATE();
SELECT CURRENT_TIME();
SELECT CURTIME();
SELECT UTC_DATE();
SELECT UTC_TIME();
SELECT(EXTRACT(HOUR FROM NOW()));
SELECT * FROM Orders
WHERE DATEDIFF(CURDATE(), CreatedAt) = 5;