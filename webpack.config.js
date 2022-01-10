const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    app: './src/app.js', 
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/static", to: "static" },
        { from: "src/index.html", to: "index.html" },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
  },
};