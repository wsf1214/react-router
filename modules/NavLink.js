import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
	//console.log(this.props);//对象 {to: "/about", children: "About"} {to: "/repos", children: "Repos"}  引用两次 所以打印两次 	
    return <Link {...this.props} activeClassName="active"/>
  }
})