'use strict';

const nodePath = process.argv[0];
const appPath = process.argv[1];
const name = process.argv[2];
const age = process.argv[3];

console.dir({
    'nodePath':  nodePath,
    'appPath': appPath,
    'name': name,
    'age': age
});