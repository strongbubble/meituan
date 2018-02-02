<template>
	<div id="app">
		<div class="tabbar" v-show="isShow">
			<router-link to="/home">
				<div @click="switchFn('home')"><i class="bar-img" :class="barHomeImg"></i><span class="bar-btn-txt" :class="colorHome">首页</span></div>
			</router-link>
			<router-link to="/logIn">
				<div @click="switchFn('logIn')"><i class="bar-img " :class="barOrderImg"></i><span class="bar-btn-txt" :class="colorOrder">订单</span></div>
			</router-link>
			<router-link to="/mine">
				<div @click="switchFn('mine')"><i class="bar-img " :class="[barMineImg,colorMine]"></i><span class="bar-btn-txt" :class="colorMine">我的</span></div>
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
				colorHome: 'colorHome',
				colorOrder: 'colorOrder',
				colorMine: 'colorMine'
			}
		},
		computed: {
			isShow() {
				return(this.$route.path.indexOf('/adress/') && this.$route.path.indexOf('/businessList/')) == -1 ? true : false
			}
		},
		methods: {
			switchFn(index) {
				if(index == 'home') {
					this.barHomeImg = "bar-home-img2"
					this.barOrderImg = "bar-order-img"
					this.barMineImg = "bar-mine-img"
					this.colorHome = 'colorHome'
					this.colorOrder = 'color1'
					this.colorMine = 'color1'
				} else if(index == 'logIn') {
					this.barHomeImg = "bar-home-img"
					this.barOrderImg = "bar-order-img2"
					this.barMineImg = "bar-mine-img"
					this.colorHome = 'color1'
					this.colorOrder = 'colorOrder'
					this.colorMine = 'color1'
				} else if(index == 'mine') {
					this.barHomeImg = "bar-home-img"
					this.barOrderImg = "bar-order-img"
					this.barMineImg = "bar-mine-img2"
					this.colorHome = 'color1'
					this.colorOrder = 'color1'
					this.colorMine = 'colorMine'
				}
			}
		}
	}
</script>

<style>

</style>