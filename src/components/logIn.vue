<template>
	<div id="id1">
		<div class="top">
			<img @click="fanhui" src="../../static/order_img/left.gif" />
			<h3>登录</h3>
			<span>立即注册</span>
		</div>
		<div class="phone">
		<router-link to="/logIn/loginPhone">
			<h3 @click="switcher1" id="h31">手机登录验证</h3>
		</router-link>
		<router-link to="/logIn/loginMeituan">
			<h3 :class="{class1: !isBorder}" id="h32" @click="switcher2">美团账号验证</h3>
		
		</router-link>
		

		</div>
	
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "logIn",
		data() {
			return {
				msg: '登录',
				className: 'class1',
				isBorder: false
			};
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			};
			

		},
		methods: {
			switcher2() {
				this.isBorder = false;
				
			},
			switcher1() {
				
			},
			fanhui: function (params) {
					this.$router.push({
					path: '/home'
				})
			}
		}

	}
</script>

<style lang="css" scoped>
	.class{
		background-color: red
	}


	#id1 {
		width: 100%;

	}
	
	.top {
		width: 100%;
		height: 1.368421rem;
		border-bottom: 0.026315rem solid #CCCCCC;
		text-align: center;
		position: relative;
		background-color: #ffffff;
	}
	
	.top img {
		position: absolute;
		left: 0.657894rem;
		top: 0.447368rem;
	}
	
	.top h3 {
		line-height: 1.368421rem;
		font-size: 0.473684rem;
		font-weight: normal;
		color: #444444;
	}
	
	.top span {
		color: #656565;
		position: absolute;
		top: 0.421052rem;
		right: 0.552631rem;
		font-size: 0.394736rem;
	}
	/*class = phone*/
	
	.phone {
		height: 1.052631rem;
		width: 100%;
		background-color: #ffffff;
	}
	
	#h31{
		float: left;
		font-size: 0.394736rem;
		line-height: 1.052631rem;
		margin-left: 1.263157rem;
		color: #2f2f2f;
	}
	
	#h32{
		background-color: #f9f9f9;
		float: left;
		font-size: 0.394736rem;
		line-height: 1.052631rem;
		margin-left: 1.263157rem;
		padding-left: 1.263157rem;
		color: #656565;
		height: 1.052631rem;
		width: 5.105263rem;
		border-bottom: 0.026315rem solid #ddd8ce;
		border-left: 0.026315rem solid #ddd8ce;
	}
	
	.yanzheng {
		clear: both;
		height: 4.105263rem;
		width: 100%;
		background-color: #ffffff;
		position: relative;
	}
	
	.yanzheng_top {
		width: 90%;
		height: 1.315789rem;
		margin: 0 auto;
		border-bottom: 0.026315rem solid #ddd8ce;
		padding-top: 0.342105rem;
	}
	
	.yanzheng_top img {
		float: left;
	}
	
	.yanzheng_top input {
		float: left;
		width: 4.473684rem;
		height: 0.526315rem;
		border: none;
		outline: none;
		margin-left: 0.052631rem;
		font-size: 0.473684rem;
	}
	
	#btn_11 {
		height: 0.394736rem;
		width: 0.394736rem;
		background: url(../../static/order_img/x.gif) no-repeat center;
		border-radius: 50%;
		border: none;
		outline: none;
		margin: 0 0.263157rem;
		margin-top: 0.131578rem;
	}
	
	#btn_12 {
		height: 0.842105rem;
		width: 2.631578rem;
		background-color: #fdc900;
		font-size: 0.368421rem;
		border-radius: 0.052631rem;
		border: none;
	}
	
	.yangzheng_down {
		width: 90%;
		height: 1.315789rem;
		margin: 0 auto;
		border-bottom: 0.026315rem solid #ddd8ce;
		padding-top: 0.342105rem;
	}
	
	.yangzheng_down img {
		float: left;
	}
	
	.yangzheng_down input {
		float: left;
		width: 4.473684rem;
		height: 0.526315rem;
		border: none;
		outline: none;
		margin-left: 0.052631rem;
		font-size: 0.473684rem;
	}
	.yanzheng p{
		position: absolute;
		left: 0.526315rem;
		bottom: 0.578947rem;
		color: #898998;
		font-size: 0.315789rem;
		
	}
	#login{
		height: 1.105263rem;
		width: 8.421052rem;
		background-color: #fdc900;
		margin-top: 0.263157rem;
		margin-left: 8%;
		border: none;
		font-size: 0.421052rem;
		color: #c39404;
		
	}
</style>