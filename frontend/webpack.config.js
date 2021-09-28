const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    
    entry: ['./src/main.js'],
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Title',
            minify: {
                collapseInlineTagWhitespace: true
            },
            hash: true,
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css?[chunkhash]`,
        })
    ],
    
    output: {
        path: path.resolve(__dirname, '../backend/public'),
        filename: 'bundle.js?[chunkhash]',
        publicPath: '/static/',
        assetModuleFilename: 'images/[name][ext]?[hash]'
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
                use: [
                    process.env.NODE_ENV === 'production'
                      ? MiniCssExtractPlugin.loader
                      : 'style-loader',
                    "css-loader",
                    "sass-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === 'production'
                      ? MiniCssExtractPlugin.loader
                      : 'style-loader',
                    "css-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset'
            },
        ]
    },
    
    devtool: 'inline-source-map',
    
    devServer: {
        port: 9000,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
};