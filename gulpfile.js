const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        sourceMaps  = require('gulp-sourcemaps'),
        concat      = require('gulp-concat'),
        clean       = require('gulp-clean'),
        cleanCSS    = require('gulp-clean-css'),
        uglify      = require('gulp-uglify'),
        pipeline    = require('readable-stream').pipeline,
        imageResize = require('gulp-image-resize'),
        rename      = require('gulp-rename'),
        imageMin    = require('gulp-imagemin'),
        changed     = require('gulp-changed'),
        browserSync = require('browser-sync').create();

var dir_app         = './app',
    dir_web         = './web',
    dir_css         = '/assets/stylesheets',
    dir_css_app     = dir_app+dir_css,
    dir_css_web     = dir_web+dir_css,
    dir_js          = '/assets/scripts',
    dir_js_app      = dir_app+dir_js,
    dir_js_web      = dir_web+dir_js,
    dir_img         = '/assets/images',
    dir_img_app     = dir_app+dir_img+'/*',
    dir_img_web     = dir_web+dir_img,
    watch_css_app   = dir_css_app+'/**/*.+(sass|scss)',
    watch_css_web   = dir_css_web+'/**/*.css',
    watch_js        = '/**/*.js',
    watch_js_app    = dir_js_app+watch_js,
    watch_js_web    = dir_js_web+watch_js,
    watch_html      = '/**/*.html',
    watch_html_app  = dir_app+watch_html,
    watch_html_web  = dir_web+watch_html;

function compileCSS() {
    return  gulp.src(watch_css_app)
            .pipe(sourceMaps.init({loadMaps:true}))
            .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest(dir_css_web))
            .pipe(browserSync.stream());
}

function concatCSS() {
    return  gulp.src(watch_css_web)
            .pipe(sourceMaps.init({loadMaps:true,largeFile:true}))
            .pipe(concat('app.min.css'))
            .pipe(cleanCSS())
            .pipe(sourceMaps.write('./maps/'))
            .pipe(gulp.dest(dir_css_web))
            .pipe(browserSync.stream());
}

function concatJS() {
    return  pipeline(
                gulp.src(watch_js_app),
                concat('app.min.js'),
                uglify(),
                gulp.dest(dir_js_web)
            );
}

function resizeImg() {
    return  gulp.src(dir_img_app)
            .pipe(imageResize({percentage:58}))
            .pipe(rename({suffix:'.mobile'}))
            .pipe(gulp.dest(dir_img_app))
}

function optimizeImg() {
    return  gulp.src(dir_img_app)
            .pipe(changed(dir_img_web))
            .pipe(imageMin([
                imageMin.gifsicle({interlaced:true}),
                imageMin.jpegtran({progressive:true}),
                imageMin.optipng({optimizationLevel:5})
            ]))
            .pipe(gulp.dest(dir_img_web));
}

function watch() {
    browserSync.init({open:'external',server:{baseDir:'./'}});
    gulp.watch(watch_css_app, gulp.series(compileCSS, concatCSS));
    gulp.watch(watch_js_app, concatJS);
    gulp.watch(dir_img_app, gulp.series(resizeImg, optimizeImg));
    gulp.watch([watch_html_web, watch_js_app, watch_css_web+'app.min.css']).on('change', browserSync.reload);
}

exports.compileCSS  = compileCSS;
exports.concatCSS   = concatCSS;
exports.concatJS    = concatJS;
exports.resizeImg   = resizeImg;
exports.optimizeImg = optimizeImg;
exports.watch       = watch;

gulp.task('default', watch);