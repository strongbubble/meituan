<template>
    <div class="adress">
        <header>
        	<span></span>
        	<h1>我的收货地址</h1>
        	<p>管理</p>
        </header>
    </div>
</template>
    
<script>
export default {
    name: "adress",
    data () {
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
	.adress{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	header{
		height: 1.15rem;
		line-height: 1.15rem;
	}
	header span{
		height: 1.15rem;
		width: 1.71rem;
		display: block;
		background-image: url(../../static/mine_img/tiny-icon.db95320f.png);
		background-position: 0 -3.42rem;
	}
	header h1{
		width: 6.44rem;
		font-size: 0.47rem;
		color: #333;
		font-weight: normal;
		text-align: center;
	}
</style>