// const { src, dest } = require('gulp');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { async } = require('q');
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var rsync = require('gulp-rsync');
var bower = require('gulp-bower');
const fileinclude = require('gulp-file-include');
var sourcemaps = require('gulp-sourcemaps');
let lec = require('gulp-line-ending-corrector');
var gulpversion = '4';
gulp.task('bower', function() {
    return bower({ directory: 'app/' })
});



// #3 target the source files. Mine are located in the source/templates folder. ** means all the folders. * means all the files
// #3 target the source files. Mine are located in the source/templates folder. ** means all the folders. * means all the files
gulp.task('fileinclude', function() {
    gulp.src(['app/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({ stream: true }))
});
// for minimize image 
// gulp.task('imgminify', async function() {
//     gulp.src('app/img/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('output'))
//         .pipe(browserSync.reload({ stream: true }))
// })

gulp.task("jsMin", async() => {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/minify'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task("cssMin", async() => {
    gulp.src('app/style/css/*.css')
        .pipe(cleanCSS({
            inline: ['none']
        }))
        .pipe(gulp.dest('app/style/css/minified_css'))
        .pipe(browserSync.reload({
            stream: true
        }))

})



// gulp.task("jsConnect", async() => {
//     gulp.src('app/js/*.js')
//         .pipe(uglify())
//         .pipe(concat('all_js_files.js'))
//         .pipe(gulp.dest('app/js/_all_minified_js/'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// })

gulp.task('code', function() {
    gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('rsync', function() {
    gulp.src('app/**')
        .pipe(rsync({
            root: 'app/',
            hostname: 'username@yousite.com',
            destination: 'yousite/public_html/',
            // include: ['*.htaccess'], // Includes files to deploy
            exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
            recursive: true,
            archive: true,
            silent: false,
            compress: true
        }))
});

gulp.task("concectLibJS", async() => {
    gulp.src('app/libs/**/*.js')
        .pipe(uglify())
        .pipe(concat('all_js_lib_files.js'))
        .pipe(gulp.dest('app/libs/main/js/_all_js_lib_files/'))
        .pipe(browserSync.reload({ stream: true }))
})
gulp.task("concectLibCSS", async() => {
    gulp.src('app/libs/**/*.css')
        .pipe(cleanCSS({
            inline: ['none']
        }))
        .pipe(concat('all_css_lib_files.css'))
        .pipe(gulp.dest('app/libs/main/css/_all_css_lib_files/'))
        .pipe(browserSync.reload({ stream: true }))
})


gulp.task('browser-sync', async function() {
    var files = [
        'app/template/*.html',
        'app/style/css/*.css',
        'app/js/**/*.js',
        'app/libs/**/*'
    ];
    browserSync.init({
        injectChanges: true,
        server: "app/",
    });

});


gulp.task('sass', function() {
    return gulp.src('app/style/scss/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/style/css'))
        .pipe(browserSync.reload({ stream: true }))
});

if (gulpversion == 3) {
    gulp.task('watch', ['rsync', 'sass', 'code', 'fileinclude', 'browser-sync', 'cssMin', 'jsMin', 'concectLibJS', 'concectLibCSS'], async function() {
        // gulp.watch('app/img/**/*', ['imgminify']);
        gulp.watch('app/js/*.js', ['jsMin']);
        gulp.watch('app/style/css/*.css', ['cssMin']);
        // gulp.watch('app/js/minify/*.js', ['jsConnect']);
        gulp.watch('app/libs/**/*.js', ['concectLibJS']);
        gulp.watch('app/libs/**/*.css', ['concectLibCSS']);
        gulp.watch('app/template/*.html', ['code']);
        gulp.watch('app/**', ['rsync']);
        gulp.watch('app/style/scss/main.scss', ['sass']);
    });
    gulp.task('default', ['watch']);
}


if (gulpversion == 4) {
    gulp.task('watch', async function() {
        // gulp.watch('app/img/**/*', gulp.parallel('imgminify'));
        gulp.watch(['app/js/*.js'], gulp.parallel('jsMin'));
        gulp.watch('app/style/css/*.css', gulp.parallel('cssMin'))
            // gulp.watch('app/js/minify/*.js', gulp.parallel('jsConnect'))
        gulp.watch('app/libs/**/*.js', gulp.parallel('concectLibJS'))
        gulp.watch('app/libs/**/*.css', gulp.parallel('concectLibCSS'))
        gulp.watch('app/**', gulp.parallel('rsync'))
        gulp.watch('app/template/*.html', gulp.parallel('code'))
        gulp.watch('app/style/scss/main.scss', gulp.parallel('sass'))
    });
    gulp.task('default', gulp.parallel('browser-sync', 'sass', 'fileinclude', 'rsync', 'code', 'cssMin', 'jsMin', 'concectLibJS', 'concectLibCSS'));
}