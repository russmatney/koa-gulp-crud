var koa = require('koa'),
  logger = require('koa-logger'),
  route = require('koa-route');

var app = module.exports = koa(),
  port = process.env.PORT || 8000,
  env = process.env.NODE_ENV || 'development';

if ('test' == env) { port = 9354; }

app.use(logger());

app.use(route.get('/', function*() {
  this.body = 'Hello, world!';
}));
var parse = require('co-body');
app.use(route.post('/', function*() {
  var object = yield parse(this);
  this.created_at = new Date;
  //insert into db
  this.status = 201;
  this.body = object;
}));

if (!module.parent) {
  app.listen(port);
  console.log('listening on port: ' + port + ' in ' + env + ' mode.');
}
