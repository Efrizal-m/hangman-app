import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import winnerPage from '../views/winnerPage.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/winner',
    name: 'winner',
    component: winnerPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
