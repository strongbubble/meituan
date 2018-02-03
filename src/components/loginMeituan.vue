<template>
    <div>
       <!-- {{ msg }} -->
       <div class="inputer">   
       <table>
           <tr>
               <td>
                    <input type="text" placeholder="美团账户(手机/邮箱/用户名)">
               </td>
           </tr>
           <tr>
               <td>
                    <input type="password" placeholder="请输入密码">
               </td>
           </tr>
       </table>
       </div>
        <router-link to="/order">
			<button id="login1">登录</button>
	    </router-link>

    </div>
</template>
    
<script>
export default {
    name: "meituandenglu",
    data () {
        return {
           msg: '美团登录'  
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
    div{
        /* text-align: center; */
        margin: 0 auto;
        background-color: white;
    }
    .inputer{
        /* text-align: center; */
        width: 90%;
    }
    .inputer tr{
        
    }
    .inputer tr:first-child td{
        height: 1.315789rem;
        width: 8.421053rem;
        padding-left: .789474rem;
        padding-top: 10px;
        background: url(../../static/order_img/小人儿.gif) no-repeat .052632rem;
        border-bottom: .026316rem solid #ddd8ce; 

    }
    .inputer tr:last-child td{
        height: 1.315789rem;
        width: 8.421053rem;
        padding-left: .789474rem;
        padding-top: .263158rem; 
        background: url(../../static/order_img/密码.gif) no-repeat  .052632rem;
        border-bottom: .026316rem solid #ddd8ce; 
    }
    .inputer tr td input{
        height: .447368rem;
        font-size: .368421rem;
        border: none;
        outline: none;
    }
    #login1{
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