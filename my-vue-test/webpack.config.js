var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtracTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css?modules'},
      {test: /\.vue$/, loader: 'vue'}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.origin.html'
    })
  ],

  devServer: {
    contentBase: './src',
    colors: true,
    inline: true,
    historyApiFallBack: true
  }
}
