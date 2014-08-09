var parse = require('co-body');

module.exports.show = function*() {
  //TODO: pull from db
  this.body = 'Hello, world!';
}

module.exports.create = function*() {
  var object = yield parse(this);
  object.created_at = new Date;
  //TODO: insert into db
  this.status = 201;
  this.body = object;
}
