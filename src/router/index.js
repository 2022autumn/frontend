import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {

    path: '/',
    name: 'homepage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/HomePage.vue')
     },

    {
    path: '/topbar1',
    name: 'topbar1',
    component: () => import('../components/topbar1')
  },
  {
    path: '/topbar2',
    name: 'topbar2',
    component: () => import('../components/topbar2')
  },
  {
    path:'/search_outcome',
    name:'search_outcome',
    component: () => import('../views/search_outcome')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
