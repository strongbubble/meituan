// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../static/App.css'
// 引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);
//import { InfiniteScroll } from 'mint-ui';
//Vue.use(InfiniteScroll);
// 导入我们自定义的vuex仓库
import store from './store'
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	// 挂载store
	store
})