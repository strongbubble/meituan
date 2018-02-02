<template>
	<div>
		<!--更换信息-->
		<div id="top-wrap" class="top-wrap">
			<div id="pref-info" class="pref-info">
				<span class="pref-text">客服电话：010-89780720</span>
			</div>
		</div>
		<!--点菜区-->
		<div class="content">
			<!--左侧列表-->
			<div class="taglist">
				<ul>
					<li v-for="(list,index) in taglist" @click="change(list.tag,index)" :class="{ red:changeRed == index}">
						<span>{{list.name}}</span>
					</li>
				</ul>
			</div>
			<!--右侧菜单-->
			<div class="foodlistwrap">
				<h3 class="foodlist-label">和味单品 </h3>
				<template v-for="list in taglist">
					<div class="j-fooditem fooditem food615535498 clearfix" v-for="i in spus">
						<div class="food-pic-wrap">
							<img class="j-food-pic food-pic" :src=i.picture visibility="hidden" style="width: 82.6667px; height: 62px; margin-left: -10.3333px; margin-top: 0px; visibility: visible;">
						</div>
						<div class="food-cont-wrap">
							<div class="food-cont">
								<div class="j-foodname foodname">{{i.name}}</div>
								<div class="food-desc">{{i.description}}</div>
								<div class="food-price-region"> <span class="food-price">¥{{i.min_price}}</span> </div>
								<div class="j-item-console foodop clearfix">
									<a class="j-add-item add-food" href="javascript:;"><i class="icon i-add-food"></i></a> <span class="j-item-num foodop-num" style="display:none">0</span>
									<a class="j-remove-item remove-food" style="display:none" href="javascript:;"><i class="icon i-remove-food"></i></a>
								</div>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
		<!--结账-->
		<div id="cart" class="cart">
			<div class="cart-tip">
				<div class="j-cart-icon cart-icon">
					<i class="j-ico-cart ico-cart"></i>
				</div>
				<div class="j-cart-empty cart-empty">购物车空空如也～</div>
			</div>
			<div class="cart-btns">
				<a class="cart-btn-unavail"><span class="inner">¥60起送</span></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "orderDishes",
		data() {
			return {
				taglist: [],
				spus: [],
				businessList: [],
				businessName: [],
				changeRed: -1
			}
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
		},
		methods: {
			change(tag, index) {
				this.changeRed = index;
				this.axios.get('http://localhost:8888/getBusinessList')
					.then(res => {
						this.businessList = res.data
						for(let tempBusiness of this.businessList) {
							this.businessName.push(tempBusiness.businessName)
						}
					})
				this.axios.get('http://localhost:8888/getDuckDetails')
					.then(res => {
						for(var j in res.data) {
							if(j == this.$route.query.businessName) {
								this.taglist = res.data[j].food_spu_tags
							}
						}
						for(var i of this.taglist) {
							if(tag == i.tag) {
								this.spus = i.spus
							}
						}
					})
			}
		},
		created() {
			console.log('-----------------', this.$route.query);
			this.axios.get('http://localhost:8888/getDuckDetails')
				.then(res => {
					for(var j in res.data) {
						if(j == this.$route.query.businessName) {
							this.taglist = res.data[j].food_spu_tags
						}
					}
				})
			this.change(100)
		}
	}
</script>
<style lang="css">
	.content {
		background: #fff;
	}
