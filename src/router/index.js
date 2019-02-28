import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import AppHome from '@/components/Home'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    }
  ]
})

Vue.use(VueAnalytics, {
  id: 'UA-99826313-1',
  router
})

Vue.use(Router)
export default router
