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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
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
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test:/\.html$/,
        loader: 'html-srcsets-loader',
        options: {
          attrs: ['img:src', ':srcset'],
          minimize: true,
          caseSensitive: true,
          removeAttributeQuotes: false,
          minifyJS: false,
          minifyCSS: false
        }
      }
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
