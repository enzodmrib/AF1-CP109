import Vue from 'vue'
import VueRouter from 'vue-router'
import SystemBar from '../components/SystemBar.vue'
import AppBar from '../components/AppBar.vue'
import Footer from '../components/Footer.vue'
import BottomNavigation from '../components/BottomNavigation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      SystemBar, 
      AppBar,
      Footer,
      BottomNavigation,
      default: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    } 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
