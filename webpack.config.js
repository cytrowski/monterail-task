const webpack = require('webpack');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: __dirname + "/jsx/index.jsx",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
				}
			}
		]
	},
	output: {
		path: __dirname + "/js/",
		filename: "script.min.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};
