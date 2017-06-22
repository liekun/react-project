/**
 * 组织需要编译的模板列表
 * Created by lenovo on 2017/6/19.
 */
'use strict';
const Path=require("Path");
const HtmlWebpackPlugin=require("html-webpack-plugin");

const CONFIG=require('../templates');

module.exports=function( TPL_DIR )
{
	//导出模板列表
	const pageList=[];

	for(let i=0;i<CONFIG.length;i++)
	{
		let config=CONFIG[i];

		// 图标
		if( !config[ "favicon" ] )
			config[ "favicon" ] = Path.resolve( TPL_DIR, "assets/favicon.ico" );

		// true or "body"	- 加载资源注入到 body 元素底部
		if( !config[ "inject" ] )
			config[ "inject" ] = true;

		//定位到正确的模板路径
		config.template=Path.resolve(TPL_DIR,config.template)
		pageList.push(new HtmlWebpackPlugin(config))
	}
	console.log(pageList);
	return pageList;
};