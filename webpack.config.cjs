const path = require('path');

module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src'), // Adjust this path to your project structure
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', // Ensure 'ts-loader' is specified here
                exclude: /node_modules/,
            },
        ],
    },
};
