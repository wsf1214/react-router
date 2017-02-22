import React from 'react'
import NavLink from './NavLink'
export default React.createClass({

	getInitialState(){
		console.log(this.props.location.query)
		return {
			type:this.props.params.type=="1"?"/":this.props.params.type,
			goods:this.props.location.query
		}
	},
  render() {
    return (
    	<div id="warp">
	    	<div id="headerContent">
	    		<div id="detailHeader">
	    			<NavLink id="back" to={this.state.type}>&lt;</NavLink>
	    			详情页
	    		</div>
	    		<div id="detailContent">
	    			{this.state.goods.img}
	    		</div>
	    	</div>
	    </div>
    	)
  }
})