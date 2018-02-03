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
import NotFound from '../components/NotFound'
import BusinessList from '../components/businessList'
import LogIn from '../components/logIn'
import OrderDishes from '../components/orderDishes'
import Evaluate from '../components/evaluate'
import Seller from '../components/seller'
import Adress from '../components/adress'
import Add from '../components/add'
import LoginMeituan from '../components/loginMeituan'
import LoginPhone from '../components/loginPhone'
import Payment from '../components/payment'
//创建路由实例，并且配置路由规则,并且导出
export default new VueRouter({
	// 配置H5的history模式，这样URL会好看些
	mode: 'history',
	//这里写路由规则
	routes: [{
			path: '',
			redirect: 'home',
			meta: { navShow: true, cname: '一级页面' },
		},
		{
			path: '/home',
			component: Home,
			meta: { navShow: true, cname: '一级页面' },
		},
		{
			path: '/order',
			component: Order,
			meta: { navShow: true, cname: '一级页面' },
		},
		{
			path: '/mine',
			component: Mine,
			meta: { navShow: true, cname: '一级页面' },
		},
		{
			path: '/businessList',
			component: BusinessList,
			meta: { navShow: false, cname: '二级页面' },
			children: [{
					path: '',
					redirect: 'orderDishes'
				},
				{
					path: 'orderDishes',
					component: OrderDishes
				},
				{
					path: 'evaluate',
					component: Evaluate
				},
				{
					path: 'seller',
					component: Seller
				}
			]
		},
		{
			path: '/logIn',
			component: LogIn,
			children: [{
					path: '',
					redirect: 'loginPhone'
				},
				{
					path: 'loginPhone',
					component: LoginPhone
				},
				{
					path: 'loginMeituan',
					component: LoginMeituan
				}
			]
		},
		{
			path: '*',
			component: NotFound
		},
		{
			path: '/adress',
			component: Adress
		},
		{
			path: '/add',
			component: Add
		},
		{
			path: '/payment',
			component: Payment
		}
	]
})