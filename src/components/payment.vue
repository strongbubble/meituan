<template>
	<div>
		<header id="header" class="header pa-he">
			<a class="back-w" href="javascript:;">
				<span @click="back"><img src="../../static/images/返回.png"/></span>
			</a>
			<div class="headerR"></div>
			<h1 class="order">订单确认</h1>
		</header>

		<div>
			<form>
				<div class="address-time">
					<div>
						<a class="address-field address-choose" href="javascript:"><i class="addr-add"></i><span>北京市朝阳区芍药居北里1002室</span></a>
					</div>
					<div class="order-timefield">
						<i class="order-timefield-ico"></i>
						<div>
							<div class="order-timefield-txt">立即送出<i>(大约16:23送达)</i></div>
						</div>
					</div>
				</div>
				<div class="order-region order-foods-region">
					<div class="order-food-title">
						<div class="order-food-shop"><i class="food-shop-icon"></i><span>{{$route.query.businessName}}</span></div>
						<p class="order-tips-thirdpart delivery_mt">美团专送</p>
					</div>
					<div>
						<div class="food-item" v-for="show in showArr">
							<div class="food-item-img"> <img :src="show.picture" alt=""> </div>
							<div class="food-item-price">
								<p class="food-price-current">¥{{show.min_price}}</p>
							</div>
							<div class="food-item-info">
								<p class="food-item-name">{{show.name}}</p>
								<p class="food-item-subdtl">{{show.unit}}</p>
								<p class="food-item-num">×{{show.numbers}}</p>
							</div>
						</div>
					</div>
					<ul class="order-region">
						<li class="order-entry"> <span class="order-price">{{poi_info}}</span> <span class="order-name">配送费</span> </li>
					</ul>
					<div class="divide">
						<div class="divide-line"></div>
					</div>
					<ul class="order-region" style="">
						<li>
							<a class="order-entry">
								<span>商家代金券</span><span class="order-coupon-num"><span>填写地址后可选</span><i class="icon-arrow-rt"></i></span>
							</a>
						</li>
					</ul>
					<div class="divide">
						<div class="divide-line"></div>
					</div>
					<ul class="order-region clearfix">
						<li class="order-entry"><span class="pay-price">实付<em>￥99</em></span><span class="total-original">共计￥38.00</span></li>
					</ul>
				</div>

				<div class="order-region" style="">
					<ul class="order-region">
						<li class="order-entry"><span>支付方式</span><span id="order-pay-type" class="order-pay-type" data-selected-type="2"><span id="order-pay-text">在线支付</span><i class="icon-arrow-rt"></i></span>
						</li>
					</ul>
					<div class="order-field clearfix">
						<div class="order-field-inner">
							<label class="remarks">备注/发票：</label>
							<a class="require">口味、偏好等要求</a>
						</div>
					</div>
				</div>
			</form>
			<div class="order-btn-field">
				<input class="combtn order-btn" type="submit" value="提交订单">
				<span class="order-total-field">待支付<em class="order-total">￥38.00</em></span>
				<span class="order-benefit"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "payment",
		data() {
			return {
				taglist: [],
				spusL: [],
				checked: [],
				showArr: [],
				poi_info: '',
			}
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}

			this.axios.get('http://10.0.157.220:8888/getDuckDetails').then(res => {
				//商品id
				var shopList = JSON.parse(this.$route.query.checked)
				for(var i of shopList) {
					var obj = {}
					obj.id = i.id
					obj.numbers = i.numbers
					this.checked.push(obj)
					console.log(this.checked)
				}
				//商品信息
				for(var j in res.data) {
					if(j == this.$route.query.businessName) {
						for(var i in res.data[j].food_spu_tags) {
							this.poi_info = res.data[j].poi_info.shipping_fee_tip
							for(var m of res.data[j].food_spu_tags[i].spus) {
								for(var g in this.checked) {
									if(this.checked[g].id == m.id) {
										this.showArr.push(m)
									}
								}
							}
						}
					}
				}
				//去重
				var temp = this.showArr
				var item = []
				for(var i = 0; i < this.showArr.length; i++) {
					item.push(this.showArr[i].id)
				}
				item = Array.from(new Set(item));
				var last = []
				for(var i = 0; i < item.length; i++) {
					var obj = {}
					for(var j = 0; j < temp.length; j++) {
						if(item[i] === temp[j].id) {
							obj.picture = temp[j].picture
							obj.min_price = temp[j].min_price
							obj.name = temp[j].name
							obj.unit = temp[j].unit
							obj.id = temp[j].id
							if(item[i] == this.checked[i].id) {
								obj.numbers = this.checked[i].numbers
							}
						}
					}
					last.push(obj)
				}
				this.showArr = last
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
		},
	}
