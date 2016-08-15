var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  // entry: {
  //   app: path.resolve(APP_PATH, 'index.jsx')
  // },
  entry: [
    'webpack/hot/only-dev-server',
    path.resolve(APP_PATH, 'index.jsx')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.json']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', include: APP_PATH, query: {presets: ['es2015', 'react']}},
      {test: /\.js?$/, loader: 'babel', include: APP_PATH, query: {presets: ['es2015']}},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/,loaders: ['style', 'css', 'sass']}
    ]
  }
  ,
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: '_YOUNG'
    // })
    // new webpack.NoErrorsPlugin()
  ]
}
