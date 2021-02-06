const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name]-[contenthash:4].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[contenthash:4].[ext]",
              outputPath: "images",
              publicPath: "images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 10,
              },
            },
          },
        ],
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
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage", corejs: "2.0.0" }],
          ],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:4].css",
    }),
  ],
};
