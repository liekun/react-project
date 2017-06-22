/**
 * Created by lenovo on 2017/6/20.
 */
const Path=require('path');
const WebpackDelPlugin=require("webpack-del-plugin");

module.exports=function( DIST_DIR )
{
	return new WebpackDelPlugin({
		match:[
			Path.join(DIST_DIR,'*')
		]
	});
};