const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "../", "public"),
    port: 5001,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: "file-loader",
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            encoding: "base64",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/templates/template.html",
    }),
  ],
};
