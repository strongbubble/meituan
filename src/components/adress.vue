<template>
	<div class="adress">
		<header>
			<ul class="uy">
				<li @click="back"><img src="../../static/images/返回.png" /></li>
				<li>
					<h1>我的收货地址</h1></li>
				<li>
					<p>管理</p>
				</li>
			</ul>
		</header>
		<footer>
			<router-link to="/add">
				<p>
					添加收餐地址
				</p>
			</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "adress",
		data() {
			return {

			};
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="css" scoped>
	.adress {
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	
	header {
		height: 1.15rem;
		line-height: 1.15rem;
		background: #fff;
		border-bottom: 1px solid #b2b2b2;
	}
	
	.uy {
		height: 1.15rem;
		float: left;
	}
	
	.uy li {
		height: 1.15rem;
		float: left;
	}
	
	.uy li:nth-of-type(1) img {
		height: 0.42rem;
		width: 0.42rem;
		margin: 0.39rem 0.65rem 0 0.65rem;
	}
	
	.uy li:nth-of-type(2) {
		width: 6.44rem;
		height: 1.15rem;
	}
	
	.uy h1 {
		line-height: 1.15rem;
		font-size: 0.47rem;
		color: #333;
		text-align: center;
		margin-left: 0 0.65rem;
		font-weight: normal;
	}
	
	.uy p {
		height: 1.15rem;
		line-height: 1.15rem;
		font-size: 0.36rem;
		color: #666;
		text-align: center;
	}
	/*       底部部分              */
	
	footer {
		height: 1.31rem;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 1.31rem;
	}
	
	footer p {
		height: 1.31rem;
		line-height: 1.31rem;
		text-align: center;
		font-size: 0.42rem;
		background-image: url(../../static/mine_img/add_addr_icon.7548c8d7.png);
		background-size: 0.39rem;
		background-repeat: no-repeat;
		background-position: 3.15rem center;
		margin: 0 auto;
	}
	footer a{
		color: #000;
	}
</style>