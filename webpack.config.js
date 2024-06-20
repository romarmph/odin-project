const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	watch: true,
	entry: './src/js/index.js',
	mode: "development",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	}
};
