const path = require("path");
module.exports = {
  entry: path.join(__dirname + "/app.js"),

  output: {
    path: path.join(__dirname + "/"),
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader',
          options: {
          presets: ['@babel/preset-env',  '@babel/preset-react']
          }
        }
      }
    ]
  }
}
