var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: false,

  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/build',
    filename: '[name]-[hash].js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules')
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmp.html'
    }),
    new ExtractTextPlugin('[name]-[hash].css')
  ],

  devServer: {
    contentBase: './build',
    colors: true,
    inline: true,
    historyApiFallBack: true
  }
}
