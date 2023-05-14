const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'src')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../chatgptwordle/static'),
    filename: 'index.js',
  }
};