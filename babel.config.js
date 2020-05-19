module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['iOS >= 8', 'Android >= 4.4'],
                },
                exclude: ['es7.promise.finally', 'es6.promise'],
                useBuiltIns: 'usage',
                corejs: 2,
                modules: false,
            },
        ],
    ].filter(item => item),
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/syntax-dynamic-import',
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
        'graphql-tag',
    ],
};
