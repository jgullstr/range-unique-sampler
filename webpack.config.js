const path = require("path");

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'build.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            }
        ]
    }
}