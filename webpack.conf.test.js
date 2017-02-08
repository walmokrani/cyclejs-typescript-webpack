const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /.json$/,
                use: 'json-loader'
            },
            {
                test: /.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /.html$/,
                use: 'html-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules|(.spec\.ts)/,
                loader: 'istanbul-instrumenter-loader',
                query: {
                    esModules: true
                },
                enforce: 'post'
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                resolve: {},
                ts: {
                    configFileName: 'tsconfig.json'
                },
                tslint: {
                    configuration: require('./tslint.json')
                }
            },
            debug: true
        })
    ],
    devtool: 'source-map-inline',
    resolve: {
        extensions: [
            '.webpack.js',
            '.web.js',
            '.js',
            '.ts'
        ]
    }
};
