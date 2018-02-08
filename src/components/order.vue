<template>
	<div class="order">
		<div id="header">
			<h1>订单</h1>

		</div>
		<div id="order_list">
			<div v-for="list in myList" id="div1">
				<div id="div_head">
					<img src="../../static/order_img/img_1.jpg"/>
					<div class="right_">
						<a href="#">{{ list.poi_name }}</a>
						<span>订单完成</span>
						
					</div>
					
				</div>
				<div class="div_center">
					<ul v-for="list1 in list.product_list">
						<li>
							<span>{{ list1.product_name }}</span>
							<span>{{ list1.product_count }}</span>
						</li>
						<!--<li>
							<span>烤小腰</span>
							<span>x1</span>
						</li>
						<li>
							<span>鸡胗(5串一份)</span>
							<span>x1</span>
						</li> -->
					</ul>
						<li v-for="list2 in list.product_list">
							<!-- <span>...</span> -->
							<span>{{ list2.total }}</span>
						</li> 
				</div>
				<div class="div_bottom">
					<button id="btn_1">评价</button>
					<button>再来一单</button>
				</div>
			</div>
		</div>
		
	</div>
</template>


<script>
	export default {
		name: "order",
		data() {
			return {
				msg: '订单',
				myList: []
			}
		},
		mounted() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
		},
		created() {
			this.axios.get('http://10.0.157.220:8888/getList?pageNum=1&pageSize=3')
			.then(res => {
				// this.myList = res.data.data.digestlist
				// console.log(this.myList);
				for (const list of res.data.digestlist) {
					this.myList.push(list);
				}
				console.log(this.myList);
				

			});
		}

	}
</script>

<style lang="css" scoped>
	*{
		overflow: inherit
	}
	#header{
		width: 100%;
		height: 1.157895rem;
		background-color: white;
		border-bottom: 1px solid #b2b2b2;
	}
	h1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0 1.710526rem;
		text-align: center;
		line-height: 1.157895rem;
		font-size: 0.447368rem;
		color: #333;
	}
	#order_list{
		/*background-color: #efefef;*/
		margin-top: 0.394736rem ;
		background-color: white;
	}
	#div_head img{
		width: 1.052631rem;
		height: 1.052631rem;
		border-radius: 50%;
		margin-left: 0.394736rem;
		margin-top: 0.157894rem;
		float: left;
	}
	#div_head{
		margin-top: 0.394736rem;
	}
	.right_{
		width: 83%;
		height: 1.342105rem;
		float: right;	
		border-bottom: 0.026315rem solid #e0e0e0;
		position: relative;
	}
	#div_head a{
		font-size: 0.421052rem;
		font-weight: bold;
		color: #333333;
		margin-bottom: 0.473684rem;
		position: absolute;
		top: 0.447368rem;
		background: url(../../static/order_img/未标题-1.gif) center right no-repeat;
		display: block;
		width: 2rem;
	}
	#div_head span{
		font-size: 0.368421rem;
		color: #bfbfb3;
		/*margin-right: 0.394736rem;*/
		position: absolute;
		top: 0.526315rem;
		right: 0.394736rem;
		
	}
	.div_center{
		/*height: 2.973684rem;*/
		clear: both;
		padding-top: 0.315789rem;
		border-bottom: 0.026315rem solid #e0e0e0;
	}
	.div_center ul{
		margin-left: 17%;
		list-style: none;
	}
	.div_center ul li{
		font-size: 0.368421rem;
		position: relative;
		
	}
	.div_center ul li span:nth-of-type(2){
		position: absolute;
		right: 0.394736rem;
		
	}
	.div_center ul li:nth-last-child{
		line-height: 0.947368rem;
	}
	.div_bottom{
		height: 1.315789rem;
		width: 100%;
		position: relative;
	}
	.div_bottom button:nth-of-type(1){
		height: 0.842105rem;
		width: 2.631578rem;
		background-color: #FFD161;
		border: none;
		border-radius: 2px;
		position: absolute;
		top: 0.236842rem;
		right: 3.026315rem;
		outline: none;
	}
	.div_bottom button:nth-of-type(2){
		height: 0.842105rem;
		width: 2.631578rem;
		border: 0.052631rem solid #dedede;
		border-radius: 2px;
		background-color: #ffffff;
		position: absolute;
		top: 0.236842rem;
		right: 0.394736rem;
		outline: none;
		
	}

</style>