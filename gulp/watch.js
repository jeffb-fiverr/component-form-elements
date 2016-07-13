const pkg = require('../package.json');
const gulp = require('gulp');

gulp
    .task('watch', () => {
        gulp.watch([`lib/styles/**/*.scss`, `public/src/**/*.scss`], ['styles']);
        gulp.watch([`lib/templates/**/*.hbs`], ['templates']);
        gulp.watch([`lib/js/**/*.jsx`], ['build']);
        gulp.watch([`public/src/${pkg.moduleName}.jsx`], ['build']);
    });