'use strict';

const express = require('express');
const multer = require('multer');

const app = express();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

app.use(express.static(__dirname));

app.use(multer({ storage: storageConfig }).single('filedata'));

app.post('/upload', (req, res, next) => {
    let filedata = req.file;
    console.log(filedata);
    if (!filedata) res.send('Uploading error');
    else res.send('File uploaded');
});

app.listen(3000, () => console.log('Server started...'));