var koa = require('koa'),
  logger = require('logger');

var app = module.exports = koa(),
  port = process.env.PORT || 8000,
  env = process.env.NODE_ENV || 'development';

if ('test' == env) { port = 9354; }

app.use(logger());

app.use(route.get('/', function() {
  console.log('hit');
});

if (!module.parent) {
  app.listen(port);
  console.log('listening on port: ' + port + ' in ' + env + ' mode.');
}
