'use strict';

const operations = require('./operations');

it ('Should multiply two numbers', () => {
    const expectResult = 15;
    const result = operations.multiply(3, 5);
    if (result !== expectResult) {
        throw new Error(`Expected ${expectResult}, but got ${result}`);
    }
});

it ('Should add two numbers', () => {
    const expectResult = 16;
    const result = operations.add(9, 7);
    if (result !== expectResult) {
        throw new Error(`Expected ${expectResult}, but got ${result}`);
    }
});

it ('Should async multiply two numbers', (done) => {
    const expectResult = 12;
    const result = operations.multiplyAsync(4, 3, (result) => {
        if (result !== expectResult) {
            throw new Error(`Expected ${expectResult}, but got ${result}`);
        }
        done();
    });
});