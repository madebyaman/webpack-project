const path = require("path");
const UglifyPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: path.join(__dirname + "/app.js"),

  output: {
    path: path.join(__dirname + "/"),
    filename: "bundle.js",
    publicPath: "/"
  },

  optimization: {
    minimizer: [new UglifyPlugin()]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
