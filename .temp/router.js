import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import MyPage from '@/components/mypage'
import Recommend from '@/components/recommend'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MyPage',
      component: MyPage
    },
    {
      path: '/Recommend',
      component: Recommend
    }
  ]
})
