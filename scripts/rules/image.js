/**
 * Created by lenovo on 2017/6/19.
 */
module.exports={
	test: /\.(png|jpe?g|gif|svg)$/i,
	use:[{
		loader:"url-loader",
		options:{limit:10240,name:"assets/[name].[ext]"}
	}]
};