// http://blog.ponyfoo.com/2014/01/27/my-first-gulp-adventure
var gulp = require('gulp');
var gutil = require('gulp-util');
var bump = require('gulp-bump');
var git = require('gulp-git');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var child_process = require('child_process');
var connect = require('connect');

var BUMP_TYPES = ['major', 'minor', 'patch', 'prerelease'];

gulp.task('lint', function () {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build', ['lint'], function () {
  gulp.src('./src/jquery.textarea_auto_expand.js')
    .pipe(gulp.dest('./dist'))
    .pipe(rename('jquery.textarea_auto_expand.min.js'))
    .pipe(uglify())
    .pipe(size({showFiles: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['build'], function() {
  return gulp.watch('src/*.js', ['build']);
});

gulp.task('validation', function () {
  if (BUMP_TYPES.indexOf(gutil.env.bump) == -1)
    throw new Error('\nbump argument is required for gulp release\nSupported values: major, minor, patch, prerelease\n\nExample:\n\tgulp release --bump major');
});

gulp.task('bump', ['validation', 'build'], function () {
  return gulp.src(['./package.json'])
    .pipe(bump({type: gutil.env.bump}))
    .pipe(gulp.dest('./'));
});

gulp.task('tag', ['bump'], function () {
  var pkg = require('./package.json');
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  return gulp.src('./')
    .pipe(git.commit(message))
    .pipe(git.tag(v, message))
    .pipe(git.push('origin', 'master', '--tags'))
    .pipe(gulp.dest('./'));
});

gulp.task('npm', ['tag'], function (done) {
  child_process
    .spawn('npm', ['publish'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('server', function() {
  connect.createServer(connect.static(__dirname)).listen(3000);
});

gulp.task('browser', ['server'], function() {
  child_process.spawn('open', ['http://localhost:3000/index.html']);
});

gulp.task('test', ['lint', 'mocha']);
gulp.task('ci', ['build']);
//gulp.task('release', ['validation', 'npm']);
gulp.task('release', ['validation', 'bump']);

gulp.task('default', ['watch', 'browser']);
