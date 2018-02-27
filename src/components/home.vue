<template>
	<div class="home">
		<!--头部-->
		<header>
			<div class="top">
				<a href="#" class="header-loc">
					<i class="dw"></i>
					<span class="loc-text">北京市</span>
					<i class="jt"></i>
				</a>
				<router-link to="/search" class="header-serch">
					<i class="ss"></i>
					<span class="serch-text">鸡排</span>
				</router-link>
			</div>
			<div class="h-wrap">
				<a>
					<img src="../../static/images/bannertemp.e8a6fa63.jpg" />
				</a>
			</div>
		</header>
		<!--图标列表-->
		<div class="icon-list">
			<a href="#"><img src="../../static/images/美食.png" /><span>美食</span></a>
			<a href="#"><img src="../../static/images/美团超市.png" /><span>美团超市</span></a>
			<a href="#"><img src="../../static/images/生鲜果蔬.png" /><span>生鲜果蔬</span></a>
			<a href="#"><img src="../../static/images/甜点饮品.png" /><span>甜点饮品</span></a>
			<a href="#"><img src="../../static/images/美团专送.png" /><span>美团专送</span></a>
			<a href="#"><img src="../../static/images/正餐优选.png" /><span>正餐优选</span></a>
			<a href="#"><img src="../../static/images/元气早餐.png" /><span>元气早餐</span></a>
			<a href="#"><img src="../../static/images/汉堡披萨.png" /><span>汉堡披萨</span></a>
		</div>
		<!--附近商家-->
		<div class="top-placeholder">
			<div class="top-placeholder-inner">附近商家</div>
		</div>
		<!--附近商家列表-->
		<div class="poilist">
			<ul class="poilist-ul" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
				<!--第一个li开始-->
				<li class="field" v-for="list in businessList" @click="toBusinessDetail(list.businessId)">
					<a href="#">
						<div class="field-list">
							<span class="brand">品牌</span>
							<img :src=list.businessImg|url alt="" />
						</div>
					</a>
					<div class="content">
						<a>
							<div class="shop-title">
								<p>{{list.businessName}}</p>
							</div>
							<div class="shop-mid-line">
								<div>
									<i class="star"></i>
									<i class="star"></i>
									<i class="star"></i>
									<i class="star"></i>
									<i class="star"></i>
								</div>
								<p>月售{{list.monthlySales}}</p>
								<span class="min">{{list.time}}</span>
								<span class="line">|</span>
								<span>{{list.distance}}</span>
							</div>
							<div class="shop-line">
								<span>起送价<em>￥{{list.startingPrice}}</em></span>
								<span class="lin2">|</span>配送 ¥{{list.distribution}}
								<div class="shop-discount"><span>美团专送</span></div>
							</div>
							<!--额外的优惠-->
							<div class="other">
								<ul>
									<li>
										<i class="lq">
											<img src="../../static/images/领券.png"/>
										</i>
										<p class="li-text">有机会领取商家代金券</p>
									</li>
									<li>
										<i class="lq">
											<img src="../../static/images/票.png"/>
										</i>
										<p class="li-text">本店支持开发票，开票金额2元起</p>
									</li>
								</ul>
							</div>
						</a>
					</div>
				</li>
			</ul>
			<p class="myp" :style="{ display: display}">
				<span> 加载中...</span>
			</p>
		</div>
		<a class="backtotop" v-back-top='isBackShow' v-show="isShowno"></a>
	</div>
</template>

<script>
	import Vue from 'vue'
	Vue.directive('back-top', {
		inserted(el, binding) {
			let e = binding.arg || 'click'
			el.addEventListener(e, function() {
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			})
		}
	})
	export default {
		name: "home",
		data() {
			return {
				isShowno: false,
				isBackShow: {
					value: false
				},
				businessList: [],
				len: 5,
				tempArr: [],
				isShow: false,
				display: 'none',
				pageNum: 1,
				loading: true
			};
		},
		filters: {
			url: function(value) {
				if(!value) return ''
				value = 'http://' + value
				return value
			}
		},
		created() {
			this.getList()
		},
		methods: {
			handleScroll() {
				if(window.scrollY > 600) {
					this.isShowno = true
				} else {
					this.isShowno = false
				}
			},
			toBusinessDetail(businessId) {
				this.$router.push({
					path: '/businessList',
					query: {
						businessId
					}
				})
			},
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					this.getList()
				}, 2500);
			},
			getList() {
				this.axios.get('http://10.0.157.235:8888/getBusinessList?pageNum=' + this.pageNum + '&pageSize=5')
					.then(res => {
						this.businessList = this.businessList.concat(res.data.shop_data)
						this.pageNum++
							if(res.data.length == 0) {
								this.loading = true;
							} else {
								this.loading = false;
							}
						if(this.businessList.length == 20) {
							this.display = 'none'
						} else {
							this.display = 'block'
						}
					})
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
		}
	}
