const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = Object.keys(pkg.dependencies);

const config = {
    entry: {
        bundle: ['babel-polyfill', './src/index.js'],
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: 'json-loader',
                test: /\.json$/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;