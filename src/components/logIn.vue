<template>
    <div>
       <!--<h1>msg</h1>-->
       <router-link to="/order">
       <button>{{ msg }}</button>
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
    
</style>