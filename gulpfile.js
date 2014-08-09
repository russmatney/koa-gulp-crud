'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    env: { 'NODE_ENV': 'development' },
    nodeArgs: ['--debug=9999', '--harmony-generators']
  }).on('restart');
});

gulp.task('default', ['nodemon']);
