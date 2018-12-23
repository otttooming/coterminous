const path = require('path');
const include = path.resolve(__dirname, '../');

module.exports = {
  // Add '.ts' and '.tsx' as resolvable extensions.
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@coterminous/ui-library': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/,
        include,
      },
    ],
  },
};
