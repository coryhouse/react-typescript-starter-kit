var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('browserify'); 
var source = require('vinyl-source-stream');

gulp.task('typescript', function () {
  var tsOut = gulp.src('src/**/*')
    .pipe(ts({
      noImplicitAny: true,
      jsx: 'react',
      module: 'commonjs'
    }));
  return tsOut.js.pipe(gulp.dest('build'));
});

gulp.task('browserify', function() {
  return bundler = browserify({
    entries: ['./build/Goal.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['typescript', 'browserify']);
