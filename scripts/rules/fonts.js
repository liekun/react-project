/**
 * Created by lenovo on 2017/6/19.
 */
module.exports={
	test: /\.(woff|woff2|eot|ttf|ico)$/i,
	use:[ {
			loader:"file-loader",
			options:{name:"assets/[name].[ext]"}
		} ]
};