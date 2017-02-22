import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'
export default React.createClass({
   render() { 
    return (
      <div id="warp">
        {this.props.children}
        <ul id="footer">
	        <li><NavLink to="/" onlyActiveOnIndex={true}>首页</NavLink></li>
    			<li><NavLink to="/good">优店</NavLink></li>
    			<li><NavLink to="/find">惠发现</NavLink></li>
    			<li><NavLink to="/cart">购物车</NavLink></li>
    			<li><NavLink to="/user">我的</NavLink></li>
        </ul>
      </div>
    )
  }
})
