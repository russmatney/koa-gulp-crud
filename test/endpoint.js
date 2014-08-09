'use strict';
var app = require('../server.js');
var request = require('co-supertest').agent(app.listen());
var expect = require('chai').expect;

describe('/ endpoint', function() {
  it('should return `Hello, world!`', function*() {
    var res = yield request.get('/').expect(200).end();
    expect(res.text).to.equal('Hello, world!');
  });

  it('should accept an object', function*() {
    var object = {'bar': 'foo', 'fizz': 'buzz'};
    var res = yield request.post('/').send(object).expect(201).end();
    expect(res.body.created_at).to.exist;
    expect(res.body.bar).to.equal('foo');
    expect(res.body.fizz).to.equal('buzz');
  });
});
