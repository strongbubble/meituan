import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		totalPrice: 0,
		n: 0,
	},
	mutations: {
		ADD(state, price) {
			state.n++
				state.totalPrice += price
		},
		REDUCE(state, price) {
			if(state.totalPrice > 0) {
				state.totalPrice -= price
				state.n--
			} else {
				state.totalPrice = 0
				state.n = 0
			}
		}
	},
	actions: {
		add(state, price) {
			state.commit('ADD', price)
		},
		reduce(state, price) {
			state.commit('REDUCE', price)
		}
	},
	getters: {
		getTotalPrice(state) {
			return state.totalPrice.toFixed(1)
		},
		getTotaln(state) {
			return state.n
		}
	}
})