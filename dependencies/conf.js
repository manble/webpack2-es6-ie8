/**
* @description：配置文件
* @author: manble@live.com
*/
'use strict';
module.exports = {
    dist: './public/dist/',
    del: ['./public/dist/**', './views/release/'],
    watch: {
        scss2css: ['./public/scss/**/*.scss'],
        webpackjs: ['./public/scripts/**/*'],
        restart: ['./app.js', './routes/**/*.js'],
        notify: ['./views/**/*.ejs','./public/images/**/*','./public/dist/styles/**/*.css','./public/dist/**/*.js']
    },
    webpackjs: {
        src: './public/scripts/entry/',
        regexp: /\/public\/scripts\/entry\/(.*)\.js$/
    },
    copyImg: {
        src: ['./public/images/**/*.png', '!./public/images/sprites/**/*.png'],
        dist: './public/dist/images'
    },
    scss2css: {
        src: ['./public/scss/entry/**/*.scss'],
        includePaths: ['./public/scss/', './public/scss/includes/', './public/scripts/'],
        dist: './public/dist/styles/page/'
    }
};
