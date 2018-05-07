// Include gulp
var gulp = require('gulp');
// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

var babel = require("gulp-babel");

gulp.task('export-fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/fontawesome-webfont.*')
    .pipe(gulp.dest('dist/fonts'))
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'vendor', 'scripts'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


gulp.task('minify-css', function() {
    return gulp.src('dist/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('test/test'));
});


//Transpile, Concatonate and Minify Javascript
gulp.task('vendor', function() {
    return gulp.src('js/vendor/*.js')
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('core.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('compress', function() {
return gulp.src('dist/*.js')
        .pipe(uglify())
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['export-fonts', 'sass', 'vendor', 'scripts', 'serve', 'watch']);
gulp.task('build', ['export-fonts', 'sass', 'vendor', 'scripts', 'minify-css', 'compress']);