<template>
	<div class="order">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		name: "order",
		data() {
			return {
				msg: '订单'
			};
		}
	}
</script>

<style lang="css" scoped>
	h1 {
		color: blue;
	}
</style>