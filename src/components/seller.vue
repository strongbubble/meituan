<template>
	<div>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		name: "seller",
		data() {
			return {
				msg: '商家页面'
			}
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
	h1 {
		color: red;
	}
</style>