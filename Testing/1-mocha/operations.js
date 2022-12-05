'use strict';

const multiply = (x, y) => x * y;
const add = (x, y) => x + y;

const multiplyAsync = (a, b, callback) => {
    setTimeout(() => callback(a * b), 1000);
}

module.exports = { multiply, add, multiplyAsync };