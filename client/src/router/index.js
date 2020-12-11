import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import not404 from '../components/not404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
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