</script>
<style lang="css" scoped>
	/*头部*/
	
	header {
		position: relative;
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	
	.top {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.header-loc {
		height: 0.736842rem;
		padding: 0 0.131578rem;
		color: #ffffff;
		font-size: 0.447368rem;
		background: rgba(0, 0, 0, 0.3);
		-webkit-border-radius: 13px;
		-moz-border-radius: 13px;
		border-radius: 13px;
		margin-left: 1.315789rem;
		max-width: 40%;
		margin-right: 0.526315rem;
		margin-top: 0.263157rem;
	}
	
	.dw {
		float: left;
		display: block;
		width: 0.421052rem;
		height: 0.736842rem;
		vertical-align: middle;
		background: url(../../static/images/定位.png) no-repeat center center;
		background-size: 0.421052rem 0.421052rem;
		margin-right: 0.105263rem;
	}
	
	.jt {
		float: left;
		display: block;
		width: 0.421052rem;
		height: 0.736842rem;
		vertical-align: middle;
		background: url(../../static/images/右箭头.png) no-repeat center center;
		background-size: 0.421052rem 0.421052rem;
		margin-left: 0.105263rem;
	}
	
	.ss {
		float: left;
		display: block;
		width: 0.315789rem;
		height: 0.736842rem;
		vertical-align: middle;
		background: url(../../static/images/搜索.png) no-repeat center center;
		background-size: 0.315789rem 0.315789rem;
		margin-left: 0.18421rem;
		margin-right: 0.078947rem;
	}
	
	.loc-text {
		float: left;
		height: 0.736842rem;
		line-height: 0.736842rem;
		white-space: nowrap;
		display: inline-block;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.368421rem;
		color: #fff;
	}
	
	.serch-text {
		font-size: 0.368421rem;
		color: #333;
	}
	
	.header-serch {
		height: 0.736842rem;
		line-height: 0.736842rem;
		display: inline-block;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-border-radius: 13px;
		-moz-border-radius: 13px;
		border-radius: 13px;
		text-align: center;
		font-size: 0;
		margin-top: 0.263157rem;
		margin-right: 0.263157rem;
		width: 45%;
		background: #fff;
		text-align: left;
	}
	
	.h-wrap {
		width: 100%;
		height: auto;
	}
	
	.h-wrap a {
		display: block;
		overflow: hidden;
	}
	
	.h-wrap a img {
		display: block;
		margin: 0 auto;
		width: 100%;
		height: auto;
	}
	/*图标列表*/
	
	.icon-list {
		width: 100%;
		height: 5.315789rem;
		overflow: hidden;
		padding-bottom: 0.789473rem;
		background: #fff;
	}
	
	.icon-list a {
		float: left;
		display: block;
		width: 25%;
		padding-top: 0.368421rem;
	}
	
	.icon-list a img {
		display: block;
		height: 1.236842rem;
		margin: 0 auto 0.315789rem;
	}
	
	.icon-list a span {
		display: block;
		width: 100%;
		line-height: 1em;
		text-align: center;
		font-size: 0.3466666666666667rem;
		color: #2f2f2f;
	}
	
	.top-placeholder {
		background: #fff;
		padding-top: 0.4rem;
		margin-top: 0.26666666666666666rem;
		text-align: center;
		overflow: hidden;
	}
	
	.top-placeholder-inner {
		display: inline-block;
		position: relative;
		height: 0.6rem;
		line-height: 0.6rem;
		font-size: 0.4266666666666667rem;
		color: #333;
		font-weight: bold;
	}
	
	.top-placeholder-inner:before {
		left: -0.9333333333333333rem;
	}
	
	.top-placeholder-inner:before,
	.top-placeholder-inner:after {
		content: '';
		position: absolute;
		top: 0.26666666666666666rem;
		width: 0.8rem;
		height: 0;
		font-size: 0;
		border-top: 1px solid #333;
		-webkit-transform: scaleY(0.5);
		-moz-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.poilist {
		padding-bottom: 50px;
	}
	
	.poilist,
	.poilist-ul {
		width: 100%;
		height: auto;
		background: #fff;
	}
	
	.field {
		position: relative;
		margin-left: 0.26666666666666666rem;
		padding: 0.4rem 0 0.3333333333333333rem;
		background: #fff;
	}
	
	.field-list {
		width: 2.24rem;
		height: 1.68rem;
		text-align: center;
		position: absolute;
		overflow: hidden;
		border: 1px solid #E4E4E4;
	}
	
	.field-list img {
		display: block;
		width: 100%;
		vertical-align: middle;
	}
	
	.brand {
		background: #FFA627;
		position: absolute;
		left: 0;
		top: 0;
		width: 0.7466666666666667rem;
		line-height: 0.37333333333333335rem;
		height: 0.37333333333333335rem;
		font-size: 0.29333333333333333rem;
		color: #fff;
		text-align: center;
	}
	
	.field .content {
		margin-left: 2.466666666666667rem;
		position: relative;
		overflow: hidden;
	}
	
	.shop-title {
		font-size: 0.4266666666666667rem;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 500;
		margin-right: 0.394736rem;
	}
	
	.shop-mid-line {
		height: 0.605263rem;
		font-size: 0.526315rem;
	}
	
	.shop-mid-line div {
		float: left;
		width: 2rem;
		height: 0.315789rem;
		margin: 0.210526rem 0 0 0;
	}
	
	.shop-mid-line p {
		float: left;
		margin-top: 0.131578rem;
		font-size: 0.289473rem;
		color: #656565;
	}
	
	.shop-mid-line span {
		float: right;
		font-size: 0.32rem;
		margin-top: 0.13333333333333333rem;
		color: #656565;
		text-align: right;
	}
	
	.shop-mid-line .line {
		margin: 0.3rem 0.131578rem 0 !important;
		width: 0;
		height: 0.16rem;
		font-size: 0;
		border-right: 1px solid #ccc;
	}
	
	.shop-mid-line .min {
		margin-right: 15px;
	}
	
	.shop-discount {
		float: right;
		margin-right: 0.394736rem;
		position: relative;
		background-color: #FFD161;
		display: inline-block;
		height: 0.394736rem;
		line-height: 0.394736rem;
		padding: 0 0.157894rem;
	}
	
	.shop-discount span {
		font-size: 0.263157rem;
		color: #333!important;
		font-weight: normal;
		vertical-align: baseline;
	}
	
	.shop-discount>span:before,
	.shop-discount>span:after {
		content: '';
		position: absolute;
		border: 2px solid #fff;
		width: 0;
		height: 0;
		font-size: 0;
	}
	
	.shop-discount>span:before {
		left: 0;
		top: 0;
		border-color: #fff #FFD161 #FFD161 #fff;
	}
	
	.shop-discount>span:after {
		right: 0;
		bottom: 0;
		border-color: #FFD161 #fff #fff #FFD161;
	}
	
	.shop-line {
		margin-top: 0.078947rem;
		font-size: 0.32rem;
		color: #656565;
	}
	
	.shop-line span {
		font-size: 0.32rem;
		color: #656565;
	}
	
	.shop-line em {
		font-style: normal;
	}
	
	.shop-line .lin2 {
		margin-right: 0.131578rem;
		color: #dcdcdc;
	}
	
	.star {
		background: url(../../static/images/newstars.ae33dbae.png) no-repeat;
		background-size: cover;
		width: 0.263157rem;
		height: 0.263157rem;
		float: left;
		margin-right: 0.105263rem;
		background-position: 0 0;
	}
	
	.other {
		font-size: 0.289473rem;
		color: #898989;
		margin-top: 0.2rem;
	}
	
	.other,
	.other ul {
		width: 100%;
		line-height: 0.447368rem;
	}
	
	.other ul li {
		margin-bottom: 0.105263rem;
	}
	
	.other .lq img {
		position: absolute;
		display: block;
		height: 0.37333333333333335rem;
		margin-top: 0.052631rem;
	}
	
	.other .li-text {
		margin-left: 0.447368rem;
		line-height: 0.394736rem;
	}
	
	.myp {
		height: 1.315789rem;
		line-height: 1.421052rem;
		width: 100%;
		font-size: 18px;
		color: #666;
		background: url(../../static/images/loading36.gif) no-repeat 40% center;
		background-size: 0.526315rem 0.526315rem;
		text-indent: 48%;
	}
	
	.backtotop {
		width: 1.0666666666666667rem;
		height: 1.368421rem;
		background: url(../../static/images/totop.png) no-repeat center;
		background-size: 100%;
		bottom: 66px;
		right: 15px;
		position: fixed;
	}
</style>