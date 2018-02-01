<template>
	<div class="mine">
		<div class="leader">
			<img src="../../static/mine_img/default-avatar-1.png" />
			<p>dzu18612452559&nbsp;<span class="span">></span></p>
		</div>
		<!--    主体部分        -->
		<div class="imp">
			<ul>
				<li class="adress">
					<a href="#">
						收货地址管理<span class="span2">></span>
					</a>
				</li>
				<li class="money">
					<a href="#">
						商家代金券<span class="span2">></span>
					</a>
				</li>
				<div></div>
				<li class="yijian">
					<a href="#">
						意见反馈<span class="span2">></span>
					</a>
				</li>
				<li class="ques">
					<a href="#">
						常见问题<span class="span2">></span>
					</a>
				</li>
				<div></div>
			</ul>
		</div>

		<!--      结尾          -->
		<div class="footer">
			<p>
				客服电话: 101-097-77
			</p>
			<div>
				服务时间: 9:00-23:00
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "mine",
		data() {
			return {

			};
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
		}
	}
</script>

<style lang="css" scoped>
	.span {
		font-size: 20px;
		color: #666;
	}
	
	.span2 {
		font-size: 16px;
		color: #ccc;
	}
	
	.mine {
	    width: 100%;
	    height: auto;
	    overflow: hidden;
	}
	
	.leader {
		height: 4.21rem;
		width: 100%;
		position: relative;
		background-image: url('../../static/mine_img/user-banner.png');
	}
	
	.leader img {
		height: 2.05rem;
		width: 2.05rem;
		position: absolute;
		top: 0.78rem;
		left: 3.88rem;
	}
	
	.leader p {
		position: absolute;
		top: 3.15rem;
		left: 3.05rem;
		font-size: 0.42rem;
	}
	
	.leader p span {
		height: 0.42rem;
	}
	/***      主体          ***/
	
	.imp ul li {
		height: 1.18rem;
		background: white;
	}
	
	.imp ul li a {
		width: 9.47rem;
		height: 1.18rem;
		line-height: 1.18rem;
		display: block;
		font-size: 0.36rem;
		color: #333;
		border-bottom: 1px solid #e4e4e4;
		background-size: 0.42rem;
		margin-left: 0.78rem;
		/*background: left center;*/
	}
	
	.adress a {
		background-image: url(../../static/mine_img/user-addr-icon.192fb37b-1.png);
		background-repeat: no-repeat;
		background-position: left center;
		padding-left: 0.78rem;
	}
	
	.money a {
		background-image: url(../../static/mine_img/user-coupon-icon.0e96acbe-1.png);
		background-repeat: no-repeat;
		background-position: left center;
		padding-left: 0.78rem;
	}
	
	.yijian a {
		background-image: url(../../static/mine_img/user-advice-icon.58a5f6d2-1.png);
		background-repeat: no-repeat;
		background-position: left center;
		padding-left: 0.78rem;
	}
	
	.ques a {
		background-image: url(../../static/mine_img/user-problem-icon.df29eb73-1.png);
		background-repeat: no-repeat;
		background-position: left center;
		padding-left: 0.78rem;
	}
	
	.imp ul li a span {
		height: 1.18rem;
		float: right;
		padding-right: 0.52rem;
		line-height: 1.18rem;
	}
	
	.imp ul div {
		height: 0.26rem;
		background: #eee;
	}
	/*       结尾              */
	
	.footer p {
		height: 1.21rem;
		background: #fff;
		text-align: center;
		line-height: 1.21rem;
		font-size: 0.36rem;
		color: #ffb000;
	}
	
	.footer div {
		height: 0.71rem;
		background: #eee;
		color: #999;
		text-align: center;
		font-size: 0.36rem;
		padding-top: 0.21rem;
	}
</style>