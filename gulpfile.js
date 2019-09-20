//<vars>

const   gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        autoPrefixer    = require('gulp-autoprefixer'),
        browserSync     = require('browser-sync').create(),
        cleanCSS        = require('gulp-clean-css'),
        sourceMaps      = require('gulp-sourcemaps'),
        concat          = require('gulp-concat'),
        imageMin        = require('gulp-imagemin'),
        imageResize     = require('gulp-image-resize'),
        changed         = require('gulp-changed'),
        uglify          = require('gulp-uglify');

var dir_root        = './',
    dir_output      = dir_root + 'web/';
    dir_css_input   = dir_root + 'app/assets/stylesheets/',
    dir_css_output  = dir_root + 'web/assets/stylesheets/',
    dir_js_input    = dir_root + 'app/assets/scripts/',
    dir_js_output   = dir_root + 'web/assets/scripts/',
    dir_img_input   = dir_root + 'app/assets/images/',
    dir_img_output  = dir_root + 'web/assets/images/';

var watch_css       = dir_css_input + '**/*.+(sass|scss)',
    watch_js        = dir_js_input + '**/*.js',
    watch_html      = dir_root + '**/*.html',
    watch_img       = dir_img_input + '**/*.+(jpg|jpeg|png|gif)';

//</vars>


//<functions>

function compileStylesheets() {
    return gulp.src( watch_css )
        .pipe( sourceMaps.init({
            loadMaps: true
        }) )
        .pipe( sass({
            outputStyle: 'expanded'
        }).on( 'error', sass.logError ) )
        .pipe( autoPrefixer('last 2 versions') )
        .pipe( sourceMaps.write() )
        .pipe( gulp.dest(dir_css_output) )
        .pipe( browserSync.stream() );
}

function concatStylesheets() {
    return gulp.src( dir_css_output )
        .pipe( sourceMaps.init({
            loadMaps: true,
            largeFile: true
        }))
        .pipe( concat('app.min.css') )
        .pipe( cleanCSS() )
        .pipe( sourceMaps.write('./maps/') )
        .pipe( gulp.dest(dir_css_input));
}

function concatScripts() {
    return gulp.src( dir_js_input )
        .pipe( concat('app.min.js') )
        .pipe( uglify() )
        .pipe( gulp.dest( dir_js_output ) );
}

function compressImages() {
    return gulp.src( dir_img_input )
        .pipe(changed( dir_img_output) )
        .pipe(imageMin([
            imageMin.gifsicle({
                interlaced: true
            }),
            imageMin.jpegtran({
                progressive: true
            }),
            imageMin.optipng({
                optimizationLevel: 5
            })
        ]))
        .pipe( gulp.dest( dir_img_output ) )
}

function watch() {
    //browsersync init
    browserSync.init({
        open: 'external',
        server: {
            baseDir: './'
        }
    });

    //file compilers
    gulp.watch( watch_css, gulp.series(compileStylesheets, concatStylesheets) );
    gulp.watch( watch_js, concatScripts );
    gulp.watch( watch_img, compressImages );

    //browsersync
    //gulp.watch([ watch_html, watch_css, watch_js ]).on( 'change', browserSync.reload );
}

//</functions>

//<export>

exports.compileStylesheets  = compileStylesheets;
exports.concatStylesheets   = concatStylesheets;
exports.concatScripts       = concatScripts;
exports.compressImages      = compressImages;
exports.watch               = watch;

var build = gulp.parallel( watch );

gulp.task( 'default', build );
//</export>