'use strict';

const request = require('supertest');
const assert = require('assert');

const app = require('./app').app;

describe('Express Tests', () => {
    it ('Should return Hello Test', (done) => {
        request(app)
            .get('/')
            .expect('Hello test')
            .end(done);
    });

    it ('Should return NotFound with status 404', (done) => {
        request(app)
            .get('/error')
            .expect(404)
            .expect('Not found')
            .end(done);
    });

    it ('Should return user with name Tom and age 22', (done) => {
        request(app)
            .get('/user')
            .expect((res) => {
                assert.deepEqual(res.body, { name: 'Tom', age: 22 });
            })
            .end(done);
    });
});