'use strict';
var app = require('../server.js');
var request = require('co-supertest').agent(app.listen());
var expect = require('chai').expect;

describe('/ endpoint', function() {
  it('should return `Hello, world!`', function*() {
    var res = yield request.get('/').expect(200).end();
    expect(res.text).to.equal('Hello, world!');
  });
});