</style>
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
	
	.pref-info {
		position: relative;
		height: 1.157894rem;
		padding: 0 0.657894rem 0 0.394736rem;
		background: #fff;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.pref-info .pref-text {
		line-height: 1.157894rem;
		font-size: 0.315789rem;
		color: #656565;
	}
	
	.pref-info:after {
		content: '';
		position: absolute;
		top: 0.473684rem;
		right: 0.447368rem;
		width: 0.18421rem;
		height: 0.18421rem;
		border: 1px solid #b0b0b0;
		border-width: 1px 1px 0 0;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	
	.content {
		position: relative;
		top: 1.157894rem;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		height: 17.552631rem;
		background-color: #efefef;
	}
	
	.taglist {
		width: 25%;
		height: auto;
		overflow: scroll;
		font-size: 0.368421rem;
		color: #656565;
		text-align: left;
		position: relative;
	}
	
	.taglist ul {
		width: 100%;
		height: auto;
	}
	
	.taglist ul li {
		position: relative;
		margin: 0 0.157894rem;
		height: 1.578947rem;
		border-bottom: 1px solid #bfbfbf;
	}
	
	.taglist ul li span {
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		padding-left: 8px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-transform: translate(0, -50%);
		-moz-transform: translate(0, -50%);
		transform: translate(0, -50%);
		overflow: hidden;
		line-height: 17px;
		max-height: 34px;
		text-overflow: ellipsis;
		display: -webkit-box;
		display: box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.foodlist-label {
		padding-left: 0.421052rem;
		line-height: 0.947368rem;
		font-size: 0.342105rem;
		font-weight: normal;
		color: #333;
		position: relative;
	}
	
	.foodlist-label::before {
		content: '';
		position: absolute;
		top: 0.315789rem;
		left: 0.263157rem;
		height: 0.263157rem;
		width: 0.052631rem;
		background: #FFD161;
	}
	
	.fooditem {
		border-bottom: 1px solid #f0f0f0;
		padding: 0.394736rem 0 0.263157rem;
		margin-left: 0.263157rem;
	}
	
	.food-pic-wrap {
		position: relative;
		float: left;
		width: 1.631578rem;
		height: 1.631578rem;
		text-align: center;
		line-height: 1.631578rem;
		overflow: hidden;
	}
	
	.food-pic {
		vertical-align: middle;
	}
	
	.food-cont-wrap {
		margin-left: 1.894736rem;
	}
	
	.food-cont {
		position: relative;
	}
	
	.foodname {
		max-height: 2.5em;
		line-height: 1.25em;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-right: 0.263157rem;
		color: #2f2f2f;
		font-size: 0.421052rem;
	}
	
	.food-desc {
		margin: 0.131578rem 0.263157rem 0 0;
		line-height: 0.394736rem;
		font-size: 0.315789rem;
		color: #a9a9a9;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.food-price-region {
		font-size: 0;
		margin: 0.078947rem 0.263157rem 0 0;
	}
	
	.food-price {
		color: #fe4d3d;
		font-size: 0.473684rem;
	}
	
	.foodop {
		position: absolute;
		bottom: -10px;
		right: 0;
	}
	
	.add-food {
		text-align: left;
		width: 0.921052rem;
	}
	
	.add-food,
	.remove-food {
		height: 0.921052rem;
		float: right;
	}
	
	.icon {
		background-image: url(//xs01.meituan.net/waimai_i/img/sprite/tiny-icon.db95320f.png);
		background-size: 3.947368rem 9.210526rem;
		display: inline-block;
	}
	
	.i-add-food {
		width: 0.657894rem;
		height: 0.657894rem;
		background: url(//xs01.meituan.net/waimai_i/img/add-food.4a0b4c25.png) no-repeat center;
		-webkit-background-size: 0.657894rem;
		background-size: 0.657894rem;
	}
	
	.foodop-num {
		font-size: 0.394736rem;
		height: 0.710526rem;
		line-height: 0.710526rem;
		min-width: 0.552631rem;
		text-align: center;
		float: right;
	}
	
	.remove-food {
		width: 0.921052rem;
		text-align: right;
	}
	
	.add-food,
	.remove-food {
		height: 0.921052rem;
		float: right;
	}
	
	.clearfix:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}
	
	.fooditem {
		border-bottom: 1px solid #f0f0f0;
		padding: 0.394736rem 0 0.263157rem;
		margin-left: 0.263157rem;
	}
	
	.foodlistwrap {
		width: 85%;
		height: auto;
		overflow-y: scroll;
		background: #fff;
	}
	
	.cart {
		position: fixed;
		bottom: 0;
		z-index: 9000;
		width: 100%;
		height: 50px;
		background-color: rgba(51, 51, 51, 0.9);
		border-top: 1px solid #cacaca;
	}
	
	.cart-tip {
		color: #999;
		padding-left: 12px;
	}
	
	.cart-btns {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
	}
	
	.cart-icon {
		float: left;
		position: relative;
		top: -18px;
		margin-right: 10px;
	}
	
	.cart-empty {
		line-height: 50px;
		font-size: 13px;
		color: #888;
	}
	
	.ico-cart {
		background-position: 0 0;
	}
	
	.ico-cart,
	.spec-ico-cart {
		display: block;
		width: 50px;
		height: 57px;
		background: url(//xs01.meituan.net/waimai_i/img/cart.ab827c23.png) no-repeat;
		-webkit-background-size: 50px auto;
		-moz-background-size: 50px auto;
		background-size: 50px auto;
	}
	
	.cart-btn-confirm,
	.cart-btn-unavail {
		display: block;
		height: 100%;
	}
	
	.cart-btn-unavail .inner {
		background: transparent;
		color: #999;
	}
	
	.cart-btn-confirm .inner,
	.cart-btn-unavail .inner {
		display: block;
		width: 110px;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		text-align: center;
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
		border-radius: 0;
	}
	
	.red {
		background: #fff;
	}
</style>