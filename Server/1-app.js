'use strict';

const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
  console.log('Url: ', req.url);
  console.log('Method: ', req.method);
  console.log('User-Agent: ', req.headers['user-agent']);
  console.log('All headers: ', req.headers);
  res.setHeader('UserId', 12);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Hello Node.js</title>');
  res.write('<meta charset=\"utf-8\" />');
  res.write('</head>');

  // Routing
  if (req.url === '/') {
    res.statusCode = 302;
    res.setHeader('Location', '/news');
  }
  else if (req.url === '/home') {
    res.write('<h2>Home</h2>');
  }
  else if (req.url === '/news') {
    res.write('<h2>News</h2>');
  }
  else if (req.url === '/about') {
    res.write('<h2>About</h2>');
  }
  else if (req.url === '/contact') {
    res.write('<h2>Contacts</h2>');
  } else {
    res.statusCode = 404;
    res.write('<h2>Not found</h2>');
  }
  res.write('</html>');

}).listen(4000, () => console.log('Server started at 4000'));