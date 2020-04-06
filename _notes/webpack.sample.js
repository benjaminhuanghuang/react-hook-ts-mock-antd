const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  // 我们应用的入口, 在 `src` 目录 (我们添加到下面的 resolve.modules):
  entry: {
    index: "index.tsx",
    vendor: ["react", "react-dom"],
  },

  // 配置 devServer 的输出目录和 publicPath
  output: {
    filename: "[name].[hash:8].js",
    publicPath: "/",
    path: path.resolve("./dist"),
    chunkFilename: "[name].[hash:8].js",
  },

  // 配置 devServer
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    stats: {
      modules: false,
    },
  },

  // 告诉 Webpack 加载 TypeScript 文件
  resolve: {
    // 首先寻找模块中的 .ts(x) 文件, 然后是 .js 文件
    extensions: [".ts", ".tsx", ".js", "css", "less"],

    // 在模块中添加 src, 当你导入文件时，可以将 src 作为相关路径
    modules: ["src", "node_modules"],
  },

  module: {
    loaders: [
      // .ts(x) 文件应该首先经过 Typescript loader 的处理, 然后是 babel 的处理
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
        include: path.resolve("src"),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"],
        }),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热更
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }), //是否打包,初始化参数

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }), //第三方库内容打包
    new CleanWebpackPlugin("dist"), //清理打包文件夹
    new ExtractTextPlugin("[name].[hash:8].css", {
      disable: false,
      allChunks: true,
    }), //样式文件配置
    new HtmlWebpackPlugin({
      template: "./src/keep/index.html",
      hash: false,
    }), //模板文件配置
  ],
};
