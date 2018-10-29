import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import Order from 'pages/order/order'
import Mine from 'pages/mine/mine'
import Shop from 'pages/shop/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
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
    },
    {
      path: '/shop',
      component: Shop
    }
  ]
})
