var path = require('path');

var node_dir = __dirname + '/node_modules';
module.exports = {
    entry: './app.js',
    devtool: 'sourcemaps',
    cache: false,
    debug: true,
    output: {
        path: __dirname,
        filename: './built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
};