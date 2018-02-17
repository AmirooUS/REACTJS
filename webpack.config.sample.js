"use strict";

// Import Webpack
const webpack = require('webpack');

// Import Plugins Out of Webpack
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

// Path Constance
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

// Solution for Using ExtractTextPlugin with HotModuleReplacementPlugin
const isProd = process.env.NODE_ENV === 'production';
const cssDev = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: distDir
});
const cssProd = ['style-loader', 'css-loader', 'sass-loader'];
const cssUse = isProd ? cssProd : cssDev;


// Initiate Plugins
const WebpackPlugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Webpack React',
        template: srcDir + '/App.html',
        // minify: {
        //     collapseWhitespace: true
        // },
        hash: true,
        excludeChunks: []
    }),
    new ExtractTextPlugin({
        filename: '[name].bundle.css',
        disable: !isProd,
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()

];

// Webpack Config
const WebpackConfig = {
    entry: {
        index: srcDir + '/App.js'
    },
    output: {
        path: distDir,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: cssUse
            }
        ]
    },
    devServer: {
        public: 'webpackreact.app',
        contentBase: distDir,
        compress: true,
        stats: 'errors-only',
        open: true,
        hot: true
    },
    plugins: WebpackPlugins
};

module.exports = WebpackConfig;
