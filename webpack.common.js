const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// webpack.config.js
module.exports = {
	/* Main entry point of the app. Files listed will be "compiled" and files used by listed files will also be compiled */
	entry: ['@/src/app.js', '@/styles/main.scss'],
	output: {
		path: path.resolve(__dirname, 'build/'), // Use [hash] in both path and publicPath for produktion environment
		publicPath: '/' // The URL-path
	},

	watchOptions: {
		// Watching the node_modules-folder can be slow, resource hogging and very unnecessary
		ignored: /node_modules/
	},

	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js",
			'@': path.resolve(__dirname),
		}
	},

	module: {
		rules: [{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true,
					},
				}, ]
			}, {
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// this will apply to both plain `.js` files
			// AND `<script>` blocks in `.vue` files
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			// this will apply to both plain `.css` files
			// AND `<style>` blocks in `.vue` files
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: {
							// enable CSS Modules
							modules: true,
							// customize generated class names
							localIdentName: '[local]_[hash:base64:8]'
						}
					}
				]
			},

			{
				test: /\.(sa|sc)ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			},			
		],
	},

	plugins: [
		// Generate HTML
		new HtmlWebpackPlugin({
			template: 'html/index.html',
			//			filename: 'index.html',
			//			title: 'tjobba',
		}),
		new VueLoaderPlugin(),
		new CopyPlugin([{
			from: 'images/*',
			to: '.'
		},{
			from: 'images/gallery/*',
			to: '.'
		}]),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
//			filename: devMode ? '[name].css' : '[name].[contenthash].css',
//			chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
	],

};