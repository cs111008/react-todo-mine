var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules', 'app/components', 'app/api'],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets/')],
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
