const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({ path: ".env.development" });
}

module.exports = env => {
    const isProduction = env === "production";
   
    return {
        mode: isProduction ? 'production' : 'development',
        entry: ['babel-polyfill', "./src/app.js"],
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: process.env.NODE_ENV === 'development',
                        },
                      },
                      'css-loader',
                      'sass-loader',
                    ],
                  },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({
                "process.env.FIREBASE_API_KEY": JSON.stringify(
                    process.env.FIREBASE_API_KEY
                ),
                "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
                    process.env.FIREBASE_AUTH_DOMAIN
                ),
                "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
                    process.env.FIREBASE_DATABASE_URL
                ),
                "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
                    process.env.FIREBASE_PROJECT_ID
                ),
                "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
                    process.env.FIREBASE_STORAGE_BUCKET
                ),
                "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
                    process.env.FIREBASE_MESSAGING_SENDER_ID
                )
            }),
            new MomentLocalesPlugin()
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };
};

