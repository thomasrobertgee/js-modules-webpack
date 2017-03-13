const path = require('path') // a built in module that helps with the path for the file output

const config = {
  entry: './src/index.js', // the entry point
  output: {
    path: path.resolve(__dirname, 'build'), // where the file output will be outputted to
    filename: 'bundle.js' // name of file
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // a regular expression to apply babel to any files ending with .js
      }
    ]
  }

}

module.exports = config
