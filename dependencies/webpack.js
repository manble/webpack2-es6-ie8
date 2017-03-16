/**
 * @description：
 * @author: manble@live.com
 */
'use strict';
var path = require('path');
var webpack = require('webpack');
var utils = require('../utils/utils.js');

var getConfig = function(env) {
    var isDev = env == 'development';
    var plugins = [];
    if (!isDev) {
        plugins = plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: false,
                    warnings: false
                },
                mangle: {
                    screw_ie8: false
                },
                output: {
                    screw_ie8: false,
                    comments: false,
                    ascii_only: true
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        ]);
    }
    return {
        cache: true,
        context: path.join(process.cwd(), ''),
        entry: {
            'common': ['./public/scripts/entry/common.js'],
            'index': ['./public/scripts/entry/index.js']
        },
        output: {
            path: path.join(process.cwd(), './public/dist/scripts/page'),
            filename: '[name].js',
            publicPath: './public/dist/'
        },
        externals: {},
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: [
                        ['es2015', {
                            'loose': true,
                            'modules': false
                        }],
                        'babel-preset-stage-0'
                    ]
                }
            }]
        },
        devtool: isDev ? 'cheap-source-map' : '',
        resolve: {
            extensions: ['.js', '.scss'],
            modules: [path.resolve('./public/scripts/')],
            alias: {}
        },
        plugins: plugins
    };
};


module.exports = function(conf, env) {
    var filelist = [],
        entry = {};
    var _path = path.resolve(process.cwd(), conf.src);
    utils.getFiles(_path, function(_path) {
        filelist.push(_path);
    });
    filelist.forEach(function(item) {
        var arr = utils.slash(item).match(conf.regexp);
        entry[arr[1]] = ['.' + arr[0]];
    });
    filelist = [];

    return utils.extend(getConfig(env), {
        entry: entry
    });
};