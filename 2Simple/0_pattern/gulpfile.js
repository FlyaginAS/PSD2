'use strict';

/*
*Устанавливаем необходимые пакеты:
gulp
gulp-imagemin
imagemin-jpeg-recompress
* */
let gulp = require('gulp'),
        imagemin = require('gulp-imagemin'),
        pngquant = require('imagemin-pngquant'),
        imgCompress = require('imagemin-jpeg-recompress');
let cache = require('gulp-cache');


gulp.task('pictures', function() {
    return gulp.src('source/pictures/**/*.*')
        .pipe(cache(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imgCompress({
                loops: 5,
                min: 70,
                max: 80,
                quality:'medium'
            }),
            imagemin.svgo(),
            imagemin.optipng({optimizationLevel: 3}),
            pngquant({quality: [0.6, 0.7], speed: 5})
        ],{
            verbose: true
        })))
        .pipe(gulp.dest('products/pic-opt'))
});

// Clearing the cache
gulp.task('clearCache', function (done) {
    return cache.clearAll(done);
});







// gulp.task('pictures', function () {
//     return gulp.src('source/pictures/**/*.*')
//         .pipe(imagemin([
//             imgCompress({
//                 loops: 4,
//                 min: 70,
//                 max: 80,
//                 quality: 'high'
//             }),
//             imagemin.gifsicle(),
//             imagemin.optipng(),
//             imagemin.svgo()
//         ]))
//         .pipe(gulp.dest('products/pic-opt'));
// });