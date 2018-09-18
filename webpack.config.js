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
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
    ]

  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/devs.html',
      filename: 'devs.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/media.html',
      filename: 'media.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/screenshots.html',
      filename: 'screenshots.html'
    })
  ]

};
