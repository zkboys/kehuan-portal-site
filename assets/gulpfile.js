(function () {
    'use strict';
    var gulp = require('gulp'),
        less = require('gulp-less'),
        rename = require('gulp-rename'),
        path = require('path'),
        uglify = require('gulp-uglify'),
        minifyCSS = require('gulp-minify-css'),
        concat = require('gulp-concat'),
        autoprefix = require('gulp-autoprefixer'),
        replace = require('gulp-batch-replace'),
        del = require('del'),
        paths = {
            root: './',//当前路径
            source: {
                root: './',
                styles: './less/',
                scripts: './js/',
                fonts: './fonts/',
                img: './img/'
            },
            public: {
                root: '../public',
                styles: '../public/css/',
                scripts: '../public/js/',
                fonts: '../public/fonts/',
                img: '../public/img/'
            }
        };


    gulp.task('styles', function (cb) {

        gulp.src([paths.source.styles + 'index.less'])//标记要处理的文件，读文件过程
            .pipe(less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(autoprefix())//last 2 versions
            .pipe(gulp.dest(paths.public.styles))//处理完成的文件输出位置，写文件过程
            .pipe(minifyCSS({//css压缩
                advanced: false,
                aggressiveMerging: false
            }))
            .pipe(rename(function (path) {//压缩后重命名
                path.basename = path.basename + '.min';
            }))
            .pipe(gulp.dest(paths.public.styles))//输出压缩后的文件
            //.pipe(connect.reload())//本地服务器相关的，如果配置了本地服务器，指的是本地服务器重启
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });

    });

    gulp.task('scripts', function (cb) {//这个一次性处理的有点多,有点慢3.66s
        gulp.src(paths.source.scripts + '*.js')
            .pipe(gulp.dest(paths.public.scripts))
            .pipe(uglify())
            .pipe(rename(function (path) {
                path.basename = path.basename + '.min';
            }))
            .pipe(gulp.dest(paths.public.scripts))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });
    /*
     *
     * 通用工具js合并
     * */
    gulp.task('scripts-util', function (cb) {
        gulp.src(paths.source.scripts + 'util/*.js')
            .pipe(concat('util.js'))
            .pipe(gulp.dest(paths.public.scripts))
            .pipe(uglify())
            .pipe(rename(function (path) {
                path.basename = path.basename + '.min';
            }))
            .pipe(gulp.dest(paths.public.scripts))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });

    gulp.task('img', function (cb) {
        gulp.src([paths.source.img + '*.*'])
            .pipe(gulp.dest(paths.public.img))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });
    gulp.task('fonts', function (cb) {
        gulp.src([paths.source.fonts + '*.*'])
            .pipe(gulp.dest(paths.public.fonts))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });

    gulp.task('bootstrap', function (cb) {
        gulp.src([paths.source.root + 'bootstrap/**'])
            .pipe(gulp.dest(paths.public.root + '/bootstrap'));
    });

    gulp.task('Swiper-3.4.1', function (cb) {
        gulp.src([paths.source.root + 'Swiper-3.4.1/**'])
            .pipe(gulp.dest(paths.public.root + '/Swiper-3.4.1'));
    });


    gulp.task('jquery', function (cb) {
        gulp.src([paths.source.root + 'jquery/**'])
            .pipe(gulp.dest(paths.public.root + '/jquery'))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });

    gulp.task('watch', function () {
        gulp.watch(paths.source.scripts + 'util/*.js', ['scripts-util']).on('change', function (event) {
            watcherLog(event);
        });
        gulp.watch(paths.source.scripts + '*.js', ['scripts']).on('change', function (event) {
            watcherLog(event);
        });
        gulp.watch(paths.source.styles + '*.*', ['styles']).on('change', function (event) {
            watcherLog(event);
        });
    });
    function watcherLog(event) {
        var filePath = event.path;
        var fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
        console.log('File ' + fileName + ' was ' + event.type + ', running tasks...');
    }

    //由于调用顺序问题，这个任务无法加到default中，需要手动处理
    gulp.task('clean', function (cb) {
        del([
            paths.public.root + '/**/*'
        ], {force: true}, cb);
    });
    gulp.task('default', ['img', 'fonts', 'styles', 'scripts', 'scripts-util', 'bootstrap', 'jquery', 'Swiper-3.4.1']);
})();