</script>

<style lang="css" scoped>
	h1 {
		color: red;
	}
	
	header span img {
		height: 0.473684rem;
	}
	
	.pa-he {
		height: 1.105263rem;
		background: #f4f4f4;
		border-bottom-color: #f4f4f4;
	}
	
	.pa-he {
		text-align: center;
		position: relative;
	}
	
	.header .back-w {
		position: absolute;
		top: 0;
		left: 0;
		height: 1.105263rem;
		line-height: 1.105263rem;
		padding: 0 0.789473rem 0 0.210526rem;
		padding-left: 0.394736rem;
		margin-top: 0.157894rem;
	}
	
	.header .i-back {
		font-size: 0.631578rem;
		color: #333;
		display: inline-block;
		vertical-align: top;
		margin-top: 0.289473rem;
		float: left;
	}
	
	.header .headerR {
		position: absolute;
		top: 0;
		right: 0.263157rem;
		height: 100%;
		line-height: 42px;
	}
	
	.order {
		color: #333;
		font-weight: normal;
	}
	
	.order {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0 1.710526rem;
		text-align: center;
		line-height: 1.157894rem;
		font-size: 0.447368rem;
		color: #333;
	}
	
	form {
		margin: 0 0.263157rem;
	}
	
	.address-time {
		background: #fff;
		margin-top: 0.315789rem;
	}
	
	.address-choose {
		height: 1.157894rem;
	}
	
	.address-field {
		display: block;
		background-color: #fff;
		padding: 0 0.263157rem;
		font-size: 0.368421rem;
		position: relative;
	}
	
	.addr-add {
		float: left;
		width: 0.526315rem;
		height: 0.526315rem;
		margin: 0.289473rem 0.263157rem 0 0;
	}
	
	.address-choose span {
		line-height: 1.157894rem;
		color: #FFB000;
		font-size: 0.421052rem;
	}
	
	.order-timefield {
		padding: 0.394736rem 0.526315rem 0.394736rem 40px;
		border-top: 1px solid #f0f0f0;
		position: relative;
	}
	
	.order-timefield-ico {
		position: absolute;
		left: 0.263157rem;
		top: 0.394736rem;
		width: 0.526315rem;
		height: 0.526315rem;
	}
	
	i {
		font-style: normal;
	}
	
	.icon-arrow-rt:before,
	.address-show:after,
	.order-timefield:after {
		content: '';
		position: absolute;
		right: 0.342105rem;
		top: 50%;
		width: 0.210526rem;
		height: 0.210526rem;
		margin-top: -0.131578rem;
		border: 1px solid #adadad;
		border-width: 1px 1px 0 0;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	
	.order-timefield-txt {
		color: #333;
		font-weight: bold;
		font-size: 0.421052rem;
	}
	
	.order-timefield-txt i {
		margin-left: 0.131578rem;
		color: #348BED;
		font-size: 0.368421rem;
		font-style: normal;
		font-weight: normal;
	}
	
	.divide {
		position: relative;
		height: 0.157894rem;
		padding-top: 0.157894rem;
	}
	
	.order-food-title {
		position: relative;
		height: 1.315789rem;
		line-height: 1.315789rem;
		padding: 0 0.394736rem;
		color: #898989;
		font-size: 0.368421rem;
		overflow: hidden;
	}
	
	.order-food-shop {
		box-sizing: border-box;
		float: left;
		max-width: 100%;
		padding-right: 1.973684rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.delivery_mt {
		background: #FFD161;
	}
	
	.order-tips-thirdpart {
		position: absolute;
		right: 0.394736rem;
		height: 0.394736rem;
		line-height: 0.394736rem;
		margin-top: 0.447368rem;
		padding: 0 0.131578rem;
		color: #333;
		font-size: 0.263157rem;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		text-align: center;
	}
	
	.food-shop-icon {
		display: inline-block;
		vertical-align: -0.078947rem;
		margin-right: 0.157894rem;
		overflow: hidden;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
	}
	
	.order-food-shop {
		box-sizing: border-box;
		float: left;
		max-width: 100%;
		padding-right: 1.973684rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.order-food-title {
		position: relative;
		height: 1.315789rem;
		line-height: 1.315789rem;
		padding: 0 0.394736rem;
		color: #898989;
		font-size: 0.368421rem;
		overflow: hidden;
	}
	
	.delivery_mt {
		background: #FFD161;
	}
	
	.delivery_mt:before,
	.delivery_mt:after {
		content: '';
		position: absolute;
		border: 2px solid #fff;
	}
	
	.delivery_mt:before {
		left: 0;
		top: 0;
		border-color: #fff #FFD161 #FFD161 #fff;
	}
	
	.delivery_mt:after {
		right: 0;
		bottom: 0;
		border-color: #FFD161 #fff #fff #FFD161;
	}
	
	.order-region {
		margin-top: 0.263157rem;
		background: #fff;
		font-size: 0.368421rem;
	}
	
	.food-item:last-child {
		margin-bottom: 0;
	}
	
	.food-item {
		padding: 0.263157rem;
		background: #F8F8F8;
		overflow: hidden;
		margin-bottom: 0.263157rem;
	}
	
	.food-item-img {
		float: left;
		width: 1.447368rem;
		height: 1.447368rem;
		overflow: hidden;
	}
	
	.food-item-img img {
		width: 1.447368rem;
		height: 1.447368rem;
		object-fit: cover;
	}
	
	.food-item-price {
		float: right;
		width: 1.18421rem;
		text-align: right;
	}
	
	.food-price-current {
		line-height: 0.526315rem;
		font-size: 0.368421rem;
		color: #333;
	}
	
	.food-item-info {
		margin: 0 1.447368rem 0 1.710526rem;
	}
	
	.food-item-name {
		line-height: 0.526315rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.368421rem;
	}
	
	.food-item-num {
		color: #999;
		font-size: 0.315789rem;
	}
	
	.order-foods-region .order-region {
		margin-left: 0.394736rem;
	}
	
	.order-region li:first-child {
		padding-top: 0.236842rem;
	}
	
	.order-foods-region .order-entry {
		margin-top: 0;
		border-top: 0;
		margin-left: 0;
		padding: 0.210526rem 0;
	}
	
	.order-region li {
		padding-top: 0.394736rem;
	}
	
	.order-entry {
		border-top: 1px solid #f0f0f0;
		padding: 0.342105rem 0.394736rem 0.342105rem 0;
		margin-top: -1px;
		margin-left: 0.394736rem;
		font-size: 0.368421rem;
		position: relative;
		color: #2f2f2f;
		overflow: hidden;
	}
	
	.order-price {
		position: absolute;
		top: 0.210526rem;
		right: 0.394736rem;
		font-size: 0.315789rem;
	}
	
	.order-name {
		width: 10em;
	}
	
	.order-name,
	.order-favor-name {
		overflow: hidden;
		display: block;
		line-height: 1.15em;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.divide {
		position: relative;
		height: 0.157894rem;
		padding-top: 0.157894rem;
	}
	
	.divide:before,
	.divide:after {
		content: '';
		position: absolute;
		top: 0;
		width: 0.315789rem;
		height: 0.315789rem;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		background: #f4f4f4;
	}
	
	.divide:before {
		left: -0.157894rem;
	}
	
	.divide:after {
		right: -0.157894rem;
	}
	
	.divide-line {
		margin: 0 0.263157rem;
		height: 0;
		font-size: 0;
		border-top: 1px dotted #ddd;
	}
	
	.order-coupon-num {
		float: right;
		margin-right: 0.394736rem;
		color: #aaa;
		font-size: 0.368421rem;
	}
	
	.order-entry {
		border-top: 1px solid #f0f0f0;
		padding: 0.342105rem 0.394736rem 0.342105rem 0;
		margin-top: -1px;
		margin-left: 0.394736rem;
		font-size: 0.368421rem;
		position: relative;
		color: #2f2f2f;
		overflow: hidden;
	}
	
	.pay-price {
		float: right;
		margin: 0 0.394736rem 0 0;
		line-height: 0.631578rem;
	}
	
	.pay-price em {
		color: #fe4d3d;
		font-size: 0.421052rem;
		font-style: normal;
	}
	
	.total-original {
		float: right;
		line-height: 0.631578rem;
		margin-right: 0.263157rem;
		color: #898989;
		font-size: 0.315789rem;
	}
	
	.clearfix:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}
	
	.order-region li:last-child {
		padding-bottom: 0.236842rem;
	}
	
	.order-region li:first-child {
		padding-top: 0.236842rem;
	}
	
	.order-region li {
		padding-top: 0.394736rem;
	}
	
	.order-pay-type {
		float: right;
		font-size: 0.342105rem;
	}
	
	.order-pay-type .icon-arrow-rt {
		display: none;
	}
	
	.icon-arrow-rt {
		width: 0.157894rem;
		height: 0.342105rem;
		line-height: 0.342105rem;
		display: inline-block;
		text-indent: -0.157894rem;
		vertical-align: 0.052631rem;
		font-size: 0.447368rem;
		margin-left: 0.210526rem;
		color: #aaa;
	}
	
	.order-field {
		background-color: #fff;
		margin: 0 0 0 0.394736rem;
		line-height: 1.315789rem;
		font-size: 0.368421rem;
		position: relative;
		border-top: 1px solid #efefef;
		height: 1.315789rem;
	}
	
	.remarks {
		top: 0;
		left: 0;
		position: absolute;
		font-size: 0.368421rem;
	}
	
	.require {
		padding: 0px;
		width: 62%;
		margin-left: 30%;
		font-size: 0.368421rem;
		text-align: right;
		display: inline-block;
		color: #999;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.order-field-inner:after,
	.address-show:after,
	.order-timefield:after {
		content: '';
		position: absolute;
		right: 0.342105rem;
		top: 50%;
		width: 0.210526rem;
		height: 0.210526rem;
		margin-top: -0.131578rem;
		border: 1px solid #adadad;
		border-width: 1px 1px 0 0;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	
	.order-btn-field-placeholder {
		width: 100%;
		height: 1.342105rem;
		margin-top: 0.394736rem;
	}
	
	.order-btn-field {
		width: 100%;
		height: 1.315789rem;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #e0e0e0;
		background-color: #fff;
	}
	
	.order-btn {
		float: right;
		width: 2.894736rem;
		height: 1.315789rem;
		font-size: 0.421052rem;
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
		border-radius: 0;
		color: #333;
		background: #FFD161;
	}
	
	.combtn {
		background: #ffd300;
		color: #6b450a;
	}
	
	.combtn {
		border: 0;
		color: #FFFFFF;
		background-color: #FF6900;
		text-align: center;
		cursor: pointer;
		-webkit-appearance: none;
		-moz-border-radius: 0.078947rem;
		-webkit-border-radius: 0.078947rem;
		-ms-boder-radius: 0.078947rem;
		-o-boder-radius: 0.078947rem;
		border-radius: 0.078947rem;
	}
	
	.order-total-field {
		float: right;
		margin-right: 0.263157rem;
		height: 1.315789rem;
		line-height: 1.315789rem;
		color: #2f2f2f;
		font-size: 0.368421rem;
	}
	
	.order-total {
		color: #fb4e44;
		font-size: 0.552631rem;
		font-style: normal;
		vertical-align: middle;
	}
	
	.order-benefit {
		display: block;
		margin-left: 0.394736rem;
		height: 1.315789rem;
		line-height: 1.315789rem;
		color: #2f2f2f;
		font-size: 0.368421rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.food-item-subdtl {
		line-height: 18px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #999;
		font-size: 12px;
	}
</style>