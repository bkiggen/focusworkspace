const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
        }
    }),
    new HtmlWebpackPlugin({
    template: './src/contact.html',
    filename: 'contact.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
    template: './src/ammenities.html',
    filename: 'ammenities.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
    template: './src/plans.html',
    filename: 'plans.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true
      }
    }),
  ]

};
