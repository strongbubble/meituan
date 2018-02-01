<template>
    <div>
    	<div class="top">
    		<img src="../../static/order_img/left.gif" />
    		<h3>登录</h3>
    		<span>立即注册</span>
    	</div>
    	<div class="phone">
    		<h3>手机登录验证</h3>
    		<h3>美团账号验证</h3>
    	</div>
    
    
    
    
    
    
       <!--<h1>msg</h1>-->
       <router-link to="/order">
       <!--<button>{{ msg }}</button>-->
       
       
       </router-link>
      <router-view></router-view>
    </div>
</template>
    
<script>
export default {
    name: "logIn",
    data () {
        return {
             msg: '登录'
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
    .top{
    	width: 100%;
    	height: 1.368421rem;
    	border-bottom: 0.026315rem solid #CCCCCC;
    	text-align: center; 
    	position: relative;
    }
    .top img{
    	position: absolute;
    	left: 0.657894rem;
    	top: 0.447368rem;
    
    }
    .top h3{
    	line-height: 1.368421rem;
    	font-size: 0.473684rem;
    	color: #444444;
    
    }
    .top span{
    	color: #656565;
    	position: absolute;
    	top: 0.421052rem;
    	right: 0.552631rem;
    	font-size: 0.394736rem;
    }
    /*class = phone*/
   	.phone{
   		height: 1.052631rem;
   		width: 100%;
   }
    .phone h3:first-child{
    	float: left;
    	font-size: 0.394736rem;
    	line-height: 1.052631rem;
    	margin-left: 1.263157rem;
    	color: #2f2f2f;
    
    }
    .phone h3:last-child{
    	float: left;
    	font-size: 0.394736rem;
    	line-height: 1.052631rem;
    	margin-left: 1.263157rem;
    	color: #656565;
    	height: 1.052631rem;
    	width: 4.736842rem;
    	border-bottom: 0.026315rem solid #ddd8ce;
    	border-left: 0.026315rem solid #ddd8ce;
    }
</style>