<template>
	<div class="bussiness">
		<header>
			<span @click="back"><img src="../../static/images/返回.png"/></span>
			<p class="bussinessTit">{{business.businessName}}</p>
		</header>
		<nav>
			<ul>
				<router-link to="/businessList/orderDishes/dishes">
					<li @click="switchFn2('orderDishes')" :class="selectedO">
						<a href="javascript:void(0);">点菜</a>
					</li>
				</router-link>
				<router-link to="/businessList/orderDishes/evaluate">
					<li @click="switchFn2('evaluate')" :class="selectedE">
						<a href="javascript:void(0);">评价</a>
					</li>
				</router-link>
				<router-link to="businessList/orderDishes/seller">
					<li @click="switchFn2('seller')" :class="selectedS" >
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
				businessList: [{
						businessId: '001',
						businessName: '云海肴·云南菜(昌平万科店)', //商家名称
						businessImg: 'p0.meituan.net/0.84.63/xianfu/ec41b1588ad603ad6f56d1ae437a01fe29312.jpg',
						monthlySales: '639', //月售
						time: '40min', //送达时间
						distance: '1.7km', //距离
						startingPrice: '20', //起送价
						distribution: '5' //配送
					},
					{
						businessId: '002',
						businessName: '呷哺呷哺(昌平京客隆)', //商家名称
						businessImg: 'p1.meituan.net/0.84.63/xianfu/a80b4acee4561b67bbe38cc9747fb32b24094.jpg',
						monthlySales: '912', //月售
						time: '61min', //送达时间
						distance: '784m', //距离
						startingPrice: '60', //起送价
						distribution: '8' //配送
					},
					{
						businessId: '003',
						businessName: '巴贝拉意式休闲餐厅（昌平万科店）', //商家名称
						businessImg: 'p0.meituan.net/0.84.63/xianfu/d2e3ffbcf01856721323f6f9414a16bc10772.jpeg',
						monthlySales: '999+', //月售
						time: '38min', //送达时间
						distance: '1.6km', //距离
						startingPrice: '30', //起送价
						distribution: '6' //配送
					},
					{
						businessId: '004',
						businessName: '肯德基宅急送(昌平店）', //商家名称
						businessImg: 'p1.meituan.net/0.84.63/xianfu/f49c565f3c4d51fda6c40a29ca6ff05e16938.jpg',
						monthlySales: '999+', //月售
						time: '40min', //送达时间
						distance: '391m', //距离
						startingPrice: '0', //起送价
						distribution: '9' //配送
					},
					{
						businessId: '005',
						businessName: '嘉和一品粥(昌平店)', //商家名称
						businessImg: 'p1.meituan.net/0.84.63/xianfu/54f8217743cc4bc5403a2a8a7c3fd2ac111372.png',
						monthlySales: '999+', //月售
						time: '30min', //送达时间
						distance: '583m', //距离
						startingPrice: '20', //起送价
						distribution: '6' //配送
					},
					{
						businessId: '005',
						businessName: '望京小腰（五街店）', //商家名称
						businessImg: 'p0.meituan.net/0.84.63/xianfu/856435fc730df39ab67bc317c0add69f43008.jpg',
						monthlySales: '892', //月售
						time: '30min', //送达时间
						distance: '375m', //距离
						startingPrice: '20', //起送价
						distribution: '5' //配送
					},
					{
						businessId: '006',
						businessName: '盛昌潮汕砂锅粥', //商家名称
						businessImg: 'p1.meituan.net/0.84.63/xianfu/dd015a9dc00a06438fd0f1ac076c05ac120335.jpg',
						monthlySales: '999+', //月售
						time: '33min', //送达时间
						distance: '1.7km', //距离
						startingPrice: '20', //起送价
						distribution: '3' //配送
					},
					{
						businessId: '007',
						businessName: '北平人家饺子馆（鼓楼东街店）', //商家名称
						businessImg: 'p0.meituan.net/0.84.63/xianfu/8958a06e6e60f740a794a8f1270034b924576.jpg',
						monthlySales: '287', //月售
						time: '32min', //送达时间
						distance: '1.2km', //距离
						startingPrice: '20', //起送价
						distribution: '5' //配送
					}
				]
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
		computed: {
			business() {
				for(var tempBusiness of this.businessList) {
					if(this.$route.params.businessId == tempBusiness.businessId) {
						return tempBusiness
					}
				}
			}
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