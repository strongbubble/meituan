<template>
	<div class="add">
		<header>
			<ul class="uy">
				<li @click="back"><img src="../../static/images/返回.png" /></li>
				<li>
					<h1>我的收货地址</h1></li>
				<li>
					<p>保存</p>
				</li>
			</ul>
		</header>
		<!--主体-->
		<div class="mine">
			<h3>联系人</h3>
			<div class="adres">
				<table>
					<tr>
						<td class="one">姓名</td>
						<td class="two"><input type="text" placeholder="请填写收货人姓名" /></td>
					</tr>
					<tr>
						<td class="one"></td>
						<td>
							<div class="men"></div><span>男</span>
							<div class="women"></div><span>女</span>
						</td>
					</tr>
					<tr>
						<td>电话</td>
						<td><input type="text" placeholder="请填写收货人姓名" /></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    name: "add",
    data () {
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

<style>
	.add{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	/*        开头                 */
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
	/*       主体                  */
	.mine h3{
		height: 0.92rem;
		line-height: 0.92rem;
		padding-left: 0.39rem;
		font-size: 0.31rem;
		background: #eee;
		font-weight: normal;
		color: #666;
	}
</style>