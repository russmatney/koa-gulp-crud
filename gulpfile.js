'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  mocha = require('gulp-mocha-co'),
  exit = require('gulp-exit'),
  watch = require('gulp-watch');

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    env: { 'NODE_ENV': 'development' },
    nodeArgs: ['--debug=9999', '--harmony-generators']
  }).on('restart');
});

gulp.task('watch', function() {
  gulp.src(['*.js', 'api/*.js', 'test/*.js'], {read: true})
    .pipe(watch({ emit: 'all' }, function (files) {
      process.env.NODE_ENV = 'test';
      files.pipe(mocha({reporter: 'nyan', bail: false}))
        .on('error', function(err) {
        });
    }));
});

gulp.task('test-once', function() {
  process.env.NODE_ENV = 'test';
  gulp.src(['test/*.js'])
    .pipe(mocha({reporter: 'nyan'}))
    .pipe(exit());
});

gulp.task('default', ['nodemon', 'watch']);
