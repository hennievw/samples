var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

const config = {

  entry: {
    app: "./src/index.tsx"
  },

  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Sample",
      template: "src/index.html",
      chunks: ["app"],
      filename: "./index.html"
    })
  ],

  devtool: "source-map",
  devServer: {
    contentBase: "dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [      
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

module.exports = config;