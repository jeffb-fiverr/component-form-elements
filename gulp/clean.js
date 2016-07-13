const pkg = require('../package.json');
const gulp = require('gulp');
const del = require('del');

gulp
    .task('clean', () => {
        return del([
            'dist',
            'public/build'
        ]);
    })
    .task('clean:js', () => {
        return del([
            'dist/js',
            `public/build/${pkg.moduleName}.js`
        ]);
    })
    .task('clean:css', () => {
        return del([
            '.sass-cache'
        ]);
    });