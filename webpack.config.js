const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/app.ts",
    devtool: "source-map",
    devServer: {
        path: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: "development",
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['optipng', { optimizationLevel: 5 }]
                ]
            }
        })
    ]
}