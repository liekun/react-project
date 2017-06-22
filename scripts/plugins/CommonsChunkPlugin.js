/**
 * Created by lenovo on 2017/6/20.
 */
	//通过模块提取
const Webpack=require('webpack');
module.exports =new Webpack.optimize.CommonsChunkPlugin({
	name:['vendor'],
	minChunks:2
});