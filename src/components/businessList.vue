<template>
	<div class="bussiness">
		<header>
			<span @click="back"><img src="../../static/images/返回.png"/></span>
			<p class="bussinessTit">{{$route.query.businessName}}</p>
		</header>
		<nav>
			<ul>
				<router-link :to="'/businessList/orderDishes?businessName='+business.businessName">
					<li @click="switchFn2('orderDishes')" :class="selectedO">
						<a href="javascript:void(0);">点菜</a>
					</li>
				</router-link>

				<router-link to="/businessList/evaluate">
					<li @click="switchFn2('evaluate')" :class="selectedE">
						<a href="javascript:void(0);">评价</a>
					</li>
				</router-link>
				<router-link to="/businessList/seller">
					<li @click="switchFn2('seller')" :class="selectedS">
						<a href="javascript:void(0);">商家</a>
					</li>
				</router-link>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "businessList",
		data() {
			return {
				businessList: [],
				business: '',
				selectedO: 'selected',
				selectedE: 'rmSelected',
				selectedS: 'rmSelected',
				businessName: ''
			}
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
		},
		methods: {
			back() {
				this.$router.push({
					path: '/home'
				})
			}

		},
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
		},
		created() {
			this.axios.get('http://10.0.157.220:8888/getBusinessList?pageNum=1&pageSize=2')
				.then(res => {
					this.businessList = res.data.shop_data
					for(var tempBusiness of this.businessList) {
						if(this.$route.query.businessId == tempBusiness.businessId) {
							this.business = tempBusiness
							this.$router.push({
								path: '/businessList/orderDishes',
								query: {
									businessName: this.business.businessName
								}
							})
						}
					}
				})
		},
		computed: {
			//business() {
			//	for(var tempBusiness of this.businessList) {
			//		if(this.$route.query.businessId == tempBusiness.businessId) {
			//			return tempBusiness
			//		}
			//	}
			//}
		}
	}
</script>
<style lang="css">
	header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		height: 42px;
		border-bottom: 1px solid #ffd705;
		background: #fff;
	}
	
	nav {
		position: fixed;
		top: 1.131578rem;
		left: 0;
		z-index: 9999;
		width: 100%;
		background: #fff;
	}
</style>
<style lang="css" scoped>
	.bussiness {
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	
	.bussinessTit {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0 1.710526rem;
		line-height: 1.157894rem;
		font-size: 0.447368rem;
		color: #444;
		background: #fff;
	}
	
	header {
		display: flex;
		justify-content: space-between;
		background: #fff;
		border-bottom: 1px solid #ddd;
	}
	
	header span {
		padding: 0 0.789473rem 0 0.210526rem;
		display: inline-block;
		vertical-align: top;
		margin-top: 0.289473rem;
	}
	
	header span img {
		height: 0.526315rem;
	}
	
	nav,
	nav ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: auto;
		background: #fff;
		overflow: hidden;
		height: 1.18421rem;
		border-bottom: 1px solid #f0f0f0;
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
	
	nav ul .selected a {
		border-bottom: 4px solid #FFD161;
		color: #333;
	}
	
	nav ul .rmSelected a {
		border-bottom: none;
		color: #666;
	}
</style>