const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {

	mode: 'production',
	devtool: false,
	plugins: [
        new CompressionPlugin({
			test: /\.(js|css|html)/
		}),
	],
	resolve: {
		alias: {
			//			does: path.resolve(__dirname, 'src/does/')
//			"vue$": "vue/dist/vue.esm.js",
//			"vue$": "vue/dist/vue.esm.browser.js"
		}
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			test: /\.js(\?.*)?$/i,
		})],
	},

	output: {
		filename: '[name].[contenthash].js'
	},

});
