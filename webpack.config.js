const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: "./build",
      writeToDisk: true,
      port:3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
      }),
    ]
  };