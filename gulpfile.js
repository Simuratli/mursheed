// const { src, dest } = require('gulp');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { async } = require('q');
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var fileinclude = require('gulp-file-include'),
    gulpversion = '4';


gulp.task('imgminify', async function() {
    gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('output'));
})

gulp.task("jsMin", async() => {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/minify'))
})

gulp.task("cssMin", async() => {
    gulp.src('app/style/css/*.css')
        .pipe(cleanCSS({
            inline: ['none']
        }))
        .pipe(gulp.dest('app/style/css/minified_css'))
})

gulp.task("jsConnect", async() => {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(concat('all_js_files.js'))
        .pipe(gulp.dest('app/js/_all_minified_js/'))
})


gulp.task("concectLibJS", async() => {
    gulp.src('app/libs/**/*.js')
        .pipe(uglify())
        .pipe(concat('all_js_lib_files.js'))
        .pipe(gulp.dest('app/libs/main/js/_all_js_lib_files/'))
})
gulp.task("concectLibCSS", async() => {
    gulp.src('app/libs/**/*.css')
        .pipe(cleanCSS({
            inline: ['none']
        }))
        .pipe(concat('all_css_lib_files.css'))
        .pipe(gulp.dest('app/libs/main/css/_all_css_lib_files/'))
})



if (gulpversion == 3) {
    gulp.task('watch', ['imgminify', 'cssMin', 'jsMin', 'jsConnect', 'concectLibJS', 'concectLibCSS'], async function() {
        gulp.watch('app/img/**/*', ['imgminify']);
        gulp.watch('app/js/*.js', ['jsMin']);
        gulp.watch('app/style/css/*.css', ['cssMin']);
        gulp.watch('app/js/minify/*.js', ['jsConnect']);
        gulp.watch('app/libs/**/*.js', ['concectLibJS']);
        gulp.watch('app/libs/**/*.css', ['concectLibCSS']);
    });
    gulp.task('default', ['watch']);
}


if (gulpversion == 4) {
    gulp.task('watch', async function() {
        gulp.watch('app/img/**/*', gulp.parallel('imgminify'));
        gulp.watch(['app/js/*.js', 'app/js/script.js'], gulp.parallel('jsMin'));
        gulp.watch('app/style/css/*.css', gulp.parallel('cssMin'))
        gulp.watch('app/js/minify/*.js', gulp.parallel('jsConnect'))
        gulp.watch('app/libs/**/*.js', gulp.parallel('concectLibJS'))
        gulp.watch('app/libs/**/*.css', gulp.parallel('concectLibCSS'))
    });
    gulp.task('default', gulp.parallel('imgminify', 'cssMin', 'jsMin', 'jsConnect', 'concectLibJS', 'concectLibCSS'));
}