const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'Products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductList': './src/index.js',
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}