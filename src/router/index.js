//配置路由的js
//导入路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
//全局安装一下路由模块
Vue.use(VueRouter)
//分别导入四个组件
import Home from '../components/home'
import Order from '../components/order'
import Mine from '../components/mine'
//创建路由实例，并且配置路由规则,并且导出
export default new VueRouter({
	//这里写路由规则
	routes: [
		//这个payh就是router-link里的to跳转的地址
		//commonpent就是根据路由地址，找到对应的组件，显示到router-view中
		{
			path: '',
			component: Home
		},
		{
			path: '/home',
			component: Home
		},
		{
			path: '/order',
			component: Order
		},
		{
			path: '/mine',
			component: Mine
		}
	]
})