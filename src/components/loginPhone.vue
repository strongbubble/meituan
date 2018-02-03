<template>
    <div id="id1">
		<!-- <div class="top">
			<img src="../../static/order_img/left.gif" />
			<h3>登录</h3>
			<span>立即注册</span>
		</div> -->
		<!-- <div class="phone">
			<h3>手机登录验证</h3>
			<h3>美团账号验证</h3>
		</div> -->
		<div class="yanzheng">
			<div class="yanzheng_top">
				<img src="../../static/order_img/手机.gif" />
				<input type="text" placeholder="请输入手机号" />
				<button id="btn_11"></button>
				<button id="btn_12">获取验证码</button>
			</div>

			<div class="yangzheng_down">
				<img src="../../static/order_img/验证.gif" />
				<input type="text" placeholder="请输入短信验证码"/>

			</div>
			<p>未注册过的手机将自动注册为美团账户</p>
			
		</div>
			<router-link to="/order">
			<button @click="login" id="login">登录</button>
			</router-link>
    </div>
</template>
    
<script>
export default {
    name: "longinPhone",
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
		login() {
			console.log('111');
		}
	}
		
}
</script>
    
<style lang="css" scoped>
    #id1 {
		width: 100%;
		/* position: fixed;
		top: 0px;
		left: 0px; */

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
	
	.phone h3:first-child {
		float: left;
		font-size: 0.394736rem;
		line-height: 1.052631rem;
		margin-left: 1.263157rem;
		color: #2f2f2f;
	}
	
	.phone h3:last-child {
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
		font-size: .368421rem;
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
		font-size: .368421rem;
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