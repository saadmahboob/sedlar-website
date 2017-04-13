const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    'app': './src/client/main.ts',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js'
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.component.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.ts$/,
        exclude: /\.component.ts$/,
        use: ['ts-loader']
      },
      { 
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.css$/,
        use: ['css-to-string-loader', 'style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['css-to-string-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [
          'file-loader?name=[name].[ext]&outputPath=static/images/'
        ]
      },
      {
        test: /\.(pdf)$/,
        use: [
          'file-loader?name=[name].[ext]&outputPath=static/'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.html', '.css']
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    }),
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './src/client/static', to: 'static/' }
    ]),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })
  ] 
}
