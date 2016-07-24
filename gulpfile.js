// https://www.sitepoint.com/simple-gulpy-workflow-sass/

// using the link above as a starting point -- will include comment files linking to other resources
// like these:
//  https://www.sitepoint.com/using-source-maps-debug-sass-chrome/
//
//================================
// No surprises here -- gulp + gulp-sass
// be sure to npm i --save-dev gulp  (unless this is for a heroku deploy, then just include it in regular
// dependencies, same for gulp-sass)
//================================
var gulp = require('gulp');
var sass = require('gulp-sass');
//==================================
// source-map stuff
var sourcemaps = require('gulp-sourcemaps');
// Enabling Source Maps in node-sass Plugins
// grunt-contrib-sass
// options section of your Gruntfile.js to set sourcemap: true (gulpfile too? need to check...)
// gulp-sass
//  'map' in gulp-sass will enable source maps in Gulp
// broccoli-sass
// sourceMap: true will enable source maps.
//===================================
var input = './stylesheets/**/*.scss';
var output = './public/css';
// either make dir structure match this, or edit this to match directory structure
gulp.task('sass', function () {
    return gulp
    // Find all `.scss` files from the `stylesheets/` folder
        .src(input)
        // Run Sass on those files
        .pipe(sass())
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});

//================================================
//
//================================================

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
});

