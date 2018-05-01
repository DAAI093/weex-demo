/* global Vue */
import Router from 'vue-router'
import webpage from '@/components/webpage'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'webpage',
      component: webpage
    }
  ]
})
