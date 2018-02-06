<template>
	<div>
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

		},
		methods: {

		},
		computed: {

		}
	}
</script>

<style lang="css" scoped>
.search-header-wrap {
    height: 2.2rem;
}
.search-header {
    position: relative;
    height: 2.2rem;
    background: #fff;
}
.search-back-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 1.85rem;
    height: 2.2rem;
}
a {
    text-decoration: none;
    outline: none;
}
.search-i-back {
    position: absolute;
    top: 0.65rem;
    right: 0.25rem;
    width: 0.7rem;
    height: 0.7rem;
    border: 2px solid #333;
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
}
.search-sec {
    position: relative;
    height: 1.5rem;
    margin: 0 3.5rem 0 1.85rem;
    padding-top: 0.35rem;
}
.search-icon {
    position: absolute;
    left: 0.35rem;
    top: 0.75rem;
    width: 0.7rem;
    height: 0.7rem;
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
    height: 1.5rem;
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
    height: 1.5rem;
    line-height: 1rem;
    padding: 0.25rem 0 0.25rem 1.25rem;
    border: 0;
    -webkit-border-radius: 0.1rem;
    -moz-border-radius: 0.1rem;
    border-radius: 0.1rem;
    background: #F2F2F2;
    font-size: 0.7rem;
}
.search-btn {
    position: absolute;
    top: 0.35rem;
    right: 0.5rem;
    width: 2.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.7rem;
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
    height: 1.75rem;
    background: #fff;
    padding-left: 0.75rem;
}
.search-rmd-title h2 {
    border-bottom: 1px solid #E4E4E4;
    line-height: 1.75rem;
    color: #656565;
    font-size: 0.7rem;
    font-weight: normal;
}
.search-rmd {
    max-height: 4.4rem;
    padding: 0.4rem 0.45rem;
    background: #fff;
    overflow: hidden;
}
.search-rmd-text {
    float: left;
    max-width: 8.5rem;
    min-width: 2.65rem;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: 0.4rem 0.25rem;
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
    font-size: 0.65rem;
}
.search-rmd-title {
    position: relative;
    height: 1.75rem;
    background: #fff;
    padding-left: 0.75rem;
}
.search-rmd-title h2 {
    border-bottom: 1px solid #E4E4E4;
    line-height: 1.75rem;
    color: #656565;
    font-size: 0.7rem;
    font-weight: normal;
}
.search-history-clear {
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    background: url(//xs01.meituan.net/waimai_i/img/dusbin.cc885631.png) no-repeat center;
    background-size: 0.75rem auto;
}
.search-history {
    padding: 0.5rem 0.75rem 0;
    background: #fff;
    overflow: hidden;
}
.search-history-item {
    float: left;
    margin: 0 0.5rem 0.5rem 0;
    height: 1.35rem;
    line-height: 1.35rem;
    padding: 0 0.5rem;
    border: 1px solid #ccc;
    color: #333;
    font-size: 0.6rem;
}
.search-history-text {
    line-height: 1.35rem;
    font-size: 0.7rem;
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