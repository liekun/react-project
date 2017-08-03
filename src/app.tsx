import Home from "./components/Home";
/**
 * Created by AoSnow on 2017/6/19.
 */
	// 一定要置于引用该函数的模块之前进行定义，否则可能 undefined
const alias = process.env.ALIAS;

/**
 * 根据当前是否使用虚拟路径来动态修改开发环境和发布环境所对应的正确目录结构
 * <p>所有运用到路由路径的值，都应该使用该函数进行转换</p>
 * <p>
 *     例如虚拟目录为：http://127.0.0.1/cook/ ，意思就是项目的dist应该与此网址对应
 *     而原来的 / 或者 /home 转换为正确路径为：
 *     http://127.0.0.1/cook/
 *     http://127.0.0.1/cook/home
 * </p>
 * @param path
 * @returns {string}
 */
export function art( path:string )
{
	return alias ? `/${alias}${path}` : path;
}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import CStartup from "./container/CStartup";
import "./css/app";
import store, { history as browserHistory } from "./store/store";
import Login from "./components/Login";
import Startup from "./pages/Startup";
import Foodshow from "./components/Foodshow";
import Menu from "./components/Menu";
import Cook from "./components/Cook";
import Thechef from "./components/Thechef";
import Classification from "./components/Classification";
import Cookbooktwo from "./components/Cookbooktwo";

import Fooddetail from "./components/Fooddetail";

// const Home =
// 	( { match, location, history }:RouteComponentProps<any> ) => (
// 		<div>
// 			<p>HOME - 首页</p>
// 			<Link to={art( "/list" )}>列表页</Link>
// 			<p>{match.path}</p>
// 			<p>{location.pathname}</p>
// 			<p>{history.length}</p>
// 		</div>
// 	);
//
// const List = () => (
// 	<p>LIST - 列表页</p>
// );

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={browserHistory}>
			<Switch>
				<Route exact={true} path={art( "/" )} component={CStartup}/>
				<Route path={art( "/Startup" )} component={Startup}/>
				<Route path={art( "/Login" )} component={Login}/>
				<Route path={art( "/Home" )} component={Home}/>
				<Route path={art( "/Thechef" )} component={Thechef}/>
				<Route path='/classification' component={Classification}/>
				<Route path={art( "/Foodshow" )} component={Foodshow}/>
				<Route path={art( "/Menu" )} component={Menu}/>
				<Route path={art( "/Cook" )} component={Cook}/>
				<Route path={art( "/Cookbooktwo" )} component={Cookbooktwo}/>
				<Route path={art( "/Fooddetail" )} component={Fooddetail}/>
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById( 'app' )
);
