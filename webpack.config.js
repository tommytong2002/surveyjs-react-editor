const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: [
        "./surveyjs-builder-react.js",
    ],
    module: {

        rules: [
            {test: '/\.js$/', loader: 'babel-loader', exclude: '/node_modules/'},
            {test: '/\.jsx$/', loader: 'babel-loader', exclude: '/node_modules/'},
        ],
        loaders: [
            {loader: 'style-loader!css-loader', test: /\.css$/},
            {loader: 'url-loader', test: /\.(gif|png)$/},
            {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
            {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
            {
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',

                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    },


    output: {
        path: __dirname + "/dist/",
        filename: "surveyjs-builder-react.min.js",
    },

};