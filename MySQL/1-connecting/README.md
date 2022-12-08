### Download and install MySQL

1. For download MySQL on MacBook M1 enter in terminal:
```
arch -x86_64 brew install mysql
```
or download from official site:
```
https://dev.mysql.com/downloads/mysql/
```
2. Start MySQL server
```
brew services <start / restart / stop> mysql
```
3. For enter to MySQL shell:
```
mysql -u root -p
```
4. Install MySQL driver for Node.js
```
npm install --save mysql2
```
