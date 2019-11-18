import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '@/views/Category'
import About from '@/views/About'
import Meal from '@/views/Meal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/meals/:name',
    name: 'meal',
    component: Meal
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
