const webpack = require("webpack"); 
const path = require("path"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //transfer style vis css not js
const HtmlWebpackPlugin = require('html-webpack-plugin') ; 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development', //development | production
    optimization: {
        minimize: false //for minify .js files
    },
    entry: {//we create new property for each entry point , key is name and value should point to entry point
        'index' : './src/index/index.js' ,
		'hotels' : './src/hotels/hotels.js' ,
		'hotel' : './src/hotel/hotel.js'     
    },
    output: {//for each entry point we create one .js bundle(with the same name of entry point)
        filename: '[name].js',
        path: path.resolve(__dirname, './dist') 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader" ,
				exclude: /node_modules/,
            },
            { //for transfer .css via css files
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development', //for enabling HMR(hot module reloading)
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // { //for transfer .css via js files
            //     test: /\.css$/,
            //     use: ['style-loader','css-loader','postcss-loader']
            // },
            {//for transfer .scss via css files
                test:/\.scss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // { //for transfer .scss via js files
            //     test: /\.scss$/,
            //     use: ['style-loader','css-loader','postcss-loader','sass-loader']
            // },
            {
                test : /\.html$/,
                exclude: /node_modules/,		
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: false , //for minify html or not
                        publicPath: './'
                    }
                }]
            },
            {
                test : /\.(png|jpg|jpeg)$/ ,
                exclude: /node_modules/,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/imgs/',
                            publicPath : 'assets/imgs/'
                        }
                        }
                ]
            },
            {
                test : /\.(ttf|otf|woff|woff2|eot)$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/fonts/',
                            publicPath : 'assets/fonts/'
                        }
                        }
                ]
            },
            {
                test : /\.svg$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/svgs/',
                            publicPath : 'assets/svgs/'
                        }
                        }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ //for each .html file we have one bundle .css file that its name is same as its entry point
            filename: "[name].css", 
            chunkFilename: '[id].css',
            ignoreOrder: false 
        }),
        new HtmlWebpackPlugin({ //for each .html file we need new instance of 'HtmlWebpackPlugin'
            filename: 'index.html' , //name of file inside ./dist folder
            inject: true,
            chunks: ['index'],
            template: './src/index/index.html' //should point to target html file that we want to add <script>,<link>
        }),
        new HtmlWebpackPlugin({
            filename: 'hotels.html' ,
            inject: true,
            chunks: ['hotels'],
            template: './src/hotels/hotels.html'
        }),
		new HtmlWebpackPlugin({
            filename: 'hotel.html' ,
            inject: true,
            chunks: ['hotel'],
            template: './src/hotel/hotel.html'
        }),
        new CleanWebpackPlugin()
    ]
};