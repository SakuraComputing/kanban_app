const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
  entry: {
      app: PATHS.app
  },
    output: {
      path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
      rules: [
          {
              loader: 'babel-loader',
              test: /\.js$/,
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: [
                  { loader: 'style-loader'},
                  { loader: 'css-loader'}
              ]
          }
      ]
    }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if(TARGET === 'build') {
    module.exports = merge(common, {});
}