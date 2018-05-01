import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */
import Vuex from 'vuex'
Vue.use(Vuex)
weex.init(Vue)
/* weex initialized here, please do not move this line */
const App = require('@/index.vue')
const router = require('./router')

// create store
const store = new Vuex.Store({
  actions: {

  },
  modules: {

  }
})

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router, store}, App))
router.push('/')
