const conf = require('./conf');

module.exports = (config) => {
    config.set({
        basePath: './',
        logLevel: 'INFO',
        browsers: [
            'Chrome'
        ],
        frameworks: [
            'mocha',
            'chai'
        ],
        files: [
            'node_modules/es6-shim/es6-shim.js',
            conf.path.src('index.spec.js')
        ],
        preprocessors: {
            [conf.path.src('index.spec.js')]: [
                'webpack'
            ]
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [
                {
                    dir: conf.paths.coverage,
                    subdir: '.',
                    type: 'html'
                },
                {
                    dir: conf.paths.coverage,
                    subdir: '.',
                    type: 'json'
                }
            ]
        },
        webpack: require('./webpack.conf.test'),
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            require('karma-mocha'),
            require('karma-chai'),
            require('karma-coverage'),
            require('karma-chrome-launcher'),
            require('karma-webpack')
        ]
    });
};
