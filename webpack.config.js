const path = require('path');

module.exports = {
  entry: './src/app.ts',
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};