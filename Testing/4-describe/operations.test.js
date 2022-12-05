'use strict';

const assert = require('assert');
const operations = require('./operations');

describe('Operation Tests', () => {
    it ('Should multiply two numbers', () => {
        const expected = 15;
        const result = operations.multiply(3, 5);
        assert.equal(result, expected);
    });

    it ('Should add two numbers', () => {
        const expected = 16;
        const result = operations.add(9, 7);
        assert.equal(result, expected);
    });
});
