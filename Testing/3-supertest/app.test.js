'use strict';

const request = require('supertest');
const assert = require('assert');
const app = require('./app').app;

const testMain = () => {
    request(app)
        .get('/')
        .expect('Hello test')
        .end((err, done) => {
            if (err) throw new Error('1: Test is not passed');
            if (done) console.log('1: Test is passed!');
        });
};

const testError = () => {
    request(app)
        .get('/error')
        .expect(404)
        .expect('Not found')
        .end((err, done) => {
            if (err) throw new Error('2: Test is not passed');
            if (done) console.log('2: Test is passed!');
        });
};

const testUser = () => {
    request(app)
        .get('/user')
        .expect((res) => {
            assert.deepEqual(res.body, { name: 'Tom', age: 22 });
        })
        .end((err, done) => {
            if (err) throw new Error('3: Test is not passed');
            if (done) console.log('3 Test is passed!');
        });
};

testMain();
testError();
testUser();