const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: {
		bundle: './src/entries/index.js'
	},
	output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/public"
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
	devServer: {
		host: "0.0.0.0",
		historyApiFallback: true,
		contentBase: './public',
		disableHostCheck: true,
		port: "8000"
	},
};