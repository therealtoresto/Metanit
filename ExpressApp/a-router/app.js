'use strict';

const express = require('express');

const app = express();
// daclaration router
const productRouter = express.Router();
productRouter.use('/create', (req, res) => res.send('Add product'));
productRouter.use('/:id', (req, res) => res.send(`Product ${req.params.id}`));
productRouter.use('/', (req, res) => res.send('Products list'));
// connect router with '/products' end-point
app.use('/products', productRouter);
app.use('/about', (req, res) => res.send('About us'));
app.use('/', (req, res) => res.send('Main page'));

app.listen(3000);
