import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	getInitialState(){
		return {
			imgsList:"",
			proLists:""
		}
	},
	componentWillMount(){
		var that=this;
		var imgs=[
			"img/1.jpg",
			"img/2.jpg",
			"img/3.jpg",
			"img/4.jpg",
			"img/5.jpg"
		];
		var imgArr=[];
		for(var i=0;i<imgs.length;i++){
			imgArr.push(<div className="swiper-slide" key={Math.random()}><img src={imgs[i]}/></div>)
		};
		that.setState({
			imgsList:imgArr	
			
		})
		$.getJSON("json/home.json",function(res){
			var data=res[0];
			var len=data.length;
			var arr=[];				
			for(var i=0;i<len;i++){
				arr.push(<li key={Math.random()} data-goods={JSON.stringify(data[i])}>
				<NavLink to={{pathname:'/detail/1',query:data[i]}}>
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
				</NavLink></li>)
			}
			that.setState({
				proLists:arr,

			})
		})
	},
  render() {
    return (
    	<div id="headerContent">
    		<div id="homeHeader">惠品折</div>
    		<div id="homeContent">
				<div className="swiper-container" id="homeSwiper">
				    <div className="swiper-wrapper">
				        {this.state.imgsList}
				    </div>
				    <div className="swiper-pagination"></div>				   
				</div>
				<ul className="homeLinks">
					<li>
						<img src="img/qiandao.png" />
						签到金币
					</li>
					<li>
						<img src="img/duihuan.png" />
						惠币兑换
					</li>
					<li>
						<img src="img/shiyong.png" />
						免费试用
					</li>
					<li>
						<img src="img/jinri.png" />
						今日上新
					</li>
				</ul>
				<div className="linksBottom">
					<img src="img/5.jpg"/>
				</div>
				<ul className="gos">
					<li>
						<img src="img/go1.jpg" />
					</li>
					<li>
						<img src="img/go2.jpg" />
					</li>
				</ul>
				<div className="swiper-container" id="homeSwiper2">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide">
				        	<div className="img">
				        		1
				        	</div>
				        	<div className="text">
				        		<p>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</p>
				        		<span>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</span>
				        	</div>
				        </div>
				        <div className="swiper-slide">
				        	<div className="img">
				        		2
				        	</div>
				        	<div className="text">
				        		<p>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</p>
				        		<span>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</span>
				        	</div>
				        </div>
				       <div className="swiper-slide">
				        	<div className="img">
				        		3
				        	</div>
				        	<div className="text">
				        		<p>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</p>
				        		<span>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</span>
				        	</div>
				        </div>
				        <div className="swiper-slide">
				        	<div className="img">
				        		4
				        	</div>
				        	<div className="text">
				        		<p>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</p>
				        		<span>测试字测试字测试字测试字测试字测试字测试字测试字测试字测试字</span>
				        	</div>
				        </div>
				    </div>				   			   
				</div>
				<ul className="proTops">
					<li>
						今日推荐
					</li>
					
				</ul>
				<ul className="homePros">
					{this.state.proLists}	
				</ul>
    		</div>
    	</div>
    	)
  },
	componentDidMount(){
		var that=this;
		var swiper = new Swiper("#homeSwiper",{
			pagination:".swiper-pagination",
			autoplay:2000,
			loop:true,
			speed:1000,
			autoplayDisableOnInteraction:false
		})	
		var swiper2 = new Swiper("#homeSwiper2",{
			autoplay:2000,
			loop:true,
			speed:1000,
			direction:"vertical",
			autoplayDisableOnInteraction:false
		})	
	}
})

