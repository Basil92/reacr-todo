var path = require('path');
var webpack = require('webpack');

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
        }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        stats: 'errors-only',
        open: true
    }
}
