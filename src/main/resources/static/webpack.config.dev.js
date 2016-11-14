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
                loader: 'babel-loader',
                	query: {
                        plugins: [
                          ["react-transform", {
                            transforms: [{
                              transform: "react-transform-hmr",
                              imports: ["react"],
                              locals: ["module"]
                            }]
                          }]
                        ]
                      }
            },
            
            // CSS
            { 
              test: /\.styl$/, 
              include: path.join(__dirname, 'src'),
              loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    }
};