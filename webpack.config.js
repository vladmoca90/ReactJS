const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './scripts/js/profile.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ["@babel/env", "@babel/react"]
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: 'sites/profile.html'
      })
   ]
}