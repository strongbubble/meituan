<template>
	<div class="bussiness">
		<header>
			<span @click="back"><img src="../../static/images/返回.png"/></span>
			<p class="bussinessTit">{{business.businessName}}</p>
		</header>
		<nav>
			<ul>
				<!--<router-link to="/businessList/orderDishes">
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
				</router-link>-->
				<router-link to="/businessList/orderDishes">
					<li>
						<a href="javascript:void(0);">点菜</a>
					</li>
				</router-link>
				<router-link to="/businessList/evaluate">
					<li>
						<a href="javascript:void(0);">评价</a>
					</li>
				</router-link>
				<router-link to="/businessList/seller">
					<li>
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
				business: ''
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
				this.$router.go(-1)
			}
		},
		created() {
			// 使用axios处理网络请求
			this.axios.get('http://localhost:8888/getBusinessList')
				.then(res => {
					// 数据绑定在属性中
					this.businessList = res.data
					for(var tempBusiness of this.businessList) {
						if(this.$route.query.businessId == tempBusiness.businessId) {
							this.business = tempBusiness
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
		padding: 0 30px 0 8px;
		display: inline-block;
		vertical-align: top;
		margin-top: 11px;
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