const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js',
    },
    devtool: 'inline-source-map',
})
