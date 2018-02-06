<template>
	<div class="add">
		<header>
			<ul class="uy">
				<li @click="back"><img src="../../static/images/返回.png" /></li>
				<li>
					<h1>新增收货地址</h1></li>
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
					<tr class="gender">
						<td class="one"></td>
						<td class="two">
							<div id="one">
								<div class="men"></div><span>先生</span>
							</div>
							<div id="two">
								<div class="women"></div><span>女士</span>
							</div>
						</td>
					</tr>
					<tr>
						<td class="one">电话</td>
						<td class="two"><input type="text" placeholder="请填写收货人手机号码" /></td>
					</tr>
				</table>
			</div>
			<!--下半部分-->
			<h3>收货地址</h3>
			<div class="adr">
				<div class="sc">
					<span>小区/大厦/学校 : </span>
					<input type="text" placeholder="点击选择" />
				</div>
				<div class="stair">
					<span>楼号 - 门牌号 : </span>
					<input type="text" placeholder="例16号楼427室" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "add",
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

<style>
	.add {
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
		/*text-align: center;*/
		padding: 0 0.39rem;
	}
	/*       主体                  */
	
	.mine {
		/*padding-left: 0.39rem;*/
		background: #fff;
	}
	
	.mine .one {
		width: 1.31rem;
	}
	
	.adres input {
		width: 8.15rem;
		height: 1.15rem;
		border: none;
		font-size: 0.36rem;
	}
	
	.mine h3 {
		height: 0.92rem;
		line-height: 0.92rem;
		padding-left: 0.39rem;
		font-size: 0.31rem;
		background: #eee;
		font-weight: normal;
		color: #666;
	}
	
	.mine table {
		padding-left: 0.39rem;
		font-size: 0.36rem;
	}
	
	.mine .two {
		border-bottom: 1px solid #e4e4e4;
	}
	
	.men,
	.women {
		height: 0.47rem;
		width: 0.47rem;
		border-radius: 50%;
		border: 1px solid #999;
		margin-top: 0.28rem;
		margin-right: 0.23rem;
	}
	
	.two{
		width: 100%;
		display: flex;
		justify-content: inherit;
	}
	#one,#two{
		height: 1.05rem;
		line-height: 1.05rem;
		display: flex;
		justify-content: flex-start;
	}
	#one div,
	#two div {
		width: 0.39rem;
		height: 0.39rem;
	}
	.two span{
		display: block;
		width: 1.31rem;
		height: 1.05rem;
    	line-height: 0.94rem;
	}
	.men{
		background-image: url(../../static/mine_img/addr_check.611f02ef.png);
		background-size: 0.39rem 0.39rem;
		background-position: left center;
		border: none;
	}
	/*下半部分*/
	.adr .sc input{
		width: 4.94rem;
		height: 1.15rem;
		line-height: 1.15rem;
		padding-left: 0.52rem;
		font-size: 0.34rem;
		color: #333;
		border: 0;
		text-overflow: ellipsis;
		background-image: url(../../static/mine_img/user-addr-icon.192fb37b-1.png);
		background-size: 0.42rem;
		background-repeat: no-repeat;
		background-position: left;
	}
	.sc{
		padding-left: 0.39rem;
		background-image: url(../../static/mine_img/指缘返回2.png);
		background-repeat: no-repeat;
		background-position: right;
	}
	.stair{
		padding-left: 0.39rem;
		line-height: 1.15rem;
	}
	.stair input{
		width: 7.36rem;
		line-height: 1.15rem;
		border: 0;
	}
</style>