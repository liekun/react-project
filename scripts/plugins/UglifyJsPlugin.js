/**
 * Created by lenovo on 2017/6/20.
 */
const Webpack=require("webpack");
module.exports=new Webpack.optimize.UglifyJsPlugin({
	compress:true,
	beautify:true,
	mangle:{
		except:['$super','$','exports','require']
	}
});