const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        overlay: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(sass|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'prettier-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: './assets/images/[name].[ext]',
                },
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: './assets/fonts/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
}
