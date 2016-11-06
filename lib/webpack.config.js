module.exports = {

  entry: "./widgets.jsx",
  output: {
    path: "./",
    filename:  "bundle.js"
  },

  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?4/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
