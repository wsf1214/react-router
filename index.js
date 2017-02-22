import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory , IndexRoute} from 'react-router'
import Home from './modules/Home'
import Detail from './modules/Detail'
import Good from './modules/Good'
import Find from './modules/Find'
import Cart from './modules/Cart'
import User from './modules/User'
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
     		<IndexRoute component={Home}/>
  			<Route path="/detail/:type" component={Detail}></Route>
			<Route path="/good" component={Good}></Route>
			<Route path="/find" component={Find}></Route>
			<Route path="/cart" component={Cart}></Route>
			<Route path="/user" component={User}></Route>
    </Route>
  </Router>
), document.getElementById('app'));


