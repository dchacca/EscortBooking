// webpack.config.js
const path = require('path');
const tailwindcss = require('tailwindcss')
module.exports = {
  // ...
  mode: 'development',
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/js'),
  },
  module: {
    rules: [
        {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options:{
              ident: 'postcss',
              plugins: [
                  tailwindcss('./tailwind.config.js'),
                  require('autoprefixer'),
              ]
            }
          },
        ],

      }
    ],
  },

}