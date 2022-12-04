'yse strict';

const express = require('express');
const app = express();

app.get('/products/:productId', (req, res) => {
    res.send('productId: ' + req.params['productId']);
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const catId = req.params['categoryId'];
    const prodId = req.params['productId'];
    res.send(`Category: ${catId} Product: ${prodId}`)
});

app.get('/book/:pageName.:pageExt', (req, res) => {
    const pageName = req.params['pageName'];
    const pageExt = req.params['pageExt'];
    res.send(`Requested file: ${pageName}.${pageExt}`);
});

app.listen(3000);