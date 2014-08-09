var koa = require('koa'),
  logger = require('koa-logger'),
  route = require('koa-route');

var app = module.exports = koa(),
  port = process.env.PORT || 8000,
  env = process.env.NODE_ENV || 'development';

if ('test' == env) { port = 9354; }

app.use(logger());

var endpoint = require('./api/endpoint.js');
app.use(route.get('/', endpoint.show));
app.use(route.post('/', endpoint.create));

if (!module.parent) {
  app.listen(port);
  console.log('listening on port: ' + port + ' in ' + env + ' mode.');
}
