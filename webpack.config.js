const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',

    // With the following line uncommented, loading the page gives the following errors in the console:
    // warning.js:44Warning: Group(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.warning @ warning.js:44
    // invariant.js:45Uncaught Invariant Violation: Group(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.
    //
    // If you comment it out, the page loads and displays the React logo
    'react-hot-loader/patch',

    './src/index.jsx',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Hot Loader and ReactART Bug',
      hash: true,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'node_modules'),
  },
};
