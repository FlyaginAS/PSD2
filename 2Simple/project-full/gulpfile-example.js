'use strict';
/*
* нужно
* оптимизировать изображения
* собирать спрайты
* олптимизировать стиль автопрефиксер и сжатие
* оптимизировать скрипт преобразовать под старые браузеры и сжать
* */
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const del = require('del');
const pipeline = require('readable-stream').pipeline;
const gulp = require('gulp');

//оптимизация изображений
const imagemin = require('gulp-imagemin');
//сборка спрайта
const svgSprite = require('gulp-svg-sprite');
const spritesmith = require('gulp.spritesmith');//работает

//оптимизация css
const sass= require('gulp-sass');
const minimize = require('gulp-clean-css');
const prefixer = require('gulp-autoprefixer');

//оптимизация js
const uglify  = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const rename = require('gulp-rename');







gulp.task('min', function () {
    return gulp.src('index/sass/main.scss')
        .pipe(sass())
        .pipe(prefixer())
        .pipe(minimize())
        .pipe(gulp.dest('index/sass/main1'));
});
gulp.task('minjs', function () {
    return gulp.src('index/js/main.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('index/js/minjs'))
});
gulp.task('imagemin', function () {
    return gulp.src('index/img/pictures/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('index/img/pictures-optimized'))
});

gulp.task('sprite', function () {
    return gulp.src('index/img/icons/**/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }))
        .pipe(gulp.dest('index/img/sprite'))
});















// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const  debug = require('gulp-debug');
// const gulpIf = require('gulp-if');
// const del = require('del');
// const browserSync = require('browser-sync').create();
// const notify = require('gulp-notify');
// const multipipe = require('multipipe');
//
// // const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// // gulp.task('styles', function () {
// //     return gulp.src('frontend/styles/main.scss' )
// //         .pipe(plumber())
// //         // .pipe(debug({title:'scr'}))
// //         // .pipe(gulpIf(isDevelopment, sourcemaps.init())
// //         .pipe(sass())
// //         .on('error', notify.onError())
// //         // .pipe(debug({title: 'sass'}))
// //         // .pipe(concat('all.css'))
// //         // .pipe(debug({title: ' concat'}))
// //         //     .pipe(gulpIf(isDevelopment, sourcemaps.write())))
// //         .pipe(gulp.dest('public'));
// // });
// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// gulp.task('styles', function () {
//     return multipipe(
//         gulp.src('frontend/styles/main.scss'),
//         gulpIf(isDevelopment, sourcemaps.init()),
//         sass(),
//         gulpIf(isDevelopment, sourcemaps.write()),
//         gulp.dest('public')
//     ).on('error', notify.onError());
// });
// gulp.task('clean', function () {
//     return del('public');
// });
//
// gulp.task('assets', function () {
//     return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
//         .pipe(debug({title:'assets'}))
//         .pipe(gulp.dest('public'));
// });
//
// gulp.task('build', gulp.series(
//     'clean',
//     gulp.parallel('styles', 'assets')));
//
// gulp.task('watch', function () {
//     gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
//     gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
// });
//
//
//
// gulp.task('serve', function () {
//     browserSync.init({
//         server: 'public'
//     });
//     browserSync.watch('public/**/*.*').on('change', browserSync.reload);
// });
//
// gulp.task('dev', gulp.series('build', gulp.parallel( 'watch', 'serve')));

