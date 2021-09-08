const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./client-src/js/main.js'],
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'client-src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": {
                                "browsers" : ["last 2 versions", "ie >= 11"]
                              },
                                "useBuiltIns": "usage",
                                "corejs": {
                                    version: 3,
                                    proposals: true
                                }
                            }]
                        ],
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    "sass-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: path.resolve(__dirname, 'client-src'),
                        publicPath: "/static/images/"
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Airbnb',
            minify: {
                collapseInlineTagWhitespace: true
            },
            hash: true,
            template: './client-src/html/index.html'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    mode: 'development'
};