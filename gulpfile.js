/**
 * @description：
 * @author: manble@live.com
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var del = require('del');
var gls = require('gulp-live-server');
var webpack = require("webpack");

var devConf = require('./dependencies/conf.js');
var cssMinify = require('./dependencies/cssMinify.js');
var webpackConfig = require('./dependencies/webpack.js');

var env = 'development';
var runServer = function() {
    var server = gls('app.js', {
        env: {
            NODE_ENV: env
        }
    });
    server.start();
    return server;
};

gulp.task('del', function(cb) {
    return del(devConf.del);
});

gulp.task('copy:img', function(cb) {
    var conf = devConf.copyImg;
    return gulp.src(conf.src).pipe(gulp.dest(conf.dist));
});

gulp.task('scss2css', function(cb) {
    var conf = devConf.scss2css;
    return gulp
        .src(conf.src)
        .pipe(newer(conf.dist))
        .pipe(sass({
                includePaths: conf.includePaths,
                outputStyle: 'expanded',
                sourceComments: true
            })
            .on('error', sass.logError))
        .pipe(cssMinify({}, env))
        .pipe(gulp.dest(conf.dist));
});

gulp.task('webpack', function(cb) {
    webpack(webpackConfig(devConf.webpackjs, env), function(err, stats) {
        cb();
    });
});

gulp.task('common', function(cb) {
    runSequence(['del'], ['copy:img'], ['scss2css'], ['webpack'], function() {
        cb();
    });
});

//
gulp.task('dev', function() {
    var conf = devConf.watch;
    env = 'development';
    runSequence(['common'], function() {
        var server = runServer();
        gulp.watch(conf.restart, function(file) {
            server.start.bind(server)();
        });
        gulp.watch(conf.notify, function(file) {
            server.notify.apply(server, [file]);
        });
        gulp.watch(conf.scss2css, ['scss2css']);
        gulp.watch(conf.webpackjs, ['webpack']);
    });
});

gulp.task('production', function() {
    env = 'production';
    runSequence(
        ['common'],
        function() {
            runServer();
        });
});
