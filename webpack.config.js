var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
        {
            test: /\.js(x?)$/,
            exclude: /(node_modules)/,
            use: "babel-loader"
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader",
                publicPath: '/dist'
            })
        }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        stats: 'errors-only',
        open: true
    },
    plugins: [
        new ExtractTextPlugin("index.css"),
        new HtmlWebpackPlugin({
            template: './app/index.html', // Load a custom template
        })

    ]
}
