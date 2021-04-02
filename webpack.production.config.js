const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "css", to: "css" },
                { from: "js", to: "js" },
            ],
        }),
    ],
})
