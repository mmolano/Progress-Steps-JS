const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const glob = require("glob");
const _ = require('lodash');

const handler = (percentage, message, ...args) => {
    const percent = (percentage * 100).toFixed(2);
    const msg = message.toUpperCase();
    const argsDef = (args.length === 0) ? "" : args.join(" | ");
    console.info(`${percent}%`, msg, argsDef);
};

const entry = Object.assign({},
    _.reduce(glob.sync("./src/js/*.js"),
        (obj, val) => {
            const filenameRegex = /([\w\d_-]*)\.?[^\\\/]*$/i;
            obj[val.match(filenameRegex)[1]] = val;
            return obj;
        },
        {}));


module.exports = (env, options) => { console.log(`This is the Webpack 4 'mode': ${options.mode}`);
    return [{
        entry,
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'js/[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
            ]
        },
        plugins: [
            // new webpack.ProgressPlugin(handler),
            // new BundleAnalyzerPlugin()
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    node_vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "all",
                        priority: 1
                    }
                }
            }
        }
    }]};
