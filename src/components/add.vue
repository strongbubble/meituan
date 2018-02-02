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
			<dl>
				<dt>联系人</dt>
				<dd>
					<table class="my_tab">
						<tr>
							<td class="one">姓名:</td> 
							<td class="two"><input type="text" placeholder="请填写收货人姓名"/></td>
						<tr>
						<tr>
							<td class="one"></td>
							<td class="two">							
								<input type="radio" name="gender" checked/>先生
								<input type="radio" name="gender"/>女士
							</td>
						</tr>
						<tr>
							<td class="one">电话:</td>
							<td class="two"><input type="text" placeholder="请填写收货手机号码" /></td>
						</tr>
					</table>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
    name: "notFound",
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
	.mine dt{
		height: 0.92rem;
		line-height: 0.92rem;
		width: 100%;
		padding-left: 0.39rem;
		font-size: 0.31rem;
		background: #eee;
		color: #666;
	}
	.mine dd{
		background: #fff;
	}
	.one{
		width: 1.31rem;
		line-height: 1.15rem;
		font-size: 0.36rem;
		padding-left: 0.39rem;
	}
	.two input{
		/*width: 100%;*/
		height: 1.15rem;
		border: 0;
		font-size: 0.36rem;
		border-bottom: 1px solid #e4e4e4;
		border-spacing: border-box;
	}
</style>