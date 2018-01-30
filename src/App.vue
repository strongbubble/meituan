<template>
	<div id="app">
		<div class="tabbar">
			<router-link to="/home">
				<div @click="switchFn('home')"><i class="bar-img" :class="barHomeImg"></i><span class="bar-btn-txt">首页</span></div>
			</router-link>
			<router-link to="/order">
				<div @click="switchFn('order')"><i class="bar-img " :class="barOrderImg"></i><span class="bar-btn-txt">订单</span></div>
			</router-link>
			<router-link to="/mine">
				<div @click="switchFn('mine')"><i class="bar-img " :class="barMineImg"></i><span class="bar-btn-txt">我的</span></div>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				barHomeImg: 'bar-home-img2',
				barOrderImg: 'bar-order-img',
				barMineImg: 'bar-mine-img',
			}
		},
		methods: {
			switchFn(index) {
				if(index == 'home') {
					this.barHomeImg = "bar-home-img2"
					this.barOrderImg = "bar-order-img"
					this.barMineImg = "bar-mine-img"
				} else if(index == 'order') {
					this.barHomeImg = "bar-home-img"
					this.barOrderImg = "bar-order-img2"
					this.barMineImg = "bar-mine-img"
				} else if(index == 'mine') {
					this.barHomeImg = "bar-home-img"
					this.barOrderImg = "bar-order-img"
					this.barMineImg = "bar-mine-img2"
				}
			}
		}
	}
</script>

<style>

</style>