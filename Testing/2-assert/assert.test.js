'use strict';

const assert = require('assert');
const operations = require('./operations');

const test = () => {
    const expected = 15;
    const result = operations.multiply(3, 5);
    assert.equal(result, expected, `1: ${expected} and ${result} is not equal!`);
    assert.notEqual(3, 6);
    console.log('1: Test passed!')
}
test();