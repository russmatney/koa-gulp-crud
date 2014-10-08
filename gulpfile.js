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
  gulp.watch(
    ['*.js', 'api/*.js', 'test/*.js'],
    {read: true},
    ['mocha']
  )
});

gulp.task('mocha', function() {
  process.env.NODE_ENV = 'test';
  gulp.src(['test/*.js'])
    .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('test-once', function() {
  gulp.tasks.mocha.fn().pipe(exit());
});

gulp.task('default', ['nodemon', 'watch']);
