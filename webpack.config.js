const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["webpack-hot-middleware/client", "./src/index.jsx"],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(?:js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
