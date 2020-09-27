const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/images/[name].[ext]',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/fonts/[name].[ext]',
                    },
                ],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: ['babel-loader','prettier-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new miniCss({
            filename: 'style.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets/images',
                    to: './assets/images/',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            template: './src/index.html',
        }),
        new PrettierPlugin({
            printWidth: 80, // Specify the length of line that the printer will wrap on.
            tabWidth: 2, // Specify the number of spaces per indentation-level.
            useTabs: false, // Indent lines with tabs instead of spaces.
            semi: true, // Print semicolons at the ends of statements.
            encoding: 'utf-8', // Which encoding scheme to use on files
            extensions: ['.js', '.ts'], // Which file extensions to process
        }),
        new ESLintPlugin(),
    ],
};
