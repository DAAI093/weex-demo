/* global Vue */
// import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vue)
Vue.use(Vuex)
/* weex initialized here, please do not move this line */
const App = require('@/index.vue')
const router = require('./router')

// create store
export const store = new Vuex.Store({
  state: {
    Result: []
  },
  mutations: {
    increment (state, getResult) {
      state.push(getResult)
    }
  }
})

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router, store}, App))
router.push('/')
