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
				<template>
					<div class="j-fooditem fooditem food615535498 clearfix" v-for="(i,index) in spus">
						<div class="food-pic-wrap">
							<img class="j-food-pic food-pic" :src=i.picture visibility="hidden" style="width: 82.6667px; height: 62px; margin-left: -10.3333px; margin-top: 0px; visibility: visible;">
						</div>
						<div class="food-cont-wrap">
							<div class="food-cont">
								<div class="j-foodname foodname">{{i.name}}</div>
								<div class="food-desc">{{i.description}}</div>
								<div class="food-price-region"> <span class="food-price">¥{{i.min_price}}</span></div>
								<div class="j-item-console foodop clearfix">
									<a class="j-add-item add-food" href="javascript:;" @click="add(i.min_price,i.id,index)"><i class="icon i-add-food"></i></a>
									<span class="j-item-num foodop-num" v-show="i.showStatus">{{i.status}}</span>
									<a class="j-remove-item remove-food" v-show="i.show" href="javascript:;" @click="reduce(i.min_price,i.id,index)"><i class="icon i-remove-food"></i></a>
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
					<i class="j-ico-cart ico-cart" :class="icoCartActive"></i>
					<div class="j-cart-num cart-num" :class="nShow" style="display: none;">{{n}}</div>
				</div>
				<div class="j-cart-empty cart-empty" :class="display" style="display: block;">购物车空空如也～</div>
				<div class="j-cart-noempty cart-noempty" style="display: none;" :class="display2">
					<span class="j-cart-price cart-price">¥{{totalPrice}}</span>
					<br>
					<span class="cart-shipping">配送费以订单为准</span>
				</div>
			</div>
			<div class="cart-btns">
				<router-link :to="'/payment?businessName='+ $route.query.businessName +'&checked='+ JSON.stringify(checked)">
					<a class="cart-btn-confirm j-cart-btn-confirm" href="javascript:;" :class="shop" style="display: none;"><span class="inner">去结算</span></a>
				</router-link>
				<a class="cart-btn-unavail" :class="nShow2" style="display: none;"><span class="inner">还差¥{{a}}</span></a>
				<a class="cart-btn-unavail"><span class="inner">¥{{originPrice}}起送</span></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "orderDishes",
		data() {
			return {
				num: 0,
				taglist: [],
				spus: [],
				poi_info: [],
				businessList: [],
				businessName: [],
				changeRed: -1,
				icoCartActive: '',
				originPrice: '',
				display: '',
				display2: '',
				nShow: '',
				nShow2: '',
				shop: '',
				a: 0,
				b: 0,
				checked: [],
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
				this.axios.get('http://10.0.157.220:8888/getBusinessList?pageNum=1&pageSize=5')
					.then(res => {
						this.businessList = res.data.shop_data
						for(let tempBusiness of this.businessList) {
							this.businessName.push(tempBusiness.businessName)
						}
					})
				this.axios.get('http://10.0.157.220:8888/getDuckDetails')
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
						for(var i = 0; i < this.spus.length; i++) {
							this.spus[i].show = false
							this.spus[i].showStatus = false
						}
					})
			},
			add(price, id, index) {
				console.log('--')
				this.spus[index].show = true
				this.spus[index].showStatus = true
				this.spus[index].status++;
				this.icoCartActive = 'ico-cart-active'
				this.$store.dispatch('add', price)
				this.display = "display"
				this.display2 = "display2"
				this.nShow = "nShow"
				this.nShow2 = "nShow2"
				//差价计算
				this.a = this.originPrice - this.totalPrice
				this.a = this.a.toFixed(1)
				if(this.a <= 0) {
					this.shop = 'shop'
					this.a = 0
				}
				//id与数量
				var obj = {}
				obj.id = id
				obj.numbers = 1
				if(this.returnTrue(id, this.checked)) {
					for(var i = 0; i < this.checked.length; i++) {
						if(this.checked[i].id == id) {
							this.checked[i].numbers++
						}
					}
				} else {
					this.checked.push(obj)
				}
				console.log('加', this.checked)
			},
			returnTrue(id, arr) {
				if(arr.length > 0) {
					for(var i = 0; i < arr.length; i++) {
						if(arr[i].id == id) {
							return true
						}
					}
					return false
				}
			},
			reduce(price, id, index) {
				if(this.spus[index].status > 0) {
					this.spus[index].status--;
				}
				if(this.spus[index].status == 0) {
					this.spus[index].show = false
					this.spus[index].showStatus = false
					this.display = ""
					this.display2 = ""
				}
				this.$store.dispatch('reduce', price)
				//差价计算
				this.a = this.originPrice - this.totalPrice
				if(this.a >= 0) {
					this.shop = ''
					this.a = this.originPrice - this.totalPrice
					this.a = this.a.toFixed(1)
				}
				if(this.n == '0') {
					this.nShow = ""
				}
				if(this.returnTrue(id, this.checked)) {
					for(var i = 0; i < this.checked.length; i++) {
						if(this.checked[i].id == id) {
							this.checked[i].numbers--
						}
						if(this.checked[i].numbers == 0) {
							this.checked.splice(i, 1)
						}
					}
				}
				console.log('减', this.checked)
			}
		},
		created() {
			this.axios.get('http://10.0.157.220:8888/getDuckDetails?pageNum=1&pageSize=5')
				.then(res => {
					for(var j in res.data) {
						if(j == this.$route.query.businessName) {
							this.taglist = res.data[j].food_spu_tags
							this.originPrice = res.data[j].poi_info.min_price_tip
						}
					}
				})
			this.change(100)
		},
		computed: {
			n() {
				if(this.$store.getters.getTotaln == 0) {
					this.icoCartActive = ''
				}
				return this.$store.getters.getTotaln
			},
			totalPrice() {
				return this.$store.getters.getTotalPrice
			},
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
	
	.shop {
		display: block!important;
	}
	
	.nShow {
		display: block!important;
	}
	
	.nShow2 {
		display: block!important;
	}
	
	.display {
		display: none!important;
	}
	
	.display2 {
		display: block!important;
	}
	
	.cart-shipping {
		display: block;
		font-size: 12px;
		margin-left: 4px;
		margin-top: -7px;
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
		padding-left: 0.210526rem;
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
		height: 1.315789rem;
		background-color: rgba(51, 51, 51, 0.9);
		border-top: 1px solid #cacaca;
	}
	
	.cart-tip {
		color: #999;
		padding-left: 0.315789rem;
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
		margin-right: 0.263157rem;
	}
	
	.cart-empty {
		line-height: 1.315789rem;
		font-size: 0.342105rem;
		color: #888;
	}
	
	.ico-cart {
		background-position: 0 0;
	}
	
	.ico-cart,
	.spec-ico-cart {
		display: block;
		width: 1.315789rem;
		height: 1.5rem;
		background: url(//xs01.meituan.net/waimai_i/img/cart.ab827c23.png) no-repeat;
		-webkit-background-size: 1.315789rem auto;
		-moz-background-size: 1.315789rem auto;
		background-size: 1.315789rem auto;
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
		width: 2.894736rem;
		height: 1.315789rem;
		line-height: 1.315789rem;
		font-size: 0.421052rem;
		text-align: center;
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
		border-radius: 0;
	}
	
	.red {
		color: #333;
		background-color: #fff;
		margin: 0!important;
		border-right: 1px solid #fff;
		border-bottom: 1px solid #fff!important;
	}
	
	.red span {
		margin: 0 0.157894rem!important;
	}
	
	.remove-food {
		width: 0.921052rem;
		text-align: right;
	}
	
	.cart-num {
		border-radius: 50% 50%;
		background-color: #FB4E44;
		width: 0.526315rem;
		height: 0.526315rem;
		line-height: 0.473684rem;
		font-size: 0.315789rem;
		font-size: 0.315789rem;
		text-align: center;
		position: absolute;
		top: 0.052631rem;
		right: 0;
		color: #fff;
		border: 1px solid #fff;
	}
	
	.add-food,
	.remove-food {
		height: 0.921052rem;
		float: right;
	}
	
	.i-remove-food {
		width: 0.736842rem;
		height: 0.736842rem;
		background-position: -16px -30px;
	}
	
	.ico-cart-active {
		background-position: 0 -57px;
	}
	
	.cart-price {
		font-size: 0.526315rem;
		margin-left: 0.105263rem;
		color: #fff;
		line-height: 0.921052rem;
	}
	
	.cart-btn-confirm .inner {
		background-color: #FFD161;
		color: #333;
	}
</style>