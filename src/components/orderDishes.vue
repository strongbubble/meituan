<template>
	<div>
			<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		name: "orderDishes",
		data() {
			return {
				msg:'点菜页面',
			}
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
		},
		methods: {
			switchFn2(index) {
				if(index == 'orderDishes') {
					this.selectedO = 'selected'
					this.selectedE = 'rmSelected'
					this.selectedS = 'rmSelected'
				} else if(index == 'evaluate') {
					this.selectedO = 'rmSelected'
					this.selectedE = 'selected'
					this.selectedS = 'rmSelected'
				} else if(index == 'seller') {
					this.selectedO = 'rmSelected'
					this.selectedE = 'rmSelected'
					this.selectedS = 'selected'
				}
			}
		},

	}
</script>

<style lang="css" scoped>
	h1 {
		color: red;
	}
	
	nav,
	nav ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: auto;
		background: #fff;
		overflow: hidden;
	}
	
	nav ul li {
		height: 1.18421rem;
		text-align: center;
	}
	
	nav ul li a {
		display: inline-block;
		height: 1.18421rem;
		line-height: 1.18421rem;
		padding: 0 0.210526rem;
		font-size: 0.421052rem;
		color: #666;
	}
	
	nav ul li .selected a {
		border-bottom: 4px solid #FFD161;
		color: #333;
	}
	
	nav ul li .rmSelected a {
		border-bottom: none;
		color: #666;
	}
</style>