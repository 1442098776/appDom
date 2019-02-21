import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Index from '../views/index'
import Sort from '../views/sort'
import Cart from '../views/cart'
import User from '../views/user'
import Search from '../views/search'
import Particulars from '../views/particulars'
import Login from '../views/login'
import Register from '../views/register'
import Lottery from '../views/lottery'
import Order from '../views/order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/index',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'/sort',
          name:'sort',
          component:Sort
        },
        {
          path:'/cart',
          name:'cart',
          component:Cart
        },
        {
          path:'/user',
          name:'user',
          component:User
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/particulars/:id',
      name:'particulars',
      component:Particulars
    },
    {
      path:'/lottery',
      name:'lottery',
      component:Lottery
    },
    {
      path:'/order/:id',
      name:'order',
      component:Order
    }    
  ],
  linkActiveClass:'mui-active'
})
