const gulp = require('gulp');
const pkg = require('../package.json');

const babel = require('gulp-babel');
const react = require('gulp-react');
const webpack = require('gulp-webpack');

gulp
  .task('js:babel', () => {
    return gulp.src(['lib/js/**/*.jsx'])
      .pipe(babel({
        presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest('dist/js'));
  })
  .task('js:runner:stepOne', () => {
    return gulp.src(`public/src/${pkg.moduleName}.jsx`)
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .pipe(gulp.dest('public/build'));
  })
  .task('js:runner:stepTwo', () => {
    return gulp.src(`public/build/${pkg.moduleName}.js`)
      .pipe(webpack({
          output : {
              filename : `${pkg.moduleName}.js`
          }
      }))
      .pipe(gulp.dest('public/build'));
  });