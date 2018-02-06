<template>
	<div class="search">
		<div class="search-header-wrap">
			<div class="search-header">
				<a class="search-back-wrap" href="/">
					<i class="search-i-back"></i>
				</a>
				<div class="search-sec">
					<form action="#">
						<i class="search-icon"></i>
						<span class="j-search-close-wrap search-close-wrap"><i class="search-close"></i></span>
						<input class="j-search-input search-input" type="search" placeholder="请输入商家或商品名称">
					</form>
				</div>
				<span class="j-search-btn search-btn">搜索</span>
			</div>
		</div>
		<div id="rmd-history">
			<div class="j-search-rmd-wrap search-rmd-wrap" style="">
				<div class="search-rmd-title">
					<h2>热门搜索</h2></div>

				<div class="j-search-rmd search-rmd">
					<a href="/restaurant/349761656555664" class="j-search-rmd-text search-rmd-text">河南烩面馆</a>
					<a href="/restaurant/475084507279453" class="j-search-rmd-text search-rmd-text">江南鸭血粉丝汤</a>
					<a href="/restaurant/486921437142538" class="j-search-rmd-text search-rmd-text">山西特色面菜馆</a>
				</div>
			</div>
			<div class="j-search-history-wrap search-history-wrap" style="">
				<div class="search-rmd-title">
					<h2>历史搜索</h2><span class="j-search-history-clear search-history-clear"></span></div>

				<div class="j-search-history search-history">
					<div class="j-search-history-item search-history-item"><span class="search-history-text">盛昌潮汕砂锅粥</span></div>
					<div class="j-search-history-item search-history-item"><span class="search-history-text">望京</span></div>
				</div>
			</div>
			<div id="rmd-poilist-wrap" style="display: none;">
				<h3 class="rmd-poilist-head">推荐商家</h3>

				<div id="rmd-poilist" class="rmd-poilist">
					<p class="rmd-poilist-loading">加载中...</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {

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
html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, form, button, dl, dt, dd, input, textarea {
    margin: 0;
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    word-wrap: break-word;
    word-break: break-all;
    padding: 0;
    margin: 0;
    font-family: Arial,Helvetica,sans-serif;
}
	.search {
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	
	.search-header-wrap {
		height:1.263157rem;
	}
	
	.search-header {
		position: relative;
		height:1.263157rem;
		background: #fff;
	}
	
	.search-back-wrap {
		position: absolute;
		left: 0;
		top: 0;
		width: 1.052631rem;
		height:1.263157rem;
	}
	
	a {
		text-decoration: none;
		outline: none;
	}
	
	.search-i-back {
		position: absolute;
		top: 0.5rem;
		right: 0.25rem;
		width: 0.473684rem;
		height:0.473684rem;
		border: 2px solid #333;
		border-width: 0 0 2px 2px;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	
	.search-sec {
		position: relative;
		height: 0.868421rem;
		margin: 0 2.2rem 0 0.85rem;
		padding-top: 0.35rem;
	}
	
	.search-icon {
		position: absolute;
		left: 0.35rem;
		top: 0.6rem;
		width: 0.394736rem;
		height:0.394736rem;
		background: url(//xs01.meituan.net/waimai_i/img/search_ico.0a0d5ab4.png) no-repeat;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		background-size: cover;
	}
	
	.search-close-wrap {
		display: none;
		position: absolute;
		right: 0;
		top: 0.35rem;
		width: 1rem;
		height: 0.868421rem;
	}
	
	.search-close {
		position: absolute;
		top: 0.45rem;
		left: 0;
		width: 0.6rem;
		height: 0.6rem;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		background: #ccc;
	}
	
	.search-input {
		display: block;
		width: 100%;
		height: 0.868421rem;
		line-height: 0.868421rem;
		padding: 0.25rem 0 0.25rem 1.25rem;
		border: 0;
		-webkit-border-radius: 0.1rem;
		-moz-border-radius: 0.1rem;
		border-radius: 0.1rem;
		background: #F2F2F2;
		font-size: 0.4rem;
	}
	
	.search-btn {
		position: absolute;
		top: 0.35rem;
		right: 0.5rem;
		width: 1.447368rem;
		height: 0.868421rem;
		line-height: 0.868421rem;
		font-size: 0.4rem;
		color: #333;
		text-align: center;
		background: #FFD161;
		-webkit-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
	}
	
	.search-rmd-wrap {
		margin-bottom: 0.5rem;
	}
	
	.search-rmd-title {
		position: relative;
		height: 1.026315rem;
		background: #fff;
		padding-left: 0.35rem;
	}
	
	.search-rmd-title h2 {
		border-bottom: 1px solid #E4E4E4;
		line-height: 1.026315rem;
		color: #656565;
		font-size: 0.4rem;
		font-weight: normal;
	}
	
	.search-rmd {
		max-height: 4.4rem;
		padding: 0.2rem 0.55rem;
		background: #fff;
		overflow: hidden;
	}
	
	.search-rmd-text {
		float: left;
		max-width: 8.5rem;
		min-width: 2.65rem;
		height: 0.868421rem;
		line-height: 0.868421rem;
		margin: 0.2rem 0.25rem;
		padding: 0 0.75rem;
		-webkit-box-sizing: border-box;
		-mox-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-border-radius: 0.1rem;
		-moz-border-radius: 0.1rem;
		border-radius: 0.1rem;
		border: 1px solid #ccc;
		color: #2f2f2f;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: center;
		font-size: 0.35rem;
	}
	
	.search-rmd-title {
		position: relative;
		height: 1.026315rem;
		background: #fff;
		padding-left: 0.75rem;
	}
	
	.search-rmd-title h2 {
		border-bottom: 1px solid #E4E4E4;
		line-height: 1.026315rem;
		color: #656565;
		font-size: 0.4rem;
		font-weight: normal;
	}
	
	.search-history-clear {
		position: absolute;
		top: 0.25rem;
		right: 0.5rem;
		width: 0.710526rem;
		height: 0.710526rem;
		background: url(//xs01.meituan.net/waimai_i/img/dusbin.cc885631.png) no-repeat center;
		background-size: 0.35rem auto;
	}
	
	.search-history {
		padding: 0.5rem 0.75rem 0;
		background: #fff;
		overflow: hidden;
	}
	
	.search-history-item {
		float: left;
		margin: 0 0.5rem 0.5rem 0;
		height: 0.868421rem;
		line-height: 0.868421rem;
		padding: 0 0.5rem;
		border: 1px solid #ccc;
		color: #333;
		font-size: 0.6rem;
	}
	
	.search-history-text {
		line-height: 0.868421rem;
		font-size: 0.4rem;
		color: #656565;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.rmd-poilist-head {
		height: 32px;
		line-height: 32px;
		padding: 0 15px;
		background: #efefef;
		font-size: 12px;
	}
	
	.rmd-poilist {
		background: #fff;
	}
	
	.rmd-poilist-loading {
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 12px;
	}
	
	.searching {
		margin-top: 5rem;
		line-height: 1.1rem;
		font-size: 0.8rem;
		color: #656565;
		text-align: center;
	}
</style>