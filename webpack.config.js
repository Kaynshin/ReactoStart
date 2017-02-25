module.exports = {
  entry: ['babel-polyfill', './app'],
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory'],
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true,
  },
};
