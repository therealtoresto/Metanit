'use strict';

const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static(__dirname));
// global
// app.use(multer({ dest: 'uploads' }).single('filedata'));
const upload = multer({ dest: 'uploads' });

//for one function
app.post('/upload', upload.single('filedata'), (req, res, next) => {
    let filedata = req.file;
    console.log(filedata);
    if (!filedata) res.send('Uploading error');
    else res.send('File uploaded');
});

app.listen(3000);