import React from 'react'

export default React.createClass({
	getInitialState(){
		return {
			proLists:""
		}
	},
  render() {
    return (
    	<div id="headerContent">
    		<div id="goodHeader">优店</div>
    		<div id="goodContent">
    			<ul className="proTops">
					<li className="active">
						今日推荐
					</li>
					<li>
						女士
					</li>
					<li>
						男士
					</li>
					<li>
						母婴
					</li>
					<li>
						居家百货
					</li>
				</ul>
				<ul className="homePros">
					{this.state.proLists}	
				</ul>
    		</div>
    	</div>
    	)
  }
  ,componentDidMount(){
  	var that=this;
  	$(".proTops li").tap(function(){
			var index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$.getJSON("json/home.json",function(res){
				var data=res[index];
				var len=data.length;
				var arr=[];
				for(var i=0;i<len;i++){
					arr.push(<li key={Math.random()}>
						<img src={data[i].img} />
						<div className="goods">
							<div className="name">{data[i].info}</div>
							<div className="info">
								<p className="price">
									￥{data[i].price}
									<del>￥{Math.floor(data[i].price*10/data[i].discount).toFixed(2)}</del>
								</p>
								<p className="style">{data[i].style}</p>
							</div>
						</div>
					</li>)
				}
				that.setState({
					proLists:arr
				})
			})
		})
		$(".proTops li").eq(0).trigger("tap")
  }
})