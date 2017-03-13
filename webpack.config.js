const path = require('path') // a built in module that helps with the path for the file output
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/index.js', // the entry point
  output: {
    path: path.resolve(__dirname, 'build'), // where the file output will be outputted to
    filename: 'bundle.js', // name of file
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // a regular expression to apply babel to any files ending with .js
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 } // 40,000 byte limit
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = config
