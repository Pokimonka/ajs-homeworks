const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.config.js");
const productionConfig = require("./webpack.production.config.js");
const developmentConfig = require("./webpack.development.config.js");

module.exports = function (env) {
    console.log(env);
    if (env.development) {
        return merge(commonConfig, developmentConfig);  
    }
    else {
        return merge(commonConfig, productionConfig);
    }
}