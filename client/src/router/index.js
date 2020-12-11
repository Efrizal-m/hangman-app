import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import not404 from '../components/not404'
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
  },
  {
    path: '*',
    name: 'Error404',
    component: not404
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'Home') next({ name: 'Main' })
//   else next()
// })

export default router
